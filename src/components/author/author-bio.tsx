import { useTranslations } from "next-intl";
import { CEO_EMAIL } from "@/constants";
import { authorBio, schemaCopy } from "@/lib/jsonld";
import { AuthorSection } from "./author-section";
import { CopyButton } from "./copy-button";

/** Third-person bio for introductions and articles. Same text and topics as the Person JSON-LD. */
export function AuthorBio({ locale }: { locale: string }) {
  const t = useTranslations("author");
  const bio = authorBio(locale);
  const { knowsAbout } = schemaCopy(locale);

  const row = "grid grid-cols-1 sm:grid-cols-[9rem_1fr] gap-x-6 gap-y-1 py-4";
  const dt = "text-sm text-gray-500 dark:text-gray-400";
  const dd = "text-[1.05rem] text-gray-900 dark:text-gray-100";

  return (
    <AuthorSection id="bio" title={t("bio-title")} note={t("bio-note")}>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">{bio}</p>
      <div className="mt-5">
        <CopyButton text={bio} label={t("bio-copy")} copiedLabel={t("bio-copied")} />
      </div>

      <dl className="mt-10 border-t border-gray-200 dark:border-gray-800 divide-y divide-gray-200 dark:divide-gray-800">
        <div className={row}>
          <dt className={dt}>{t("fact-expertise")}</dt>
          <dd className={dd}>
            <ul>
              {knowsAbout.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
          </dd>
        </div>
        <div className={row}>
          <dt className={dt}>{t("fact-contact")}</dt>
          <dd className={dd}>
            <a
              href={`mailto:${CEO_EMAIL}`}
              className="underline decoration-gray-300 dark:decoration-gray-600 underline-offset-4 hover:decoration-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
            >
              {CEO_EMAIL}
            </a>
          </dd>
        </div>
      </dl>
    </AuthorSection>
  );
}
