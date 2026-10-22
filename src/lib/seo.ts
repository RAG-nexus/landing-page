import type { Metadata } from "next";
import {
  NOINDEX_PATHNAMES,
  absoluteUrl,
  hreflangUrls,
  type AppPathname,
  type Locale,
} from "@/i18n/routing";

const OG_LOCALE: Record<string, string> = { es: "es_ES", en: "en_GB" };
const SUFFIX = " | RAGnexus";

interface PageMetadataInput {
  locale: string;
  /** Internal route (a key of routing.pathnames), e.g. "/abogados" or "/". */
  route: AppPathname;
  /** Full title, ending in " | RAGnexus". */
  title: string;
  description?: string;
}

/**
 * One source for title, description, canonical, hreflang, Open Graph and
 * Twitter tags. og/twitter titles drop the " | RAGnexus" suffix. noindex pages
 * get no hreflang.
 */
export function buildMetadata({
  locale,
  route,
  title,
  description,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(route, locale as Locale);
  const noindex = NOINDEX_PATHNAMES.includes(route);
  const shortTitle = title.endsWith(SUFFIX) ? title.slice(0, -SUFFIX.length) : title;

  return {
    title: { absolute: title },
    ...(description ? { description } : {}),
    alternates: {
      canonical: url,
      ...(noindex ? {} : { languages: hreflangUrls(route) }),
    },
    openGraph: {
      type: "website",
      title: shortTitle,
      ...(description ? { description } : {}),
      url,
      locale: OG_LOCALE[locale] ?? OG_LOCALE.en,
    },
    twitter: {
      card: "summary",
      title: shortTitle,
      ...(description ? { description } : {}),
    },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
