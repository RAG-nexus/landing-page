import useTranslation from "next-translate/useTranslation";
import { ContactForm } from "@/components/contact-form";

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
