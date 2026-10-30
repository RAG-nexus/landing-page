import { useTranslations } from "next-intl";
import { ArrowRight, ChevronRight, Linkedin, Mail } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { CEO_EMAIL } from "@/constants";
import { AUTHOR_PHOTO_PATH, LINKEDIN_PERSON_URL } from "@/constants/social";
import { PERSON_NAME } from "@/lib/jsonld";
import { getPageSeo } from "@/lib/page-seo";

const contactLink =
  "inline-flex items-center gap-2 font-medium text-gray-900 dark:text-white underline decoration-gray-300 dark:decoration-gray-600 underline-offset-4 transition-colors hover:decoration-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded";

export function AuthorHero({ locale }: { locale: string }) {
  const t = useTranslations("author");
  // Same labels as the BreadcrumbList in the JSON-LD.
  const homeLabel = getPageSeo("/", locale).breadcrumb;
  const pageLabel = getPageSeo("/javier-perez", locale).breadcrumb;

  return (
    <header className="max-w-5xl mx-auto px-4 pt-8 sm:pt-12 pb-14 sm:pb-20">
      <nav aria-label={t("breadcrumb-label")}>
        <ol className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
          <li>
            <Link
              href="/"
              className="hover:text-gray-900 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            >
              {homeLabel}
            </Link>
          </li>
          <li aria-hidden="true">
            <ChevronRight className="w-3.5 h-3.5" />
          </li>
          <li aria-current="page" className="text-gray-700 dark:text-gray-200">
            {pageLabel}
          </li>
        </ol>
      </nav>

      {/* Same 12-column grid as AuthorSection, so the name lines up with the text below. */}
      <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12 md:items-end">
        {AUTHOR_PHOTO_PATH && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={AUTHOR_PHOTO_PATH}
            alt={PERSON_NAME}
            width={208}
            height={208}
            fetchPriority="high"
            className="md:col-span-4 w-28 sm:w-44 lg:w-52 aspect-square rounded-xl object-cover bg-gray-100 dark:bg-gray-800"
          />
        )}

        <div className="md:col-start-5 md:col-span-8">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            {PERSON_NAME}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            {t.rich("role", {
              company: (chunks) => (
                <Link href="/" className={contactLink}>
                  {chunks}
                </Link>
              ),
            })}
          </p>

          <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm sm:text-[0.95rem]">
            <li>
              <a href={`mailto:${CEO_EMAIL}`} className={contactLink}>
                <Mail className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" />
                {CEO_EMAIL}
              </a>
            </li>
            {LINKEDIN_PERSON_URL && (
              <li>
                <a href={LINKEDIN_PERSON_URL} rel="me noopener noreferrer" target="_blank" className={contactLink}>
                  <Linkedin className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" />
                  {t("linkedin")}
                </a>
              </li>
            )}
            <li>
              <Link href="/contact" className={contactLink}>
                {t("book-call")}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
