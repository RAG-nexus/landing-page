import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export function CTAFinalAbogados() {
  const t = useTranslations("abogados");

  return (
    <section className="py-32 bg-gray-900 text-white relative overflow-hidden" id="final-cta">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl opacity-70" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl opacity-70" />
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-white tracking-tight">
          {t("cta_h2")}
        </h2>
        <p className="text-xl lg:text-2xl text-emerald-100/80 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
          {t("cta_sub")}
        </p>
        
        <div className="flex flex-col items-center gap-8">
          <Link href="/contact">
            <Button size="lg" className="text-xl px-12 py-8 bg-white hover:bg-gray-100 text-emerald-900 font-bold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:-translate-y-1">
              {t("cta_button")}
            </Button>
          </Link>
          
          <div className="flex flex-col items-center gap-3">
            <span className="text-emerald-200/60 text-xs uppercase tracking-widest font-bold">
              {t("cta_secondary")}
            </span>
            <a href="mailto:javier@ragnexus.com" className="text-lg text-white hover:text-emerald-300 font-medium border-b border-emerald-500/30 hover:border-emerald-300 transition-colors pb-1 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              javier@ragnexus.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
