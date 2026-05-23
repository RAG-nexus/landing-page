import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function HeroAbogados() {
  const t = useTranslations("abogados");

  return (
    <section className="bg-gray-50 pt-32 pb-24 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Texto a la izquierda (60%) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 rounded-full px-4 py-1.5 mb-8">
            <span className="text-emerald-800 text-xs font-bold tracking-widest">{t("hero_tagline")}</span>
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight whitespace-pre-line">
            {t("hero_title")}
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
            {t("hero_description")}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(5,150,105,0.2)] hover:shadow-[0_0_30px_rgba(5,150,105,0.4)]">
                {t("hero_cta_primary")}
              </Button>
            </Link>
            <Link href="#solucion" className="flex items-center justify-center gap-2 text-gray-600 hover:text-emerald-600 font-semibold transition-colors px-4 py-3">
              {t("hero_cta_secondary")}
            </Link>
          </div>
          <div className="w-full border-t border-gray-200 pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> <span>{t("hero_trust_1")}</span></div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> <span>{t("hero_trust_2")}</span></div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> <span>{t("hero_trust_3")}</span></div>
              <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> <span>{t("hero_trust_4")}</span></div>
            </div>
          </div>
        </div>

        {/* Mockup a la derecha (40%) */}
        <div className="lg:col-span-5 relative">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden flex flex-col">
            <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              <span className="ml-4 text-xs font-semibold text-gray-500">RAGnexus Chat</span>
            </div>
            <div className="p-6 flex flex-col gap-6">
              {/* Pregunta */}
              <div className="flex justify-end">
                <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tr-sm px-5 py-3 max-w-[85%] text-sm shadow-sm border border-gray-200">
                  {t("hero_mockup_q")}
                </div>
              </div>
              {/* Respuesta */}
              <div className="flex justify-start">
                <div className="bg-emerald-50 text-emerald-900 rounded-2xl rounded-tl-sm px-5 py-4 max-w-[90%] text-sm shadow-sm border border-emerald-100">
                  <p className="mb-4 leading-relaxed">{t("hero_mockup_a")}</p>
                  <div className="bg-white rounded-lg border border-emerald-200 p-3 shadow-sm inline-flex items-center gap-3">
                    <div className="p-1.5 bg-emerald-100 rounded text-emerald-600">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </div>
                    <span className="text-xs font-semibold text-gray-600">{t("hero_mockup_source")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative blur */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
        </div>
      </div>
    </section>
  );
}
