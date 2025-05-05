import React from "react";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../../i18n.json";
import { Languages } from "lucide-react";

const { locales } = i18nConfig;

export default function ChangeLanguage() {
  const { t, lang } = useTranslation("common");

  return locales.map((lng) => {
    if (lng === lang) return null;
    return (
      <div
        key={lng}
        className="flex flex-row gap-2 border border-solid border-slate-900 rounded-md p-2"
      >
        <Languages />
        <a href={`/${lng}`}>{t(`language-name-${lng}`)}</a>
      </div>
    );
  });
}
