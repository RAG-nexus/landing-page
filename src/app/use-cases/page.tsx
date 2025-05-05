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
      title: "Use Cases | How RAGnexus AI Chatbots Transform Businesses",
      description:
        "Discover real-world use cases of RAGnexus AI chatbots. Learn how businesses leverage our solutions to streamline operations, enhance customer support, and unlock the power of their internal knowledge.",
    },
    es: {
      title:
        "Casos de Uso | Cómo los Chatbots de RAGnexus Transforman Empresas",
      description:
        "Descubre casos de uso reales de los chatbots de RAGnexus. Aprende cómo las empresas aprovechan nuestras soluciones para optimizar operaciones, mejorar el soporte al cliente y aprovechar el conocimiento interno.",
    },
  };

  return metaData[searchParams.lang as keyof typeof metaData];
}

const UseCasesPage: React.FC = () => {
  const { t } = useTranslation("use-cases");
  return (
    <section className="py-16 dark:bg-gray-700" id="offer">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 gap-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle
              style={{
                color: "#04a118",
              }}
            >
              {t`rag-nexus-chat.title`}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-flow-col gap-4 grid-flow-row md:grid-cols-2">
            <div>
              <p>{t`rag-nexus-chat.descriptionP1`}</p>
              <p>{t`rag-nexus-chat.descriptionP2`}</p>
            </div>
            <div>
              <video
                className="rounded-md"
                width={600}
                height={600}
                autoPlay
                loop
                muted
              >
                <source src="/project-rag.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UseCasesPage;
