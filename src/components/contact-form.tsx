"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { writeContactForm } from "@/lib/services";
import { cn } from "@/lib/utils";
import { emailOptions } from "@/constants";
import { EmailInput } from "@/components/ui/email-input";
import { useForm } from "react-hook-form";
import { ContactFormProps } from "@/lib/types";
import useTranslation from "next-translate/useTranslation";

export const ContactForm: React.FC = () => {
  const { t } = useTranslation("contact");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormProps>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
      linkedin: "",
      newsletter: true,
    },
  });
  return (
    <form
      className="min-w-96 px-4 md:px-0 mx-auto space-y-4"
      onSubmit={handleSubmit((data) => {
        console.log("Newsletter", data.newsletter);
        writeContactForm(data);
        window.location.href = "/thank-you";
      })}
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          {t`contact-form.name`}
        </label>
        <Input
          {...register("name")}
          id="name"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div>
        <EmailInput
          errors={errors}
          withlabel="true"
          {...register("email", emailOptions)}
          className={cn(
            "mt-1 block w-full rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500",
            errors.email
              ? "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-300"
              : "border-gray-300"
          )}
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          {t`contact-form.phone`}
        </label>
        <Input
          {...register("phone")}
          id="phone"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label
          htmlFor="website"
          className="block text-sm font-medium text-gray-700"
        >
          {t`contact-form.website`}
        </label>
        <Input
          {...register("website")}
          id="website"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label
          htmlFor="linkedin"
          className="block text-sm font-medium text-gray-700"
        >
          {t`contact-form.linkedin`}
        </label>
        <Input
          {...register("linkedin")}
          id="linkedin"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
      </div>
      <label className="block text-sm font-medium text-gray-700">
        <input
          className="mr-2"
          {...register("newsletter")}
          type="checkbox"
          name="Subscribe for news"
        />
        {t`contact-form.suscribe`}
      </label>
      <Button className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-light hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        {t`contact-form.submit`}
      </Button>
    </form>
  );
};
