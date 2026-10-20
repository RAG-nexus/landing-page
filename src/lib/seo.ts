import type { Metadata } from "next";

const BASE_URL = "https://ragnexus.com";
const OG_LOCALE: Record<string, string> = { es: "es_ES", en: "en_GB" };
const SUFFIX = " | RAGnexus";

interface PageMetadataInput {
  locale: string;
  /** Route below the locale, e.g. "/abogados". Empty string for the home page. */
  path?: string;
  /** Full title, ending in " | RAGnexus". */
  title: string;
  description?: string;
  noindex?: boolean;
}

/**
 * One source for title, description, canonical, Open Graph and Twitter tags.
 * og/twitter titles drop the " | RAGnexus" suffix. hreflang is handled elsewhere.
 */
export function buildMetadata({
  locale,
  path = "",
  title,
  description,
  noindex,
}: PageMetadataInput): Metadata {
  const url = `${BASE_URL}/${locale}${path}`;
  const shortTitle = title.endsWith(SUFFIX) ? title.slice(0, -SUFFIX.length) : title;

  return {
    title: { absolute: title },
    ...(description ? { description } : {}),
    alternates: { canonical: url },
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
