import { useTranslations } from "next-intl";
import { Archive, TrendingDown, ShieldAlert, Clock } from "lucide-react";

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
      </div>
    </section>
  );
}
