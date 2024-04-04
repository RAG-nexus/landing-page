"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ContactForm } from "@/lib/types";
import { writeContactForm } from "@/lib/services";
import { cn } from "@/lib/utils";
import { emailOptions } from "@/constants";
import { EmailInput } from "@/components/ui/email-input";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
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
    <div className="flex justify-center items-center self-center min-w-full">
      {!isSubmitted ? (
        <div className="min-w-lg mt-10">
          <div className="text-center">
            <h2>Get in touch with us</h2>
            <p>
              Reach out to us today to explore how AI can transform your
              business.
            </p>
          </div>
          <section className="pt-10 flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-center">
            <form
              className=" min-w-96 px-4 md:px-0 mx-auto space-y-4"
              onSubmit={handleSubmit((data) => {
                console.log("Newsletter", data.newsletter);
                writeContactForm(data);
                setIsSubmitted(true);
              })}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name or company name:
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
                  withLabel
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
                  Phone number:
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
                  Website:
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
                  LinkedIn:
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
                Subscribe for news
              </label>
              <Button className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-light hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit
              </Button>
            </form>
          </section>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-300">
            Thank you for reaching out!
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-400">
            We will get back to you shortly.
          </p>
        </div>
      )}
    </div>
  );
}
