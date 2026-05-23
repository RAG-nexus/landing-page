"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSubmit } from "@formspree/react";
import { cn } from "@/lib/utils";
import { emailOptions } from "@/constants";
import { EmailInput } from "@/components/ui/email-input";
import { useForm } from "react-hook-form";
import { ContactFormProps } from "@/lib/types";
import { useTranslations } from "next-intl";

export const ContactForm: React.FC = () => {
  const t = useTranslations("contact.contact-form");
  const submitToFormspree = useSubmit(
    process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID || ""
  );
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
      onSubmit={handleSubmit(async (data) => {
        console.log("Newsletter", data.newsletter);
        await submitToFormspree(data as any);
        window.location.href = "/thank-you";
      })}
    >
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {t("name")}
        </label>
        <Input
          {...register("name")}
          id="name"
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
        />
      </div>
      <div>
        <EmailInput
          errors={errors}
          withlabel="true"
          {...register("email", emailOptions)}
          className={cn(
            "mt-1 block w-full rounded-md shadow-sm focus:border-emerald-500 focus:ring-emerald-500 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400",
            errors.email
              ? "border-red-300 text-red-900 placeholder-red-300 focus:ring-red-500 focus:border-red-300 dark:border-red-500 dark:text-red-400"
              : "border-gray-300 dark:border-gray-600"
          )}
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {t("phone")}
        </label>
        <Input
          {...register("phone")}
          id="phone"
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
        />
      </div>
      <div>
        <label
          htmlFor="website"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {t("website")}
        </label>
        <Input
          {...register("website")}
          id="website"
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
        />
      </div>
      <div>
        <label
          htmlFor="linkedin"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {t("linkedin")}
        </label>
        <Input
          {...register("linkedin")}
          id="linkedin"
          className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
        />
      </div>
      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
        <input
          className="accent-emerald-600 w-4 h-4"
          {...register("newsletter")}
          type="checkbox"
          name="Subscribe for news"
        />
        {t("suscribe")}
      </label>
      <Button
        size="lg"
        className="mt-4 w-full text-lg py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(5,150,105,0.2)] hover:shadow-[0_0_30px_rgba(5,150,105,0.4)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      >
        {t("submit")}
      </Button>
    </form>
  );
};
