import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function CasosUsoAbogados() {
  const t = useTranslations("abogados");

  return (
    <section className="py-24 bg-white" id="casos-uso">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t("casos_h2")}
          </h2>
          <p className="text-xl text-gray-600">
            {t("casos_sub")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {[
            { area: t("casos_c1_area"), q: t("casos_c1_q"), color: "emerald" },
            { area: t("casos_c2_area"), q: t("casos_c2_q"), color: "blue" },
            { area: t("casos_c3_area"), q: t("casos_c3_q"), color: "indigo" },
            { area: t("casos_c4_area"), q: t("casos_c4_q"), color: "amber" },
            { area: t("casos_c5_area"), q: t("casos_c5_q"), color: "rose" },
            { area: t("casos_c6_area"), q: t("casos_c6_q"), color: "purple" },
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-between hover:border-emerald-200 transition-colors cursor-default">
              <div>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 
                  ${item.color === 'emerald' ? 'bg-emerald-100 text-emerald-800' : ''}
                  ${item.color === 'blue' ? 'bg-blue-100 text-blue-800' : ''}
                  ${item.color === 'indigo' ? 'bg-indigo-100 text-indigo-800' : ''}
                  ${item.color === 'amber' ? 'bg-amber-100 text-amber-800' : ''}
                  ${item.color === 'rose' ? 'bg-rose-100 text-rose-800' : ''}
                  ${item.color === 'purple' ? 'bg-purple-100 text-purple-800' : ''}
                `}>
                  {item.area}
                </span>
                <p className="text-gray-800 font-medium leading-relaxed italic mb-4">
                  {item.q}
                </p>
              </div>
              <div className="flex items-center gap-2 mt-auto">
                 <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                   <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 <span className="text-xs text-emerald-700 font-semibold uppercase">{t("responds_citing_source")}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button size="lg" className="text-lg px-8 py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(5,150,105,0.2)]">
              {t("casos_cta")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
