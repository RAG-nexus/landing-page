import {
  NOINDEX_PATHNAMES,
  SITE_URL,
  absoluteUrl,
  type AppPathname,
  type Locale,
} from "@/i18n/routing";
import {
  AUTHOR_PHOTO_PATH,
  CRUNCHBASE_ORGANIZATION_URL,
  LINKEDIN_COMPANY_URL,
  LINKEDIN_PERSON_URL,
} from "@/constants/social";
import { getPageSeo } from "@/lib/page-seo";

/**
 * schema.org JSON-LD for ragnexus.com.
 *
 * Rules: facts only, one @graph per page, stable @id's shared by every page and
 * language (so entities reference each other instead of duplicating), and no
 * empty / undefined fields (buildGraph strips them). Text here must match what
 * the page shows.
 *
 * Use it from a page (server component):
 *
 *   <PageJsonLd route="/services" locale={locale} />            // standard page
 *
 * or build a custom graph:
 *
 *   <JsonLd graph={buildGraph([organizationNode(locale), websiteNode()])} />
 *
 * Future guides (Article / BlogPosting), signed by Javier and published by RAGnexus:
 *
 *   <JsonLd
 *     graph={buildGraph([
 *       organizationNode(locale),
 *       websiteNode(),
 *       personNode(locale),
 *       articleNode({
 *         locale,
 *         url: "https://ragnexus.com/en/guides/private-ai",
 *         headline: "…",                   // exactly the visible H1
 *         description: "…",                // exactly the meta description
 *         datePublished: "2026-11-02",
 *         dateModified: "2026-11-02",
 *         image: "https://ragnexus.com/guides/private-ai.jpg",
 *       }),
 *     ])}
 *   />
 *
 * Only one <JsonLd> per page.
 */

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | JsonValue[]
  | { [key: string]: JsonValue };

export interface JsonLdNode {
  "@id": string;
  "@type": string | string[];
  [key: string]: JsonValue;
}

export interface JsonLdGraph {
  "@context": "https://schema.org";
  "@graph": JsonLdNode[];
}

export const ID = {
  organization: `${SITE_URL}/#organization`,
  website: `${SITE_URL}/#website`,
  software: `${SITE_URL}/#software`,
  person: `${SITE_URL}/#javier-perez`,
} as const;

const ref = (id: string) => ({ "@id": id });

const LOGO_URL = `${SITE_URL}/ragnexus.png`;
// public/ragnexus.png is a 3163x1569 wordmark (2:1); there is no square PNG yet.

export interface Copy {
  organizationDescription: string;
  region: string;
  jobTitle: string;
  knowsAbout: string[];
  featureList: string[];
  personBio: string;
}

/** Shared by the JSON-LD and the author page, so what is visible is what is declared. */
export const PERSON_NAME = "Javier Pérez";
export const ORGANIZATION_LOCALITY = "Barcelona";

const COPY: Record<Locale, Copy> = {
  es: {
    organizationDescription:
      "RAGnexus construye el espacio de trabajo con IA privado para empresas europeas: respuestas citadas a los documentos de la empresa y datos en Europa.",
    region: "Cataluña",
    jobTitle: "CEO y fundador",
    knowsAbout: [
      "Inteligencia artificial",
      "Retrieval-Augmented Generation",
      "Protección de datos",
      "Desarrollo de software",
    ],
    featureList: [
      "Respuestas que citan el documento de origen",
      "Más de 40 integraciones con herramientas de empresa",
      "Nube europea o despliegue on-premise",
      "Sin uso de tus datos para entrenar modelos",
    ],
    personBio:
      "Javier Pérez es el fundador y CEO de RAGnexus. Ingeniero de software con base en Barcelona, trabaja con TypeScript, React y Node.js, y construye RAGnexus para que las empresas europeas puedan usar IA sobre su propio conocimiento sin perder el control de sus datos. Escribe sobre IA privada, protección de datos y regulación europea de la IA.",
  },
  en: {
    organizationDescription:
      "RAGnexus is building the private AI workspace for European companies: answers cited to your own documents, data kept in Europe.",
    region: "Catalonia",
    jobTitle: "CEO & Founder",
    knowsAbout: [
      "Artificial intelligence",
      "Retrieval-Augmented Generation",
      "Data protection",
      "Software development",
    ],
    featureList: [
      "Answers that cite the source document",
      "40+ integrations with business tools",
      "EU cloud or on-premise deployment",
      "Your data is never used to train models",
    ],
    personBio:
      "Javier Pérez is the founder and CEO of RAGnexus. A software engineer based in Barcelona who works with TypeScript, React and Node.js, he is building RAGnexus so European companies can use AI on their own knowledge without losing control of their data. He writes about private AI, data protection and European AI regulation.",
  },
};

