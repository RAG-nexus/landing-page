import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import useTranslation from "next-translate/useTranslation";
import type { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { lang: string };
}): Promise<Metadata> {
  const metaData = {
    en: {
      title: "Services | Custom AI Chatbots and Integrations by RAGnexus",
      description:
        "Explore RAGnexus services, including custom chatbot development, seamless integration into your platforms, subscription maintenance, and expert training. Empower your business with AI-driven solutions.",
    },
    es: {
      title: "Servicios | Chatbots Personalizados e Integraciones por RAGnexus",
      description:
        "Descubre los servicios de RAGnexus, como el desarrollo de chatbots personalizados, integración en tus plataformas, mantenimiento por suscripción y formación experta. Impulsa tu negocio con soluciones basadas en IA.",
    },
  };

  return metaData[searchParams.lang as keyof typeof metaData];
}

interface ListDiscProps {
  children: React.ReactNode;
}

const ListDisc: React.FC<ListDiscProps> = ({ children }) => (
  <ul className="list-disc list-inside text-lg text-gray-500 dark:text-gray-400 space-y-4">
    {children}
  </ul>
);

type TListElement = {
  element: string;
};

const ServicesPage: React.FC = () => {
  const { t } = useTranslation("services");
  return (
    <section className="py-16 dark:bg-gray-700" id="offer">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle
              style={{
                color: "#04a118",
              }}
            >
              {t`custom-personal-assistants-development.title`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ListDisc>
              <li>{t`custom-personal-assistants-development.li1`}</li>
              <li>{t`custom-personal-assistants-development.li2`}</li>
              <li>
                {t`custom-personal-assistants-development.li3`}
                <ul className=" pl-6">
                  {t<TListElement[]>(
                    "custom-personal-assistants-development.subli3",
                    {},
                    { returnObjects: true }
                  ).map(({ element }: TListElement) => (
                    <li key={element}>{element}</li>
                  ))}
                </ul>
              </li>
            </ListDisc>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle
              style={{
                color: "#04a118",
              }}
            >
              {t`integration-of-assistants-into-existing-platforms-and-systems.title`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ListDisc>
              <li>
                {t`integration-of-assistants-into-existing-platforms-and-systems.li1`}
              </li>
              <li>
                {t`integration-of-assistants-into-existing-platforms-and-systems.li2`}
              </li>
              <li>
                {t`integration-of-assistants-into-existing-platforms-and-systems.li3`}
              </li>
            </ListDisc>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle
              style={{
                color: "#04a118",
              }}
            >
              {t`subscriptions-and-maintenance-services.title`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ListDisc>
              <li>{t`subscriptions-and-maintenance-services.li1`}</li>
              <li>{t`subscriptions-and-maintenance-services.li2`}</li>
              <li>{t`subscriptions-and-maintenance-services.li3`}</li>
            </ListDisc>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle
              style={{
                color: "#04a118",
              }}
            >
              {t`specialized-training-and-consultancy.title`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ListDisc>
              <li>{t`specialized-training-and-consultancy.li1`}</li>
              <li>{t`specialized-training-and-consultancy.li2`}</li>
              <li>{t`specialized-training-and-consultancy.li3`}</li>
            </ListDisc>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServicesPage;
