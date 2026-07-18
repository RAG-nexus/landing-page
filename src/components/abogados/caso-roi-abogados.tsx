import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function CasoROIAbogados() {
  const t = useTranslations("abogados");

  return (
    <section className="py-24 bg-white" id="roi">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t("roi_h2")}
          </h2>
          <p className="text-xl text-gray-600">
            {t("roi_sub")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Narrativa Izquierda */}
          <div className="flex flex-col gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative mt-4 lg:mt-0">
              <div className="absolute top-0 left-8 transform -translate-y-1/2">
                <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">{t("roi_antes_badge")}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t("roi_antes_title")}</h3>
              <p className="text-gray-600 leading-relaxed">{t("roi_antes_desc")}</p>
            </div>
            
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 relative shadow-sm mt-4 lg:mt-0">
              <div className="absolute top-0 left-8 transform -translate-y-1/2">
                <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase">{t("roi_despues_badge")}</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 mb-3">{t("roi_despues_title")}</h3>
              <p className="text-emerald-800 leading-relaxed">{t("roi_despues_desc")}</p>
            </div>
          </div>

          {/* Tabla Derecha */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden mt-4 lg:mt-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="p-5 font-semibold text-sm">{t("roi_table_metrica")}</th>
                    <th className="p-5 font-semibold text-sm text-center border-l border-gray-800">{t("roi_table_antes")}</th>
                    <th className="p-5 font-bold text-sm text-center bg-emerald-900 border-l border-emerald-800">{t("roi_table_despues")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    [t("roi_t1_m"), t("roi_t1_a"), t("roi_t1_d")],
                    [t("roi_t2_m"), t("roi_t2_a"), t("roi_t2_d")],
                    [t("roi_t3_m"), t("roi_t3_a"), t("roi_t3_d")],
                    [t("roi_t4_m"), t("roi_t4_a"), t("roi_t4_d")],
                    [t("roi_t5_m"), t("roi_t5_a"), t("roi_t5_d")],
                  ].map(([m, a, d], i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-gray-700 font-medium text-sm border-r border-gray-100">{m}</td>
                      <td className="p-4 text-center text-gray-500 text-sm border-r border-gray-100">{a}</td>
                      <td className="p-4 text-center text-emerald-700 font-semibold text-sm bg-emerald-50/50">{d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 text-center max-w-2xl mx-auto mb-10 mt-6 lg:mt-0">
          {t("roi_nota")}
        </p>

        <div className="text-center">
          <Link href="/contact">
            <Button size="lg" className="text-lg px-10 py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(5,150,105,0.2)] max-w-xs sm:max-w-none">
              {t("roi_cta")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
