import React from "react";
import { CustomLink } from "./ui/CustomLink";
import { Card } from "./ui/card";
import useTranslation from "next-translate/useTranslation";

interface ContactWithMeProps {
  name: string;
  email: string;
  title: string;
}

const ContactWithMe: React.FC<ContactWithMeProps> = ({
  name,
  email,
  title,
}) => {
  const { t } = useTranslation("home");
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

export default ContactWithMe;
