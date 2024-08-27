import React from "react";
import { NavLink } from "@/components/ui/navLink";
import {
  ABOUT_PAGE_PATH,
  CONTACT_PAGE_PATH,
  HOME_PAGE_PATH,
  RAG_NEXUS_SVG,
  SERVICES_PAGE_PATH,
  USE_CASES_PAGE_PATH,
} from "@/constants";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import ChangeLanguage from "./change-language";

const NavBar: React.FC = () => {
  const { t, lang } = useTranslation("common");
  return (
    <nav
      className="bg-white py-4 flex justify-evenly"
      style={{
        backgroundColor: "#04a118",
        borderColor: "#59A52C",
      }}
    >
      <div className="px-4 flex justify-between items-center w-4/5">
        <a className="flex items-center space-x-2" href={HOME_PAGE_PATH}>
          <img
            alt="RAGnexus logo"
            className="h-14 w-28"
            height="40"
            src={RAG_NEXUS_SVG}
            style={{
              aspectRatio: "40/80",
              objectFit: "cover",
            }}
            width="40"
          />
        </a>
        <div className="hidden lg:flex w-1/2 justify-center gap-x-8">
          <NavLink url={ABOUT_PAGE_PATH}>{t("about")}</NavLink>
          <NavLink url={`/${lang}/${SERVICES_PAGE_PATH}`}>
            {t("services")}
          </NavLink>
          <NavLink url={`/${lang}/${USE_CASES_PAGE_PATH}`}>
            {t("use-cases")}
          </NavLink>
          <NavLink url={`/${lang}/${CONTACT_PAGE_PATH}`}>
            {t("contact")}
          </NavLink>
        </div>
        <Link
          className="hidden lg:block bg-white p-2 rounded-md hover:bg-slate-800 hover:text-white dark:hover:bg-white dark:bg-slate-800 dark:text-white dark:hover:text-slate-800"
          href={`/${lang}/${CONTACT_PAGE_PATH}`}
        >
          {t("get-started")}
        </Link>
        <ChangeLanguage />
      </div>
    </nav>
  );
};

export { NavBar };
