import { useTranslations } from "next-intl";
import { authorBio } from "@/lib/jsonld";
import { AuthorSection } from "./author-section";
import { CopyButton } from "./copy-button";

/** Third-person bio for introductions and articles. Same text as the Person JSON-LD description. */
export function AuthorBio({ locale }: { locale: string }) {
  const t = useTranslations("author");
  const bio = authorBio(locale);

  return (
    <AuthorSection id="bio" title={t("bio-title")}>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">{bio}</p>
      <div className="mt-5">
        <CopyButton text={bio} label={t("bio-copy")} copiedLabel={t("bio-copied")} />
      </div>
    </AuthorSection>
  );
}
