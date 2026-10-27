import { describe, expect, it } from "vitest";
import { routing, NOINDEX_PATHNAMES, type AppPathname } from "@/i18n/routing";
import {
  ID,
  articleNode,
  buildGraph,
  clean,
  organizationNode,
  pageGraph,
  PERSON_NAME,
  authorBio,
  personNode,
  schemaCopy,
  serializeJsonLd,
  softwareNode,
  websiteNode,
  type JsonLdGraph,
  type JsonValue,
} from "./jsonld";

const routes = Object.keys(routing.pathnames) as AppPathname[];
const indexable = routes.filter((r) => !NOINDEX_PATHNAMES.includes(r));
const locales = ["es", "en"] as const;

const FORBIDDEN = [
  /alucinaci/i,
  /hallucinat/i,
  /entrenado con/i,
  /trained on/i,
  /100 ?% (seguro|secure)/i,
  /certificado SOC/i,
  /app universal/i,
  /\b(aws|azure|bedrock|vertex|openrouter|hostman|google cloud)\b/i,
  /aggregateRating|"review"|"offers"|"award"/,
];

function walk(v: JsonValue, fn: (value: JsonValue, key?: string) => void, key?: string) {
  fn(v, key);
  if (Array.isArray(v)) v.forEach((x) => walk(x, fn, key));
  else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) walk(x, fn, k);
}

function refs(graph: JsonLdGraph): string[] {
  const out: string[] = [];
  graph["@graph"].forEach((node) => {
    for (const [k, v] of Object.entries(node)) {
      if (k === "@id") continue;
      walk(v, (x) => {
        if (x && typeof x === "object" && !Array.isArray(x) && "@id" in x) out.push(String(x["@id"]));
      });
    }
  });
  return out;
}

describe("pageGraph", () => {
  for (const locale of locales) {
    for (const route of indexable) {
      describe(`${locale} ${route}`, () => {
        const graph = pageGraph(route, locale)!;

        it("is valid JSON with a single @graph and schema.org context", () => {
          const parsed = JSON.parse(serializeJsonLd(graph));
          expect(parsed["@context"]).toBe("https://schema.org");
          expect(Array.isArray(parsed["@graph"])).toBe(true);
        });

        it("has unique @id and every reference resolves inside the graph", () => {
          const ids = graph["@graph"].map((n) => n["@id"]);
          expect(new Set(ids).size).toBe(ids.length);
          for (const r of refs(graph)) expect(ids).toContain(r);
        });

        it("has no undefined, null, empty strings, empty arrays or empty objects", () => {
          walk(graph as unknown as JsonValue, (v) => {
            expect(v).not.toBeUndefined();
            expect(v).not.toBeNull();
            expect(v).not.toBe("");
            if (Array.isArray(v)) expect(v.length).toBeGreaterThan(0);
            else if (v && typeof v === "object") expect(Object.keys(v).length).toBeGreaterThan(0);
          });
        });

        it("contains no forbidden terms, offers, ratings or reviews", () => {
          const text = JSON.stringify(graph);
          for (const re of FORBIDDEN) expect(text).not.toMatch(re);
        });
      });
    }
  }

  it("returns null for noindex pages", () => {
    for (const route of NOINDEX_PATHNAMES) {
      for (const l of locales) expect(pageGraph(route, l)).toBeNull();
    }
  });

  it("home: Organization, WebSite, SoftwareApplication and Person", () => {
    const types = pageGraph("/", "es")!["@graph"].map((n) => n["@type"]);
    expect(types).toEqual(["Organization", "WebSite", "SoftwareApplication", "Person"]);
  });

  it("inner pages: WebPage + BreadcrumbList, home has no breadcrumb", () => {
    const types = pageGraph("/services", "en")!["@graph"].map((n) => n["@type"]);
    expect(types).toEqual(["Organization", "WebSite", "Person", "WebPage", "BreadcrumbList"]);
    expect(pageGraph("/", "en")!["@graph"].some((n) => n["@type"] === "BreadcrumbList")).toBe(false);
  });

  it("law firms page: WebPage about the organization and the software", () => {
    const g = pageGraph("/abogados", "es")!["@graph"];
    const page = g.find((n) => n["@type"] === "WebPage")!;
    expect(page.about).toEqual([{ "@id": ID.organization }, { "@id": ID.software }]);
    expect(g.some((n) => n["@id"] === ID.software)).toBe(true);
  });

  it("author page: ProfilePage whose mainEntity is the full Person", () => {
    const g = pageGraph("/javier-perez", "en")!["@graph"];
    const profile = g.find((n) => n["@type"] === "ProfilePage")!;
    expect(profile.mainEntity).toEqual({ "@id": ID.person });
    const person = g.find((n) => n["@id"] === ID.person)!;
    expect(person.knowsAbout).toBeDefined();
    expect(person.description).toMatch(/founder and CEO of RAGnexus/);
  });

  it("uses fixed, absolute @id's that are identical in ES and EN", () => {
    const ids = (l: string) =>
      pageGraph("/", l)!["@graph"].map((n) => n["@id"]);
    expect(ids("es")).toEqual(ids("en"));
    expect(ids("es")).toEqual([ID.organization, ID.website, ID.software, ID.person]);
    expect(ID.organization).toBe("https://ragnexus.com/#organization");
  });
});

