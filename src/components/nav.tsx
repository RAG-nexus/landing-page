"use client";
import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { MobileNav } from "./mobile-nav";
import ChangeLanguage from "./change-language";
import {
  CONTACT_PAGE_PATH,
  RAG_NEXUS_SVG,
  SERVICES_PAGE_PATH,
  USE_CASES_PAGE_PATH,
  INTEGRATIONS_PAGE_PATH,
  ABOUT_PAGE_PATH,
} from "@/constants";

const NavBar: React.FC = () => {
  const t = useTranslations("common");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const hasDarkHero = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onLight = scrolled || !hasDarkHero;

  const linkClass = onLight
    ? "text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
    : "text-white/80 hover:text-white text-sm font-medium transition-colors";

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
        onLight
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="px-6 flex justify-between items-center w-full max-w-7xl">
        <div className="flex items-center gap-3">
          <MobileNav scrolled={onLight} />
          <Link className="flex items-center" href="/">
            <img
              alt="RAGnexus logo"
              className={`h-9 w-auto object-contain transition-all duration-300 ${
                onLight ? "brightness-0" : ""
              }`}
              height="36"
              src={RAG_NEXUS_SVG}
              width="80"
            />
          </Link>
        </div>

        <div className="hidden lg:flex justify-center gap-x-8">
          <Link href={ABOUT_PAGE_PATH} className={linkClass}>{t("about")}</Link>
          <Link href={SERVICES_PAGE_PATH} className={linkClass}>{t("services")}</Link>
          <Link href={USE_CASES_PAGE_PATH} className={linkClass}>{t("use-cases")}</Link>
          <Link href={INTEGRATIONS_PAGE_PATH} className={linkClass}>{t("integrations")}</Link>
          <Link href={CONTACT_PAGE_PATH} className={linkClass}>{t("contact")}</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link
            className={`hidden lg:block px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              onLight
                ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm"
                : "bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_0_16px_rgba(5,150,105,0.4)]"
            }`}
            href={CONTACT_PAGE_PATH}
          >
            {t("get-started-free")}
          </Link>
          <ChangeLanguage scrolled={onLight} />
        </div>
      </div>
    </nav>
    {!hasDarkHero && <div aria-hidden className="h-[60px]" />}
    </>
  );
};

export { NavBar };
