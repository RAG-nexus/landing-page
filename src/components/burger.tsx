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
import { OpenIcon, CloseIcon } from "@/components/ui/burger-icons";

export const Burger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, lang } = useTranslation("common");
  const handleClickOnBurgerButton = () => {
    setIsOpen((status) => !status);
  };
  return (
    <div className="lg:hidden">
      <button onClick={handleClickOnBurgerButton}>
        {isOpen ? <OpenIcon /> : <CloseIcon />}
      </button>
      {isOpen ? (
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
      ) : null}
    </div>
  );
};
