import { setRequestLocale } from "next-intl/server";
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
      title: "IA privada para despachos jurídicos en España | RAGnexus",
      description: "Asistente de IA privado para despachos de 20 a 80 abogados. Encuentra precedentes, cláusulas y jurisprudencia interna en segundos. Cumple con el secreto profesional. Datos en Europa y opción on-premise sin proveedores externos.",
      openGraph: {
        title: "IA privada para despachos jurídicos | RAGnexus",
        description: "Tu equipo encuentra cualquier documento, cláusula o precedente en segundos. Tus documentos no salen de Europa.",
        type: "website",
        locale: "es_ES",
      }
    },
    en: {
      title: "Private AI for Law Firms in Spain | RAGnexus",
      description: "Private AI assistant for law firms of 20 to 80 lawyers. Find precedents, clauses, and internal case law in seconds. Complies with professional secrecy. Data in Europe and an on-premise option with no external providers.",
      openGraph: {
        title: "Private AI for Law Firms | RAGnexus",
        description: "Your team finds any document, clause, or precedent in seconds. Your documents never leave Europe.",
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
