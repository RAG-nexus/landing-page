import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Head } from "@/components";
import { Footer } from "@/components/footer";
import { NavBar } from "@/components/nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RAGnexus",
  description: "RAGnexus. Your AI enabler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head title="RAGnexus" description="RAGnexus. Your AI enabler." />
      <body
        className={`${inter.className} flex flex-col h-screen bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-100 font-sans min-h-screen`}
        style={{
          fontFamily: "Open Sans, Noto sans-serif",
        }}
      >
        <NavBar />
        <div className="flex grow min-w-full">
          <div className="min-w-full">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
