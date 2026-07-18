import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav";
import { routing } from "@/i18n/routing";
import { PostHogProvider } from '../providers'
import PostHogPageView from '../PostHogPageView'
import { Suspense } from 'react'

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>

      <body
        className={`${inter.className} flex flex-col bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-100 min-h-screen`}
      >
      <NextIntlClientProvider messages={messages}>
        <PostHogProvider>
          <Suspense fallback={null}>
            <PostHogPageView />
          </Suspense>
          <Analytics />
          <Script
            id="__webwhizSdk__"
            src="https://widget.webwhiz.ai/webwhiz-sdk.js"
            data-chatbot-id="66c62c89b94e891acbdb5180"
          />
          <NavBar />
          <div className="flex-grow min-w-full">{children}</div>
          <Footer />
          <Script id="_cookie_banner_">
            {`var _iub = _iub || [];
            _iub.csConfiguration = {"siteId":3748707,"cookiePolicyId":72497857,"lang":"${locale}"};`}
          </Script>
          <Script
            id="_iubenda_autoblocking_"
            src="https://cs.iubenda.com/autoblocking/3748707.js"
          />
          <Script
            id="_iubenda_cs_"
            src="//cdn.iubenda.com/cs/iubenda_cs.js"
            async
            />
        </PostHogProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
