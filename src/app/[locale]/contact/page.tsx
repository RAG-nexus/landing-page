import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/contact-form";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const metaData = {
    en: {
      title: "Contact Us | Get in Touch with RAGnexus",
      description:
        "Have questions or need assistance? Contact RAGnexus today. Fill out our form or reach out to us directly. We're here to help!",
    },
    es: {
      title: "Contáctanos | Ponte en Contacto con RAGnexus",
      description:
        "¿Tienes preguntas o necesitas ayuda? Contacta con RAGnexus hoy. Rellena nuestro formulario o comunícate con nosotros directamente. ¡Estamos aquí para ayudarte",
    },
  };

  return metaData[locale as keyof typeof metaData];
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
