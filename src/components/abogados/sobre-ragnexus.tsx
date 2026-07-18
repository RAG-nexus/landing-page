import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function SobreRAGnexus() {
  const t = useTranslations("abogados");

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200" id="sobre-nosotros">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 tracking-tight">
              {t("sobre_h2")}
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
              <p>{t("sobre_p1")}</p>
              <p>{t("sobre_p2")}</p>
            </div>
            {/* TODO: Implement the link back once the /about page is ready */}
            {/* <Link href="/about" className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
              {t("sobre_link")}
            </Link> */}
          </div>

          <div className="mt-8 lg:mt-0">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl relative">
              {/* Fallback to emoji if no photo */}
              <div className="w-24 h-24 bg-gray-100 rounded-full border-4 border-white shadow-md flex items-center justify-center text-4xl mb-6 absolute -top-12 left-8">
                👨‍💻
              </div>
              <div className="pt-10">
                <blockquote className="text-xl text-gray-800 italic font-medium leading-relaxed mb-8">
                  {t("sobre_cita")}
                </blockquote>
                <div>
                  <p className="font-bold text-gray-900 text-lg">{t("sobre_nombre")}</p>
                  <p className="text-gray-500">{t("sobre_rol")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
