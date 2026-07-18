import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export function ModalidadesDespliegue() {
  const t = useTranslations("abogados");

  return (
    <section className="py-24 bg-white" id="modalidades">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t("mod_h2")}
          </h2>
          <p className="text-xl text-gray-600">
            {t("mod_sub")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-stretch">
          {/* Cloud */}
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-10 border border-gray-200 flex flex-col relative overflow-hidden mt-4 lg:mt-0">
            <div className="mb-6">
              <span className="inline-block bg-gray-200 text-gray-700 text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase mb-4">
                {t("mod_c1_tag")}
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{t("mod_c1_title")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("mod_c1_desc")}
              </p>
            </div>

            <div className="flex-grow mb-8">
              <ul className="space-y-4">
                {[t("mod_c1_l1"), t("mod_c1_l2"), t("mod_c1_l4"), t("mod_c1_l5")].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-200 mt-auto">
              <p className="text-sm text-gray-500 leading-relaxed italic">
                {t("mod_c1_ideal")}
              </p>
            </div>
          </div>

          {/* Sovereign */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 flex flex-col relative overflow-hidden transform md:-translate-y-2 mt-4 lg:mt-0">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg tracking-wider uppercase">
              {t("recommended_badge")}
            </div>
            <div className="mb-6">
              <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase mb-4">
                {t("mod_c2_tag")}
              </span>
              <h3 className="text-3xl font-bold text-emerald-900 mb-4">{t("mod_c2_title")}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t("mod_c2_desc")}
              </p>
            </div>

            <div className="flex-grow mb-8">
              <ul className="space-y-4">
                {[t("mod_c2_l1"), t("mod_c2_l2"), t("mod_c2_l3"), t("mod_c2_l4"), t("mod_c2_l5"), t("mod_c2_l6")].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-800 font-medium">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0 stroke-[3]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-emerald-100 mt-auto">
              <p className="text-sm text-emerald-800 leading-relaxed italic">
                {t("mod_c2_ideal")}
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center max-w-2xl mx-auto mb-10">
          {t("mod_footnote")}
        </p>

        <div className="text-center">
          <Link href="/contact">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-gray-300 text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-white rounded-full transition-all duration-300 max-w-xs sm:max-w-none">
              {t("mod_cta")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
