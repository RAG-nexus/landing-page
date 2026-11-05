import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import { PERSON_NAME } from "@/lib/jsonld";
import { AuthorSection } from "./author-section";

// Only the first-person letter is set in a serif, so it reads as written by Javier.
const serif = Source_Serif_4({ subsets: ["latin"], display: "swap" });

const H3 = "pt-6 text-2xl font-semibold leading-snug text-gray-900 dark:text-white";

export function AuthorLetter() {
  const t = useTranslations("author");

  return (
    <AuthorSection
      id="why-ragnexus"
      title={t("letter-title")}
      note={
        <>
          <time dateTime="2026-11-03">{t("letter-date")}</time>
          <span aria-hidden="true"> · </span>
          {PERSON_NAME}
        </>
      }
    >
      <div
        className={`${serif.className} space-y-6 text-lg sm:text-xl leading-8 sm:leading-9 text-gray-800 dark:text-gray-200`}
      >
        <p>{t("letter-origin-1")}</p>
        <p>{t("letter-origin-2")}</p>
        <p>{t("letter-origin-3")}</p>
        <p>{t("letter-origin-4")}</p>
        <p>{t("letter-origin-5")}</p>
        <p>{t("letter-origin-6")}</p>
        <p className="font-semibold text-gray-900 dark:text-white">{t("letter-origin-7")}</p>

        <h3 className={H3}>{t("letter-knows-title")}</h3>
        <p>{t("letter-knows-1")}</p>
        <p>{t("letter-knows-2")}</p>

        <h3 className={H3}>{t("letter-build-title")}</h3>
        <p>{t("letter-build-1")}</p>
        <p>{t("letter-build-2")}</p>
        <p>{t("letter-build-3")}</p>
        <p>{t("letter-build-4")}</p>
        <p>{t("letter-build-5")}</p>

        <h3 className={H3}>{t("letter-europe-title")}</h3>
        <p>{t("letter-europe-1")}</p>
        <p>{t("letter-europe-2")}</p>
        <p>{t("letter-europe-3")}</p>
        <p>{t("letter-europe-4")}</p>
        <p>{t("letter-europe-5")}</p>

        <h3 className={H3}>{t("letter-today-title")}</h3>
        <p>{t("letter-today-1")}</p>
        <p>{t("letter-today-2")}</p>

        <p className="pt-4 italic">{t("letter-signature")}</p>
        <p className="text-base leading-7 text-gray-500 dark:text-gray-400">{t("letter-tagline")}</p>
      </div>
    </AuthorSection>
  );
}
