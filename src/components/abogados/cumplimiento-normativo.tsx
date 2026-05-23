import { useTranslations } from "next-intl";
import { Scale, Globe, FileText, Shield, ShieldCheck, HeartHandshake } from "lucide-react";

export function CumplimientoNormativo() {
  const t = useTranslations("abogados");

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200" id="cumplimiento">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t("norm_h2")}
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {t("norm_sub")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { icon: Scale, title: t("norm_c1_title"), desc: t("norm_c1_desc") },
            { icon: Globe, title: t("norm_c2_title"), desc: t("norm_c2_desc") },
            { icon: FileText, title: t("norm_c3_title"), desc: t("norm_c3_desc") },
            { icon: Shield, title: t("norm_c4_title"), desc: t("norm_c4_desc") },
            { icon: ShieldCheck, title: t("norm_c5_title"), desc: t("norm_c5_desc") },
            { icon: HeartHandshake, title: t("norm_c6_title"), desc: t("norm_c6_desc") },
          ].map((item, index) => (
            <div key={index} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0 text-gray-700 border border-gray-100">
                <item.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
