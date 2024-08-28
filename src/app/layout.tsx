import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav";
import Script from "next/script";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RAGnexus",
  description: "RAGnexus. Your AI enabler.",
};

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={lang} className="h-full">
      <body
        className={`${inter.className} flex flex-col h-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-100 min-h-screen`}
      >
        <Script
          id="__webwhizSdk__"
          src="https://widget.webwhiz.ai/webwhiz-sdk.js"
          data-chatbot-id="66c62c89b94e891acbdb5180"
        />
        <NavBar />
        <div className="flex-grow min-w-full">{children}</div>
        <Footer />
        <Script id="__linkedin_partner_id__">
          {`_linkedin_partner_id = "7569273";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);`}
        </Script>
        <Script id="__linkedin_tracking__">
          {`(function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);})(window.lintrk);`}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            className="hidden"
            alt=""
            src="https://px.ads.linkedin.com/collect/?pid=7569273&fmt=gif"
          />
        </noscript>
      </body>
    </html>
  );
}
