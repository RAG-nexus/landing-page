import { useTranslations } from "next-intl";
import { Archive, TrendingDown, ShieldAlert, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COST_CALCULATOR_ANCHOR } from "@/lib/cost-calculator";

export function ProblemaAbogados() {
  const t = useTranslations("abogados");

  return (
    <section className="py-24 bg-white" id="problema">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight whitespace-pre-line">
            {t("problema_h2")}
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {t("problema_sub")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: Archive, title: t("problema_c1_title"), desc: t("problema_c1_desc") },
            { icon: Clock, title: t("problema_c2_title"), desc: t("problema_c2_desc") },
            { icon: ShieldAlert, title: t("problema_c3_title"), desc: t("problema_c3_desc") },
            { icon: TrendingDown, title: t("problema_c4_title"), desc: t("problema_c4_desc") },
          ].map((item, index) => (
            <div key={index} className="flex flex-col gap-4 p-8 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-emerald-600 shadow-sm">
                <item.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-8 text-center max-w-3xl mx-auto shadow-sm">
          <p className="text-xl font-semibold text-emerald-900">
            {t("problema_destacado")}
          </p>
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="h-auto text-lg px-6 sm:px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(5,150,105,0.2)]">
            <a href={`#${COST_CALCULATOR_ANCHOR}`}>{t("calculator_cta")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
