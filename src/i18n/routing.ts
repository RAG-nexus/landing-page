import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es"] as const,
  defaultLocale: "en",
  localePrefix: "always",
  // The root "/" picks a language in src/middleware.ts (Accept-Language + the
  // language cookie). Everything else is served as-is: a /es/... or /en/... URL
  // never redirects by language, and next-intl must not set its own cookie
  // (only the language selector does) nor add its own hreflang Link header.
  localeDetection: false,
  localeCookie: false,
  alternateLinks: false,
  // Keys are the internal routes (the folders in src/app/[locale]); values are
  // the public slug per language.
  pathnames: {
    "/": "/",
    "/abogados": { es: "/abogados", en: "/law-firms" },
    "/politica-de-privacidad": {
      es: "/politica-de-privacidad",
      en: "/privacy-policy",
    },
    "/services": { es: "/servicios", en: "/services" },
    "/use-cases": { es: "/casos-de-uso", en: "/use-cases" },
    "/integrations": { es: "/integraciones", en: "/integrations" },
    "/contact": { es: "/contacto", en: "/contact" },
    "/thank-you": { es: "/gracias", en: "/thank-you" },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;

/** Pages that are noindex: no hreflang and not in the sitemap. */
export const NOINDEX_PATHNAMES: readonly AppPathname[] = ["/thank-you"];

/** Old slug (without locale) -> new slug, per locale. 301 redirects. */
export const LEGACY_REDIRECTS: { locale: Locale; from: string; to: string }[] = [
  { locale: "en", from: "/abogados", to: "/law-firms" },
  { locale: "en", from: "/politica-de-privacidad", to: "/privacy-policy" },
  { locale: "es", from: "/services", to: "/servicios" },
  { locale: "es", from: "/use-cases", to: "/casos-de-uso" },
  { locale: "es", from: "/integrations", to: "/integraciones" },
  { locale: "es", from: "/contact", to: "/contacto" },
  { locale: "es", from: "/thank-you", to: "/gracias" },
];

export const SITE_URL = "https://ragnexus.com";

/** Public path for a route in a locale, e.g. ("/abogados", "en") -> "/law-firms". */
export function publicPath(route: AppPathname, locale: Locale): string {
  const entry = routing.pathnames[route];
  const path = typeof entry === "string" ? entry : entry[locale];
  return path === "/" ? "" : path;
}

/** Absolute URL of a route in a locale. The home is /es and /en (no trailing slash). */
export function absoluteUrl(route: AppPathname, locale: Locale): string {
  return `${SITE_URL}/${locale}${publicPath(route, locale)}`;
}

/** es / en / x-default for a route. Home x-default is the bare root; the rest use /en. */
export function hreflangUrls(route: AppPathname): Record<string, string> {
  return {
    es: absoluteUrl(route, "es"),
    en: absoluteUrl(route, "en"),
    "x-default": route === "/" ? `${SITE_URL}/` : absoluteUrl(route, "en"),
  };
}
