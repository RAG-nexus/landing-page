import type { Locale } from "@/i18n/routing";

/**
 * Registry of guides signed by Javier Pérez. The author page lists whatever is
 * in here for the current locale and hides the section when there is none.
 * There are no guides yet: do not add placeholder entries.
 */
export interface Guide {
  /** Absolute or site-relative path of the guide page. */
  url: string;
  locale: Locale;
  title: string;
  description: string;
  /** ISO 8601 date, e.g. "2026-11-02". */
  datePublished: string;
  dateModified?: string;
  /** Absolute URL of the lead image, if any. */
  image?: string;
}

export const GUIDES: Guide[] = [];

export function guidesByAuthor(locale: string): Guide[] {
  return GUIDES.filter((g) => g.locale === locale).sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished)
  );
}
