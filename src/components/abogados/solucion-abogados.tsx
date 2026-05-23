import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Database, FolderSync, Cloud, Server, ShieldCheck, FileText } from "lucide-react";

export function SolucionAbogados() {
  const t = useTranslations("abogados");

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-200" id="solucion">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            {t("solucion_h2")}
          </h2>
          <p className="text-xl text-emerald-600 font-medium">
            {t("solucion_sub")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 relative">
          {[
            { 
              num: t("solucion_s1_num"), 
              title: t("solucion_s1_title"), 
              desc: t("solucion_s1_desc"), 
              visual: (
                <div className="flex items-center justify-center gap-3">
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 text-emerald-600"><Database className="w-6 h-6" /></div>
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 text-emerald-600"><FolderSync className="w-6 h-6" /></div>
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 text-emerald-600"><Cloud className="w-6 h-6" /></div>
                </div>
              )
            },
            { 
              num: t("solucion_s2_num"), 
              title: t("solucion_s2_title"), 
              desc: t("solucion_s2_desc"), 
              visual: (
                <div className="relative flex items-center justify-center text-emerald-600">
                  <Server className="w-12 h-12" />
                  <div className="absolute -bottom-2 -right-2 p-1.5 bg-white rounded-full shadow-sm border border-gray-100 text-amber-500">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
              )
            },
            { 
              num: t("solucion_s3_num"), 
              title: t("solucion_s3_title"), 
              desc: t("solucion_s3_desc"), 
              visual: (
                <div className="flex flex-col gap-2 w-full max-w-[160px] mx-auto">
                  <div className="bg-emerald-100 rounded-2xl rounded-tl-sm p-3 shadow-sm border border-emerald-200">
                    <div className="h-2 bg-emerald-200/80 rounded w-5/6 mb-2"></div>
                    <div className="h-2 bg-emerald-200/80 rounded w-full"></div>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="bg-white border border-emerald-100 rounded p-1 shadow-sm">
                        <FileText className="w-3 h-3 text-emerald-600" />
                      </div>
                      <div className="h-1.5 bg-emerald-200 rounded w-12"></div>
                    </div>
                  </div>
                </div>
              )
            },
          ].map((step, i) => (
             <div key={i} className="flex flex-col bg-white rounded-3xl p-8 border border-gray-200 shadow-sm relative overflow-hidden">
               <div className="text-4xl font-extrabold text-emerald-100 mb-4 tracking-tighter absolute top-4 right-6 opacity-50">
                 {step.num}
               </div>
               <h3 className="text-2xl font-bold text-gray-900 mb-4 z-10">
                 {step.num} — {step.title}
               </h3>
               <p className="text-gray-600 leading-relaxed mb-8 z-10 flex-grow">
                 {step.desc}
               </p>
               <div className="mt-auto relative z-10 bg-gray-50 p-6 rounded-2xl shadow-inner border border-gray-100 text-center flex items-center justify-center min-h-[8rem]">
                 {step.visual}
               </div>
             </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button size="lg" className="text-lg px-10 py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(5,150,105,0.2)]">
              {t("solucion_cta")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