const asLocale = (locale: string): Locale => (locale === "es" ? "es" : "en");

/** Texts that appear both in the JSON-LD and on the page (bio, job title, topics...). */
export const schemaCopy = (locale: string): Readonly<Copy> => COPY[asLocale(locale)];

/** Biography shown on the author page (same text as the Person description). */
export const authorBio = (locale: string) => COPY[asLocale(locale)].personBio;

export function organizationNode(localeRaw: string): JsonLdNode {
  const locale = asLocale(localeRaw);
  return {
    "@type": "Organization",
    "@id": ID.organization,
    name: "RAGnexus",
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
    email: "javier@ragnexus.com",
    description: COPY[locale].organizationDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: ORGANIZATION_LOCALITY,
      addressRegion: COPY[locale].region,
      addressCountry: "ES",
    },
    founder: ref(ID.person),
    areaServed: "Europe",
    sameAs: [LINKEDIN_COMPANY_URL, CRUNCHBASE_ORGANIZATION_URL],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "javier@ragnexus.com",
      availableLanguage: ["es", "en"],
    },
  };
}

export function websiteNode(): JsonLdNode {
  // No SearchAction: the site has no search.
  return {
    "@type": "WebSite",
    "@id": ID.website,
    url: `${SITE_URL}/`,
    name: "RAGnexus",
    publisher: ref(ID.organization),
    inLanguage: ["es", "en"],
  };
}

export function softwareNode(localeRaw: string): JsonLdNode {
  const locale = asLocale(localeRaw);
  // No offers and no aggregateRating.
  return {
    "@type": "SoftwareApplication",
    "@id": ID.software,
    name: "RAGnexus",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: absoluteUrl("/", locale),
    publisher: ref(ID.organization),
    description: COPY[locale].organizationDescription,
    featureList: COPY[locale].featureList,
  };
}

/**
 * Person. `full: false` is the short version shown next to the founder quote on
 * pages that only mention him; `full: true` is for his author page.
 */
export function personNode(localeRaw: string, { full = false } = {}): JsonLdNode {
  const locale = asLocale(localeRaw);
  return {
    "@type": "Person",
    "@id": ID.person,
    name: PERSON_NAME,
    jobTitle: COPY[locale].jobTitle,
    worksFor: ref(ID.organization),
    url: absoluteUrl("/javier-perez", locale),
    sameAs: [LINKEDIN_PERSON_URL],
    // The photo is only visible on the author page, so only the full node declares it.
    ...(full
      ? {
          image: AUTHOR_PHOTO_PATH ? `${SITE_URL}${AUTHOR_PHOTO_PATH}` : undefined,
          knowsAbout: COPY[locale].knowsAbout,
          description: COPY[locale].personBio,
        }
      : {}),
  };
}

export function breadcrumbNode(localeRaw: string, route: AppPathname): JsonLdNode {
  const locale = asLocale(localeRaw);
  const url = absoluteUrl(route, locale);
  return {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: getPageSeo("/", locale).breadcrumb,
        item: absoluteUrl("/", locale),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: getPageSeo(route, locale).breadcrumb,
        item: url,
      },
    ],
  };
}

