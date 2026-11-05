import fs from "fs";
import path from "path";
import { describe, expect, it } from "vitest";
import { namespaces } from "./namespaces";

const root = path.resolve(__dirname, "../../locales");
const locales = ["es", "en"] as const;

const read = (locale: string, ns: string): Record<string, unknown> =>
  JSON.parse(fs.readFileSync(path.join(root, locale, `${ns}.json`), "utf8"));

function flatKeys(obj: unknown, prefix = ""): string[] {
  if (obj && typeof obj === "object" && !Array.isArray(obj)) {
    return Object.entries(obj).flatMap(([k, v]) => flatKeys(v, `${prefix}${k}.`));
  }
  return [prefix.slice(0, -1)];
}

// common.json and use-cases.json already differ between languages (not part of this guard).
const SYMMETRIC = namespaces.filter((ns) => ns !== "common" && ns !== "use-cases");

describe("i18n messages", () => {
  it("every locales/<locale>/*.json file is registered in namespaces", () => {
    for (const locale of locales) {
      const files = fs
        .readdirSync(path.join(root, locale))
        .filter((f) => f.endsWith(".json"))
        .map((f) => f.replace(/\.json$/, ""))
        .sort();
      expect(files).toEqual([...namespaces].sort());
    }
  });

  it.each(SYMMETRIC)("%s has the same keys in es and en", (ns) => {
    expect(flatKeys(read("es", ns)).sort()).toEqual(flatKeys(read("en", ns)).sort());
  });

  it("every t(...) key used by the author components exists in author.json (es and en)", () => {
    const dir = path.resolve(__dirname, "../components/author");
    const used = new Set<string>();
    for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".tsx"))) {
      const source = fs.readFileSync(path.join(dir, file), "utf8");
      for (const m of Array.from(source.matchAll(/\bt(?:\.rich)?\(\s*"([^"]+)"/g))) used.add(m[1]);
    }
    expect(used.size).toBeGreaterThan(10);
    for (const locale of locales) {
      const keys = new Set(flatKeys(read(locale, "author")));
      for (const key of Array.from(used)) expect(keys, `${locale}: ${key}`).toContain(key);
    }
  });

  it("no message is empty", () => {
    for (const locale of locales) {
      for (const ns of SYMMETRIC) {
        const walk = (v: unknown, p: string) => {
          if (typeof v === "string") expect(v.trim(), `${locale}/${ns}.${p}`).not.toBe("");
          else if (v && typeof v === "object")
            for (const [k, x] of Object.entries(v)) walk(x, `${p}.${k}`);
        };
        walk(read(locale, ns), "");
      }
    }
  });
});
