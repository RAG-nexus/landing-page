import { useTranslations } from "next-intl";
import { ChevronRight, Linkedin, Mail } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { CEO_EMAIL } from "@/constants";
import { AUTHOR_PHOTO_PATH, LINKEDIN_PERSON_URL } from "@/constants/social";
import { PERSON_NAME, authorBio } from "@/lib/jsonld";
import { getPageSeo } from "@/lib/page-seo";
import { CopyButton } from "./copy-button";

const contactLink =
  "inline-flex items-center gap-2 font-medium text-gray-900 dark:text-white underline decoration-gray-300 dark:decoration-gray-600 underline-offset-4 transition-colors hover:decoration-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded";

export function AuthorHero({ locale }: { locale: string }) {
  const t = useTranslations("author");
  // Same labels as the BreadcrumbList in the JSON-LD.
  const homeLabel = getPageSeo("/", locale).breadcrumb;
  const pageLabel = getPageSeo("/javier-perez", locale).breadcrumb;
  const bio = authorBio(locale);

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

      {/* Card on the same 12-column grid as AuthorSection: the photo fills columns 1-4 edge to edge
          and stretches to the text's height, and the text starts where the letter below starts. */}
      <div className="mt-8 sm:mt-10 overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/40 grid grid-cols-1 md:grid-cols-12 md:gap-12">
        {AUTHOR_PHOTO_PATH && (
          <div className="relative md:col-span-4 aspect-[4/3] sm:aspect-[16/9] md:aspect-auto bg-gray-200 dark:bg-gray-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={AUTHOR_PHOTO_PATH}
              alt={PERSON_NAME}
              width={460}
              height={460}
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
            />
          </div>
        )}

        <div className="md:col-start-5 md:col-span-8 px-6 py-8 sm:px-10 sm:py-10 md:pl-0 md:pr-12 md:py-12 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            {PERSON_NAME}
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            {t.rich("role", {
              company: (chunks) => (
                <Link href="/" className={contactLink}>
                  {chunks}
                </Link>
              ),
            })}
          </p>

          <p className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 max-w-2xl text-lg leading-8 text-gray-700 dark:text-gray-300">
            {bio}
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
              <CopyButton text={bio} label={t("bio-copy")} copiedLabel={t("bio-copied")} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
