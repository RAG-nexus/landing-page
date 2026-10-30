import { PageJsonLd } from "@/components/json-ld";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata("/use-cases", locale);
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
      <PageJsonLd route="/use-cases" locale={locale} />
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
