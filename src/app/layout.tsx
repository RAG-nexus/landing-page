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
          src="http://widget.webwhiz.ai/webwhiz-sdk.js"
          data-chatbot-id="66c626b3b523619c67c94428"
        />
        <NavBar />
        <div className="flex-grow min-w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
