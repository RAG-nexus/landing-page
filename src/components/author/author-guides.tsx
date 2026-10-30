import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { guidesByAuthor } from "@/lib/guides";
import { AuthorSection } from "./author-section";

/** Guides signed by Javier. Renders nothing while there are none (no filler text). */
export function AuthorGuides({ locale }: { locale: string }) {
  const t = useTranslations("author");
  const guides = guidesByAuthor(locale);
  if (guides.length === 0) return null;

  const dateFormat = new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB", {
    dateStyle: "long",
  });

  return (
    <AuthorSection id="guides" title={t("guides-title")}>
      <ul className="border-t border-gray-200 dark:border-gray-800 divide-y divide-gray-200 dark:divide-gray-800">
        {guides.map((guide) => (
          <li key={guide.url}>
            <article className="py-6">
              <time dateTime={guide.datePublished} className="text-sm text-gray-500 dark:text-gray-400">
                {dateFormat.format(new Date(guide.datePublished))}
              </time>
              <h3 className="mt-1 text-xl font-semibold text-gray-900 dark:text-white">
                <a
                  href={guide.url}
                  className="hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
                >
                  {guide.title}
                </a>
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">{guide.description}</p>
              <a
                href={guide.url}
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                {t("guide-read")}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </article>
          </li>
        ))}
      </ul>
    </AuthorSection>
  );
}