/** WebPage for an inner page (type can be swapped, e.g. ProfilePage). */
export function webPageNode(
  localeRaw: string,
  route: AppPathname,
  options: { type?: string; about?: string[]; mainEntity?: string } = {}
): JsonLdNode {
  const locale = asLocale(localeRaw);
  const url = absoluteUrl(route, locale);
  return {
    "@type": options.type ?? "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: getPageSeo(route, locale).title,
    inLanguage: locale,
    isPartOf: ref(ID.website),
    about: (options.about ?? [ID.organization]).map(ref),
    mainEntity: options.mainEntity ? ref(options.mainEntity) : undefined,
    breadcrumb: ref(`${url}#breadcrumb`),
  };
}

export interface ArticleInput {
  locale: string;
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  type?: "Article" | "BlogPosting";
}

/** Guide signed by Javier and published by RAGnexus. Not used on any page yet. */
export function articleNode(input: ArticleInput): JsonLdNode {
  return {
    "@type": input.type ?? "Article",
    "@id": `${input.url}#article`,
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    inLanguage: asLocale(input.locale),
    author: ref(ID.person),
    publisher: ref(ID.organization),
    mainEntityOfPage: ref(`${input.url}#webpage`),
    image: input.image ? [input.image] : undefined,
  };
}

function isEmpty(v: JsonValue): boolean {
  if (v === undefined || v === null || v === "") return true;
  if (Array.isArray(v)) return v.length === 0;
  if (typeof v === "object") return Object.keys(v).length === 0;
  return false;
}

/** Recursively drops undefined / null / "" / empty arrays and objects. */
export function clean(value: JsonValue): JsonValue {
  if (Array.isArray(value)) {
    const items = value.map(clean).filter((v) => !isEmpty(v));
    return items;
  }
  if (value && typeof value === "object") {
    const out: { [key: string]: JsonValue } = {};
    for (const [k, v] of Object.entries(value)) {
      const c = clean(v);
      if (!isEmpty(c)) out[k] = c;
    }
    return out;
  }
  return value;
}

export function buildGraph(nodes: JsonLdNode[]): JsonLdGraph {
  const ids = new Set<string>();
  for (const node of nodes) {
    if (ids.has(node["@id"])) throw new Error(`Duplicate JSON-LD @id: ${node["@id"]}`);
    ids.add(node["@id"]);
  }
  return {
    "@context": "https://schema.org",
    "@graph": nodes.map((n) => clean(n) as JsonLdNode),
  };
}

/** Safe to inline in a <script>: no raw "<", ">", "&" or line separators. */
export function serializeJsonLd(graph: JsonLdGraph): string {
  return JSON.stringify(graph)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

/**
 * Graph for a page, or null when the page must carry none (noindex pages).
 * Home: Organization + WebSite + SoftwareApplication + Person (short).
 * Others: Organization + WebSite + Person (short) + WebPage + BreadcrumbList,
 * plus SoftwareApplication on the law-firms page. Author page: full Person + ProfilePage.
 */
export function pageGraph(route: AppPathname, localeRaw: string): JsonLdGraph | null {
  if (NOINDEX_PATHNAMES.includes(route)) return null;
  const locale = asLocale(localeRaw);

  if (route === "/") {
    return buildGraph([
      organizationNode(locale),
      websiteNode(),
      softwareNode(locale),
      personNode(locale),
    ]);
  }

  const nodes: JsonLdNode[] = [organizationNode(locale), websiteNode()];

  if (route === "/javier-perez") {
    nodes.push(
      personNode(locale, { full: true }),
      webPageNode(locale, route, { type: "ProfilePage", mainEntity: ID.person }),
      breadcrumbNode(locale, route)
    );
    return buildGraph(nodes);
  }

  // Organization.founder points at Javier, so every page carries his short node
  // (the footer links to his author page on all pages).
  nodes.push(personNode(locale));

  if (route === "/abogados") {
    nodes.push(
      softwareNode(locale),
      webPageNode(locale, route, { about: [ID.organization, ID.software] })
    );
  } else {
    nodes.push(webPageNode(locale, route));
  }
  nodes.push(breadcrumbNode(locale, route));
  return buildGraph(nodes);
}
