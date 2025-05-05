import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import useTranslation from "next-translate/useTranslation";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { lang } = useTranslation();
  return (
    <html lang={lang} className="h-full">
      <body
        className={`${inter.className} flex flex-col h-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-100 min-h-screen`}
      >
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
          _iub.csConfiguration = {"siteId":3748707,"cookiePolicyId":72497857,"lang":"es"};`}
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
      </body>
    </html>
  );
}
