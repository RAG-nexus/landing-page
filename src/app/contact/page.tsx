import useTranslation from "next-translate/useTranslation";
import { ContactForm } from "@/components/contact-form";
import type { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { lang: string };
}): Promise<Metadata> {
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

  return metaData[searchParams.lang as keyof typeof metaData];
}

export default function Contact() {
  const { t } = useTranslation("contact");

  return (
    <div className="flex justify-center items-center self-center min-w-full">
      <div className="min-w-lg mt-10">
        <div className="text-center">
          <h2>{t`get-in-touch`}</h2>
          <p>{t`cta`}</p>
        </div>
        <section className="pt-10 flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-center">
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
