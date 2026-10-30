import { useTranslations } from "next-intl";
import { Source_Serif_4 } from "next/font/google";
import { Link } from "@/i18n/navigation";
import { AuthorSection } from "./author-section";

// Only the first-person letter is set in a serif, so it reads as written by Javier.
const serif = Source_Serif_4({ subsets: ["latin"], display: "swap" });

export function AuthorLetter() {
  const t = useTranslations("author");

  return (
    <AuthorSection id="why-ragnexus" title={t("letter-title")}>
      <div
        className={`${serif.className} space-y-6 text-lg sm:text-xl leading-8 sm:leading-9 text-gray-800 dark:text-gray-200`}
      >
        <p>{t("letter-1")}</p>
        <p>{t("letter-2")}</p>
        <p>{t("letter-3")}</p>
        <p>
          {t.rich("letter-4", {
            lawfirms: (chunks) => (
              <Link
                href="/abogados"
                className="underline decoration-gray-300 dark:decoration-gray-600 underline-offset-4 transition-colors hover:decoration-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
              >
                {chunks}
              </Link>
            ),
          })}
        </p>
        <p className="pt-2 italic">{t("letter-signature")}</p>
      </div>
    </AuthorSection>
  );
}
