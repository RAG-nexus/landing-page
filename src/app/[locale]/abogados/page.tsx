import { PageJsonLd } from "@/components/json-ld";
import { setRequestLocale } from "next-intl/server";
import { pageMetadata } from "@/lib/seo";
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
  return pageMetadata("/abogados", locale);
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
      <PageJsonLd route="/abogados" locale={locale} />
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
