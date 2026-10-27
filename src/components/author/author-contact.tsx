import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { CEO_EMAIL } from "@/constants";
import { AuthorSection } from "./author-section";

export function AuthorContact() {
  const t = useTranslations("author");

  return (
    <AuthorSection id="contact" title={t("contact-title")} className="bg-gray-50 dark:bg-gray-800/40">
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">{t("contact-text")}</p>
      <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
        <Button
          asChild
          size="lg"
          className="h-auto w-full sm:w-auto py-3.5 px-7 text-base bg-emerald-600 hover:bg-emerald-500 text-white dark:bg-emerald-600 dark:hover:bg-emerald-500 dark:text-white rounded-full transition-colors"
        >
          <Link href="/contact">{t("book-call")}</Link>
        </Button>
        <a
          href={`mailto:${CEO_EMAIL}`}
          className="self-center sm:self-auto font-medium text-gray-900 dark:text-white underline decoration-gray-300 dark:decoration-gray-600 underline-offset-4 hover:decoration-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
        >
          {CEO_EMAIL}
        </a>
      </div>
    </AuthorSection>
  );
}
