import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/contact-form";
import { buildMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const metaData = {
    es: {
      title: "Reserva una demo de 20 minutos | RAGnexus",
      description:
        "Habla 20 minutos con el fundador y te diremos con honestidad si RAGnexus encaja en tu empresa, o si no. Sin compromiso y sin presentación enlatada.",
    },
    en: {
      title: "Book a 20-minute demo | RAGnexus",
      description:
        "Talk to the founder for 20 minutes and we'll tell you honestly whether RAGnexus fits your company, or not. No commitment, no canned presentation.",
    },
  };

  const { title, description } = metaData[locale as keyof typeof metaData] ?? metaData.en;
  return buildMetadata({ locale, path: "/contact", title, description });
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
