"use client";
import React from "react";
import { CustomLink } from "./ui/CustomLink";
import { Card } from "./ui/card";
import { useTranslations } from "next-intl";

interface ContactWithMeProps {
  name: string;
  email: string;
  title: string;
}

export const ContactWithMe: React.FC<ContactWithMeProps> = ({
  name,
  email,
  title,
}) => {
  const t = useTranslations("home");
  return (
    <Card className=" p-4">
      <h3>{t("talk-with-employee-x-cta", { name, title })}</h3>
      <p>
        <CustomLink href={`mailto:${email}`} className="text-xl">
          {email}
        </CustomLink>
      </p>
    </Card>
  );
};
