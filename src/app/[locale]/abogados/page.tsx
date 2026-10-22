import { setRequestLocale } from "next-intl/server";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

import { HeroAbogados } from "@/components/abogados/hero-abogados";
import { ProblemaAbogados } from "@/components/abogados/problema-abogados";
import { SolucionAbogados } from "@/components/abogados/solucion-abogados";
import { DiferenciacionAbogados } from "@/components/abogados/diferenciacion-abogados";
import { ModalidadesDespliegue } from "@/components/abogados/modalidades-despliegue";
import { CumplimientoNormativo } from "@/components/abogados/cumplimiento-normativo";
import { CasosUsoAbogados } from "@/components/abogados/casos-uso-abogados";
import { SobreRAGnexus } from "@/components/abogados/sobre-ragnexus";
import { FAQAbogados } from "@/components/abogados/faq-abogados";
import { CTAFinalAbogados } from "@/components/abogados/cta-final-abogados";
import { CostCalculator } from "@/components/cost-calculator";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const metaData = {
    es: {
      title: "IA privada para despachos de abogados en España | RAGnexus",
      description:
        "Asistente de IA para despachos de 20 a 80 abogados: encuentra precedentes y cláusulas internas citando la fuente. Datos en Europa y opción on-premise.",
    },
    en: {
      title: "Private AI for law firms in Spain | RAGnexus",
      description:
        "An AI assistant for firms of 20 to 80 lawyers: find internal precedents and clauses with the source cited. Data kept in Europe, on-premise option.",
    },
  };

  const { title, description } = metaData[locale as keyof typeof metaData] ?? metaData.en;
  return buildMetadata({ locale, route: "/abogados", title, description });
}

export default async function AbogadosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <HeroAbogados />
      <ProblemaAbogados />
      <SolucionAbogados />
      <CostCalculator audience="lawyers" className="bg-white" />
      <DiferenciacionAbogados />
      <ModalidadesDespliegue />
      <CumplimientoNormativo />
      <CasosUsoAbogados />
      <SobreRAGnexus />
      <FAQAbogados />
      <CTAFinalAbogados />
    </main>
  );
}
