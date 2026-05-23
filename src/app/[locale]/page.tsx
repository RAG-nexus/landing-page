import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Integrations } from "@/components";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import VideoSection from "@/components/video-section";
import {
  Search,
  Copy,
  ShieldAlert,
  Clock,
  Scale,
  Activity,
  Briefcase,
  ArrowRight,
  Check,
  X,
  AlertTriangle,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const metaData = {
    en: {
      title: "RAGnexus",
      description: "RAGnexus. Your AI enabler.",
    },
    es: {
      title: "RAGnexus",
      description: "RAGnexus. Tu conexión con la IA",
    },
  };

  return metaData[locale as keyof typeof metaData];
}

export default async function Index({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  return (
    <div key="1">
      {/* HERO — dark gradient, no image */}
      <header className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #0d2137 40%, #0a2e1a 100%)' }}>
        {/* subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        {/* glow accents */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto pt-40 pb-28 px-4 text-center relative z-10 flex flex-col items-center justify-center min-h-[90vh]">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-300 text-sm font-medium">{t("hero-tagline")}</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight whitespace-pre-line">
            {t("hero-title")}
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            {t("hero-description")}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-all duration-300 shadow-[0_0_24px_rgba(5,150,105,0.4)] hover:shadow-[0_0_36px_rgba(5,150,105,0.6)] hover:-translate-y-0.5">
                {t("hero-cta-primary")}
              </Button>
            </Link>
            <Link href="#offer" className="flex items-center justify-center gap-2 text-gray-300 hover:text-white font-medium transition-colors px-4 py-3">
              {t("hero-cta-secondary")}
            </Link>
          </div>
          <div className="w-full max-w-4xl mx-auto border-t border-gray-700/50 pt-8">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm font-medium text-gray-400">
              {t("hero-trust-bar").split(" · ").map((item: string, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      <section className="py-24 bg-gray-50 dark:bg-gray-900" id="offer">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              {t("problem-title")}
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t("problem-intro")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
            {[
              { icon: Search, text: t("problem-item-1") },
              { icon: Copy, text: t("problem-item-2") },
              { icon: ShieldAlert, text: t("problem-item-3") },
              { icon: Clock, text: t("problem-item-4") },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
                <div className="flex-shrink-0 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-emerald-600 dark:text-emerald-500">
                  <item.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed mt-1">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center bg-emerald-50 dark:bg-emerald-900/20 p-8 rounded-2xl border border-emerald-100 dark:border-emerald-800/50">
            <p className="text-xl font-semibold text-emerald-800 dark:text-emerald-300">
              {t("problem-outro")}
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white dark:bg-gray-900" id="solution">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              {t("solution-title")}
            </h2>
            <p className="text-xl text-emerald-600 dark:text-emerald-400 font-medium">
              {t("solution-subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 relative">
            {/* Step 1 */}
            <div className="flex flex-col bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm relative overflow-hidden">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 z-10">
                {t("solution-step-1-title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 z-10">
                {t("solution-step-1-desc")}
              </p>
              <div className="mt-auto relative z-10 bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-inner border border-gray-100 dark:border-gray-700">
                <Integrations minimal />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm relative overflow-hidden">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 z-10">
                {t("solution-step-2-title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 z-10">
                {t("solution-step-2-desc")}
              </p>
              <div className="mt-auto relative z-10 flex justify-center items-center h-48 bg-white dark:bg-gray-900 rounded-2xl shadow-inner border border-gray-100 dark:border-gray-700">
                <div className="flex gap-6 items-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center shadow-sm">
                    <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div className="h-0.5 w-8 bg-gray-200 dark:bg-gray-700"></div>
                  <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center relative shadow-sm">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white dark:border-gray-900 flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm relative overflow-hidden">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 z-10">
                {t("solution-step-3-title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 z-10">
                {t("solution-step-3-desc")}
              </p>
              <div className="mt-auto relative z-10 p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-inner border border-gray-100 dark:border-gray-700 h-48 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400">AI</span>
                  </div>
                  <div className="grow bg-gray-50 dark:bg-gray-800 rounded-2xl rounded-tl-sm p-4 border border-gray-100 dark:border-gray-700 shadow-sm">
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-600 rounded-full mb-2"></div>
                    <div className="h-2 w-3/4 bg-gray-200 dark:bg-gray-600 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-medium py-1 px-3 rounded-full border border-emerald-100 dark:border-emerald-800">
                    {t("solution-step-3-source")}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-10 py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(5,150,105,0.2)] hover:shadow-[0_0_30px_rgba(5,150,105,0.4)]">
                {t("solution-cta")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-50 dark:bg-gray-800" id="verticals">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              {t("verticals-title")}
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("verticals-subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Active Card - Law Firms */}
            <div className="group relative flex flex-col bg-white dark:bg-gray-900 rounded-3xl p-8 border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 transition-all hover:-translate-y-1 mt-4 lg:mt-0">
              <div className="absolute top-0 right-8 transform -translate-y-1/2">
                <span className="bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  {t("verticals-status-active")}
                </span>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-6">
                <Scale className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t("verticals-law-title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 grow">
                {t("verticals-law-desc")}
              </p>
              <Link href="/abogados" className="mt-auto inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors">
                {t("verticals-law-cta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Coming Soon - Health */}
            <div className="group flex flex-col bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm opacity-80 hover:opacity-100 transition-all hover:border-gray-300 dark:hover:border-gray-600 relative mt-4 lg:mt-0">
              <div className="absolute top-0 right-8 transform -translate-y-1/2">
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {t("verticals-status-soon")}
                </span>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-6">
                <Activity className="w-7 h-7 text-gray-500 dark:text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t("verticals-health-title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 grow">
                {t("verticals-health-desc")}
              </p>
              <Link href={{ pathname: "/contact", query: { subject: "waitlist-health" } }} className="mt-auto inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 font-semibold hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                {t("verticals-health-cta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Coming Soon - Consulting */}
            <div className="group flex flex-col bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-sm opacity-80 hover:opacity-100 transition-all hover:border-gray-300 dark:hover:border-gray-600 relative mt-4 lg:mt-0">
              <div className="absolute top-0 right-8 transform -translate-y-1/2">
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {t("verticals-status-soon")}
                </span>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-gray-500 dark:text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {t("verticals-consulting-title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 grow">
                {t("verticals-consulting-desc")}
              </p>
              <Link href={{ pathname: "/contact", query: { subject: "waitlist-consulting" } }} className="mt-auto inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 font-semibold hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
                {t("verticals-consulting-cta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {t("verticals-not-listed")}
              <Link href="/contact" className="ml-2 font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 hover:underline">
                {t("verticals-contact")} <ArrowRight className="w-4 h-4 inline-block -mt-1" />
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white dark:bg-gray-900" id="compare">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
              {t("compare-title")}
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("compare-subtitle")}
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto rounded-3xl border border-gray-200 dark:border-gray-700 shadow-sm mb-16">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                  <th className="p-6 font-semibold text-gray-900 dark:text-white text-lg w-1/2"></th>
                  <th className="p-6 font-bold text-center text-emerald-600 dark:text-emerald-400 text-xl border-l border-gray-200 dark:border-gray-700 bg-emerald-50/50 dark:bg-emerald-900/10">RAGnexus</th>
                  <th className="p-6 font-semibold text-center text-gray-500 dark:text-gray-400 text-lg border-l border-gray-200 dark:border-gray-700">ChatGPT / Copilot / Gemini</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
                {[
                  { feature: t("compare-f1"), competitor: 'cross' },
                  { feature: t("compare-f2a"), competitor: 'warning', competitorLabel: t("compare-val-depends") },
                  { feature: t("compare-f2b"), competitor: 'cross' },
                  { feature: t("compare-f2c"), competitor: 'warning', ragnexusLabel: t("compare-val-guaranteed"), competitorLabel: t("compare-val-plan-dependent") },
                  { feature: t("compare-f3"), competitor: 'cross' },
                  { feature: t("compare-f4"), competitor: 'warning' },
                  { feature: t("compare-f5"), competitor: 'cross' },
                  { feature: t("compare-f6"), competitor: 'warning', competitorLabel: t("compare-val-limited") },
                ].map((row: { feature: string; competitor: string; ragnexusLabel?: string; competitorLabel?: string }, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                    <td className="p-6 font-medium text-gray-900 dark:text-gray-200">{row.feature}</td>
                    <td className="p-6 text-center border-l border-gray-200 dark:border-gray-700 bg-emerald-50/30 dark:bg-emerald-900/5">
                      <div className="flex flex-col items-center justify-center gap-1">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                          <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 stroke-[3]" />
                        </div>
                        {row.ragnexusLabel && (
                          <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium mt-1">{row.ragnexusLabel}</span>
                        )}
                      </div>
                    </td>
                    <td className="p-6 text-center border-l border-gray-200 dark:border-gray-700">
                      <div className="flex flex-col items-center justify-center gap-1">
                        {row.competitor === 'cross' && (
                          <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                            <X className="w-5 h-5 text-red-500 dark:text-red-400 stroke-[3]" />
                          </div>
                        )}
                        {row.competitor === 'warning' && (
                          <>
                            <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
                              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-500 stroke-[2.5]" />
                            </div>
                            {row.competitorLabel && (
                              <span className="text-xs text-amber-600 dark:text-amber-500 font-medium mt-1">({row.competitorLabel})</span>
                            )}
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="lg:hidden space-y-4 mb-16">
            {[
              { feature: t("compare-f1"), ragnexus: 'check', competitor: 'cross' },
              { feature: t("compare-f2a"), ragnexus: 'check', competitor: 'warning' },
              { feature: t("compare-f2b"), ragnexus: 'check', competitor: 'cross' },
              { feature: t("compare-f2c"), ragnexus: 'check', competitor: 'warning' },
              { feature: t("compare-f3"), ragnexus: 'check', competitor: 'cross' },
              { feature: t("compare-f4"), ragnexus: 'check', competitor: 'warning' },
              { feature: t("compare-f5"), ragnexus: 'check', competitor: 'cross' },
              { feature: t("compare-f6"), ragnexus: 'check', competitor: 'warning_limited' },
            ].map((row, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <p className="font-bold text-gray-900 dark:text-white mb-4 text-center">{row.feature}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center gap-2 p-3 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100/50 dark:border-emerald-800/30">
                    <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-tighter">RAGnexus</span>
                    <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                      <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 stroke-[3]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-700">
                    <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-tighter">{t("compare-alternatives")}</span>
                    <div className="flex flex-col items-center">
                      {row.competitor === 'cross' && (
                        <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                          <X className="w-5 h-5 text-red-500 dark:text-red-400 stroke-[3]" />
                        </div>
                      )}
                      {row.competitor === 'warning' && (
                        <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
                          <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-500 stroke-[2.5]" />
                        </div>
                      )}
                      {row.competitor === 'warning_limited' && (
                        <>
                          <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center">
                            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-500 stroke-[2.5]" />
                          </div>
                          <span className="text-[10px] text-amber-600 dark:text-amber-500 font-bold mt-1">({t("compare-val-limited")})</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 lg:p-12 border border-gray-200 dark:border-gray-700 shadow-inner">
            <p className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center font-medium max-w-4xl mx-auto">
              {t("compare-closure")}
            </p>
          </div>
        </div>
      </section>
      {locale === "es" && <VideoSection />}
      <Integrations />

      {/* ROI Illustrative Case */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800" id="roi">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">{t("roi-badge")}</span>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">{t("roi-title")}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t("roi-subtitle")}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {[
              { label: t("roi-card-1-label"), before: t("roi-card-1-before"), after: t("roi-card-1-after"), icon: '🔍' },
              { label: t("roi-card-2-label"), before: t("roi-card-2-before"), after: t("roi-card-2-after"), icon: '💸' },
              { label: t("roi-card-3-label"), before: t("roi-card-3-before"), after: t("roi-card-3-after"), icon: '📈' },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">{item.label}</p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="text-gray-400 line-through text-base">{item.before}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xl">{item.after}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-emerald-900 text-white rounded-3xl p-8 lg:p-10">
            {/* Desktop View */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full text-sm min-w-[500px]">
                <thead>
                  <tr className="border-b border-emerald-700">
                    <th className="text-left py-3 text-emerald-200 font-semibold">{t("roi-table-header-concept")}</th>
                    <th className="text-right py-3 text-emerald-200 font-semibold">{t("roi-table-header-without")}</th>
                    <th className="text-right py-3 text-emerald-300 font-bold">{t("roi-table-header-with")}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-800">
                  {[
                    [t("roi-table-row-1"), t("roi-table-row-1-before"), t("roi-table-row-1-after")],
                    [t("roi-table-row-2"), t("roi-table-row-2-before"), t("roi-table-row-2-after")],
                    [t("roi-table-row-3"), t("roi-table-row-3-before"), t("roi-table-row-3-after")],
                    [t("roi-table-row-4"), t("roi-table-row-4-before"), t("roi-table-row-4-after")],
                  ].map(([concept, before, after], i) => (
                    <tr key={i}>
                      <td className="py-3 text-emerald-100">{concept}</td>
                      <td className="py-3 text-right text-gray-400">{before}</td>
                      <td className="py-3 text-right text-emerald-300 font-semibold">{after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden space-y-6">
              {[
                [t("roi-table-row-1"), t("roi-table-row-1-before"), t("roi-table-row-1-after")],
                [t("roi-table-row-2"), t("roi-table-row-2-before"), t("roi-table-row-2-after")],
                [t("roi-table-row-3"), t("roi-table-row-3-before"), t("roi-table-row-3-after")],
                [t("roi-table-row-4"), t("roi-table-row-4-before"), t("roi-table-row-4-after")],
              ].map(([concept, before, after], i) => (
                <div key={i} className="border-b border-emerald-800/50 pb-4 last:border-0">
                  <p className="text-emerald-200 font-semibold mb-3 text-sm">{concept}</p>
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-emerald-500 uppercase font-bold tracking-wider">{t("roi-table-header-without")}</span>
                      <span className="text-gray-400 text-lg">{before}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider">{t("roi-table-header-with")}</span>
                      <span className="text-emerald-300 text-xl font-bold">{after}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-emerald-400 text-xs mt-6 text-center">{t("roi-disclaimer")}</p>
          </div>
        </div>
      </section>

      {/* Founder / Built in Spain */}
      <section className="py-24 bg-white dark:bg-gray-900" id="founder">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-10 lg:p-16">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-3xl">👨‍💻</div>
              </div>
              <div>
                <blockquote className="text-xl lg:text-2xl font-medium text-gray-900 dark:text-white leading-relaxed mb-6">
                  &ldquo;{t("founder-quote")}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{t("founder-name")}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{t("founder-role")}</p>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {[t("founder-badge-1"), t("founder-badge-2"), t("founder-badge-3"), t("founder-badge-4")].map((badge, i) => (
                    <span key={i} className="inline-block bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300">{badge}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-emerald-900 text-white relative overflow-hidden" id="final-cta">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-50" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
            {t("final-cta-title")}
          </h2>
          <p className="text-xl lg:text-2xl text-emerald-100 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
            {t("final-cta-subtitle")}
          </p>
          <div className="flex flex-col items-center gap-6">
            <Link href="/contact">
              <Button size="lg" className="text-xl px-12 py-8 bg-white hover:bg-gray-100 text-emerald-900 font-bold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:-translate-y-1">
                {t("final-cta-button")}
              </Button>
            </Link>
            <div className="mt-4 flex flex-col items-center gap-2">
              <span className="text-emerald-200/80 text-sm uppercase tracking-wider font-semibold">
                {t("final-cta-secondary")}
              </span>
              <a href="mailto:javier@ragnexus.com" className="text-lg text-white hover:text-emerald-200 font-medium border-b border-emerald-400/30 hover:border-emerald-200 transition-colors pb-1 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                javier@ragnexus.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
