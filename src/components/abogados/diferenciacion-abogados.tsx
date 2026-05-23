import { useTranslations } from "next-intl";
import { Check, X, AlertTriangle } from "lucide-react";

export function DiferenciacionAbogados() {
  const t = useTranslations("abogados");

  const rows = [
    { label: t("diff_t1"), r: "yes", c: "no", cp: "warn", h: "yes" },
    { label: t("diff_t2"), r: "yes", c: "warn", cp: "warn", h: "no" },
    { label: t("diff_t3"), r: "yes", c: "no", cp: "no", h: "no" },
    { label: t("diff_t4"), r: "yes", c: "no", cp: "no", h: "yes" },
    { label: t("diff_t5"), r: "yes", c: "no", cp: "no", h: "no" },
    { label: t("diff_t6"), r: "yes", c: "no", cp: "no", h: "no" }, // User prompt says ChatGPT Ent is ❌ for Support in Spain
    { label: t("diff_t7"), r: "yes", c: "warn", cp: "yes", h: "no", h_label: t("diff_t7_h") }, // ($$$$)
    { label: t("diff_t8"), r: "yes", c: "yes", cp: "yes", h: "no", h_label: t("diff_t8_h") }, // meses
  ];

  return (
    <section className="py-24 bg-gray-50" id="comparativa">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t("diff_h2")}
          </h2>
          <p className="text-xl text-gray-600">
            {t("diff_sub")}
          </p>
        </div>

        {/* Tabla Desktop */}
        <div className="hidden lg:block overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white mb-12">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200">
                <th className="p-5 font-semibold text-gray-700 w-1/3">{t("diff_col1")}</th>
                <th className="p-5 font-bold text-center text-emerald-700 bg-emerald-50 border-x border-emerald-100 w-1/6">{t("diff_col2")}</th>
                <th className="p-5 font-semibold text-center text-gray-600 border-r border-gray-200 w-1/6">{t("diff_col3")}</th>
                <th className="p-5 font-semibold text-center text-gray-600 border-r border-gray-200 w-1/6">{t("diff_col4")}</th>
                <th className="p-5 font-semibold text-center text-gray-600 w-1/6">{t("diff_col5")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map((row, i) => (
                <tr key={i} className="hover:bg-gray-50 transition-colors">
                  <td className="p-5 text-gray-800 font-medium text-sm">{row.label}</td>
                  <td className="p-5 text-center bg-emerald-50/30 border-x border-emerald-100">
                    <div className="flex justify-center"><Check className="w-5 h-5 text-emerald-600 stroke-[3]" /></div>
                  </td>
                  <td className="p-5 text-center border-r border-gray-200">
                     <div className="flex flex-col items-center gap-1">
                       {row.c === "yes" && <Check className="w-5 h-5 text-gray-400" />}
                       {row.c === "no" && <X className="w-5 h-5 text-red-400 stroke-[3]" />}
                       {row.c === "warn" && <AlertTriangle className="w-5 h-5 text-amber-500" />}
                     </div>
                  </td>
                  <td className="p-5 text-center border-r border-gray-200">
                     <div className="flex flex-col items-center gap-1">
                       {row.cp === "yes" && <Check className="w-5 h-5 text-gray-400" />}
                       {row.cp === "no" && <X className="w-5 h-5 text-red-400 stroke-[3]" />}
                       {row.cp === "warn" && <AlertTriangle className="w-5 h-5 text-amber-500" />}
                     </div>
                  </td>
                  <td className="p-5 text-center">
                    <div className="flex flex-col items-center gap-1">
                       {row.h === "yes" && <Check className="w-5 h-5 text-gray-400" />}
                       {row.h === "no" && <X className="w-5 h-5 text-red-400 stroke-[3]" />}
                       {row.h === "warn" && <AlertTriangle className="w-5 h-5 text-amber-500" />}
                       {row.h_label && <span className="text-xs text-gray-500 font-semibold">{row.h_label}</span>}
                     </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards Mobile */}
        <div className="lg:hidden space-y-6 mb-12">
            {rows.map((row, i) => (
                <div key={i} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
                    <p className="font-bold text-gray-900 mb-4 text-center text-sm">{row.label}</p>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col items-center gap-2 p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                            <span className="text-[10px] font-bold text-emerald-700 uppercase">RAGnexus</span>
                            <Check className="w-5 h-5 text-emerald-600 stroke-[3]" />
                        </div>
                        <div className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100 text-center">
                            <span className="text-[10px] font-bold text-gray-500 uppercase">ChatGPT</span>
                            {row.c === "yes" && <Check className="w-5 h-5 text-gray-400" />}
                            {row.c === "no" && <X className="w-5 h-5 text-red-400 stroke-[3]" />}
                            {row.c === "warn" && <AlertTriangle className="w-5 h-5 text-amber-500" />}
                        </div>
                        <div className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100 text-center">
                            <span className="text-[10px] font-bold text-gray-500 uppercase">Copilot</span>
                            {row.cp === "yes" && <Check className="w-5 h-5 text-gray-400" />}
                            {row.cp === "no" && <X className="w-5 h-5 text-red-400 stroke-[3]" />}
                            {row.cp === "warn" && <AlertTriangle className="w-5 h-5 text-amber-500" />}
                        </div>
                        <div className="flex flex-col items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100 text-center">
                            <span className="text-[10px] font-bold text-gray-500 uppercase">Harvey</span>
                            {row.h === "yes" && <Check className="w-5 h-5 text-gray-400" />}
                            {row.h === "no" && <X className="w-5 h-5 text-red-400 stroke-[3]" />}
                            {row.h === "warn" && <AlertTriangle className="w-5 h-5 text-amber-500" />}
                            {row.h_label && <span className="text-[10px] text-gray-500 font-semibold mt-auto leading-tight">{row.h_label}</span>}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        <div className="bg-emerald-50 rounded-2xl border border-emerald-100 p-8 text-center max-w-4xl mx-auto shadow-sm">
          <p className="text-lg font-bold text-emerald-900 mb-3">
            {t("diff_destacado_1")}
          </p>
          <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {t("diff_destacado_2")}
          </p>
        </div>
      </div>
    </section>
  );
}
