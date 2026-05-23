import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

import { HeroAbogados } from "@/components/abogados/hero-abogados";
import { ProblemaAbogados } from "@/components/abogados/problema-abogados";
import { SolucionAbogados } from "@/components/abogados/solucion-abogados";
import { CasoROIAbogados } from "@/components/abogados/caso-roi-abogados";
import { DiferenciacionAbogados } from "@/components/abogados/diferenciacion-abogados";
import { ModalidadesDespliegue } from "@/components/abogados/modalidades-despliegue";
import { CumplimientoNormativo } from "@/components/abogados/cumplimiento-normativo";
import { CasosUsoAbogados } from "@/components/abogados/casos-uso-abogados";
import { SobreRAGnexus } from "@/components/abogados/sobre-ragnexus";
import { FAQAbogados } from "@/components/abogados/faq-abogados";
import { CTAFinalAbogados } from "@/components/abogados/cta-final-abogados";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const metaData = {
    es: {
      title: "IA privada para despachos jurídicos en España | RAGnexus",
      description: "Asistente de IA privado para despachos de 20 a 80 abogados. Encuentra precedentes, cláusulas y jurisprudencia interna en segundos. Cumple con el secreto profesional. Sin enviar datos a OpenAI, Google o Microsoft.",
      openGraph: {
        title: "IA privada para despachos jurídicos | RAGnexus",
        description: "Tu equipo encuentra cualquier documento, cláusula o precedente en segundos. Sin que un solo documento salga del despacho.",
        type: "website",
        locale: "es_ES",
      }
    },
    en: {
      title: "Private AI for Law Firms in Spain | RAGnexus",
      description: "Private AI assistant for law firms of 20 to 80 lawyers. Find precedents, clauses, and internal case law in seconds. Complies with professional secrecy. Without sending data to OpenAI, Google, or Microsoft.",
      openGraph: {
        title: "Private AI for Law Firms | RAGnexus",
        description: "Your team finds any document, clause, or precedent in seconds. Without a single document leaving the firm.",
        type: "website",
        locale: "en_US",
      }
    }
  };

  return metaData[locale as keyof typeof metaData] || metaData.es;
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
      <CasoROIAbogados />
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
