import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const metaData = {
    es: {
      title: "Caso de uso: un chat de IA para tu web | RAGnexus",
      description:
        "El mismo chat que ves en esta web: un asistente de IA que usa el contenido de tu sitio para responder con contexto completo sobre tu oferta.",
    },
    en: {
      title: "Use case: an AI chat for your website | RAGnexus",
      description:
        "The same chat you see on this site: an AI assistant that uses your website's content to answer with full context about your offer.",
    },
  };

  const { title, description } = metaData[locale as keyof typeof metaData] ?? metaData.en;
  return buildMetadata({ locale, route: "/use-cases", title, description });
}

export default async function UseCasesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("use-cases");
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
              {t("rag-nexus-chat.title")}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid lg:grid-flow-col gap-4 grid-flow-row lg:grid-cols-2">
            <div>
              <p>{t("rag-nexus-chat.descriptionP1")}</p>
              <p>{t("rag-nexus-chat.descriptionP2")}</p>
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
}