describe("entities", () => {
  it("organization has the required facts and no empty sameAs entries", () => {
    const org = organizationNode("en");
    expect(org.name).toBe("RAGnexus");
    expect(org.founder).toEqual({ "@id": ID.person });
    expect(org.areaServed).toBe("Europe");
    expect(org.address).toMatchObject({ addressLocality: "Barcelona", addressCountry: "ES" });
    expect(org.description).toBe(
      "RAGnexus is building the private AI workspace for European companies: answers cited to your own documents, data kept in Europe."
    );
    const cleaned = clean(org) as Record<string, JsonValue>;
    for (const url of cleaned.sameAs as string[]) expect(url).toMatch(/^https:\/\//);
    expect(cleaned.sameAs).toContain("https://www.crunchbase.com/organization/ragnexus");
  });

  it("website has no SearchAction", () => {
    expect(JSON.stringify(websiteNode())).not.toMatch(/SearchAction/);
  });

  it("software has no offers or aggregateRating and ES/EN feature lists match in size", () => {
    const es = softwareNode("es");
    const en = softwareNode("en");
    expect(es.offers).toBeUndefined();
    expect(es.aggregateRating).toBeUndefined();
    expect((es.featureList as string[]).length).toBe((en.featureList as string[]).length);
    expect(es.url).toBe("https://ragnexus.com/es");
    expect(en.url).toBe("https://ragnexus.com/en");
  });

  it("only the full person (author page) declares the photo; the short one has no image", () => {
    expect(clean(personNode("es")) as object).not.toHaveProperty("image");
    expect(personNode("es", { full: true }).image).toBe("https://ragnexus.com/javier-perez.jpg");
    expect(personNode("en", { full: true }).image).toBe("https://ragnexus.com/javier-perez.jpg");
  });

  it("localizes the person's job title and url", () => {
    expect(personNode("es").jobTitle).toBe("CEO y fundador");
    expect(personNode("en").jobTitle).toBe("CEO & Founder");
    expect(personNode("en").url).toBe("https://ragnexus.com/en/javier-perez");
  });
});

describe("shared strings (page and JSON-LD come from one source)", () => {
  it("the author page texts are exactly what the Person declares", () => {
    for (const locale of locales) {
      const person = personNode(locale, { full: true });
      const copy = schemaCopy(locale);
      expect(person.name).toBe(PERSON_NAME);
      expect(person.jobTitle).toBe(copy.jobTitle);
      expect(person.knowsAbout).toEqual(copy.knowsAbout);
      expect(person.description).toBe(authorBio(locale));
      expect(copy.knowsAbout).toHaveLength(4);
    }
  });

  it("the organization description is the one shown in 'what he is building'", () => {
    for (const locale of locales) {
      expect(organizationNode(locale).description).toBe(schemaCopy(locale).organizationDescription);
    }
  });
});

describe("buildGraph / serializeJsonLd", () => {
  it("rejects duplicate @id's", () => {
    expect(() => buildGraph([websiteNode(), websiteNode()])).toThrow(/Duplicate/);
  });

  it("clean drops empty values", () => {
    expect(clean({ a: "", b: [], c: {}, d: undefined, e: null, f: [undefined, "x"], g: 0, h: false })).toEqual({
      f: ["x"],
      g: 0,
      h: false,
    });
  });

  it("escapes characters that could close the script tag", () => {
    const graph = buildGraph([
      { "@id": "https://ragnexus.com/#x", "@type": "Thing", name: "</script><b>&" },
    ]);
    const out = serializeJsonLd(graph);
    expect(out).not.toMatch(/[<>&]/);
    expect(JSON.parse(out)["@graph"][0].name).toBe("</script><b>&");
  });
});

describe("articleNode (for future guides)", () => {
  const article = articleNode({
    locale: "en",
    url: "https://ragnexus.com/en/guides/x",
    headline: "H",
    description: "D",
    datePublished: "2026-11-02",
  });

  it("links author and publisher by @id and defaults dateModified", () => {
    expect(article.author).toEqual({ "@id": ID.person });
    expect(article.publisher).toEqual({ "@id": ID.organization });
    expect(article.dateModified).toBe("2026-11-02");
    expect(article.mainEntityOfPage).toEqual({ "@id": "https://ragnexus.com/en/guides/x#webpage" });
  });

  it("omits image when there is none", () => {
    expect(clean(article) as object).not.toHaveProperty("image");
  });
});
