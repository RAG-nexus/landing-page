import React from "react";
import { CustomLink } from "./ui/CustomLink";
import { Card } from "./ui/card";

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
  return (
    <Card className=" p-4">
      <h3>
        Talk directly with the {title}, {name} at:
      </h3>
      <p>
        <CustomLink href={`mailto:${email}`} className="text-xl">
          {email}
        </CustomLink>
      </p>
    </Card>
  );
};

export default ContactWithMe;
