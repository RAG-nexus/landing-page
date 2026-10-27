import { PageJsonLd } from "@/components/json-ld";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/contact-form";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata("/contact", locale);
}

export default async function Contact({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  return (
    <div className="flex justify-center items-center self-center min-w-full mb-8">
      <PageJsonLd route="/contact" locale={locale} />
      <div className="min-w-lg mt-10">
        <div className="text-center">
          <h2 className="text-gray-900 dark:text-gray-50">{t("get-in-touch")}</h2>
          <p className="text-gray-600 dark:text-gray-400">{t("cta")}</p>
        </div>
        <section className="pt-10 flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-center">
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
