"use client";
import React, { useState } from "react";
import {
  ABOUT_PAGE_PATH,
  CONTACT_PAGE_PATH,
  HOME_PAGE_PATH,
  SERVICES_PAGE_PATH,
} from "@/constants";
import { NavLinkMobile } from "./ui/navLinkMobile";
import useTranslation from "next-translate/useTranslation";

export const Burger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang } = useTranslation("common");
  return (
    <div className="sm:hidden">
      <button onClick={() => setIsOpen(!isOpen)}>
        <svg
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12"></path>
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="flex flex-col absolute top-24 inset-x-0 bg-green-light/25 backdrop-blur p-2 mx-2 rounded-lg z-50">
          <NavLinkMobile url={HOME_PAGE_PATH}>Home</NavLinkMobile>
          <NavLinkMobile url={ABOUT_PAGE_PATH}>{t`about`}</NavLinkMobile>
          <NavLinkMobile
            url={`/${lang}/${SERVICES_PAGE_PATH}`}
          >{t`services`}</NavLinkMobile>
          <NavLinkMobile
            url={`/${lang}/${CONTACT_PAGE_PATH}`}
          >{t`contact`}</NavLinkMobile>
        </div>
      )}
    </div>
  );
};
