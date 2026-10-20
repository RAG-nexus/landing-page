import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "es" ? "Gracias | RAGnexus" : "Thank you | RAGnexus";
  return buildMetadata({ locale, path: "/thank-you", title, noindex: true });
}

export default async function ThankYou({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-300">
        Thank you for reaching out!
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-400">
        We will get back to you shortly.
      </p>
    </div>
  );
}
