"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SERVICES_PAGE_PATH } from "@/constants";
import { useForm } from "react-hook-form";
import { ContactFormProps } from "@/lib/types";
import { subscribeToNewsletter } from "@/lib/services";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { emailOptions } from "@/constants";
import { EmailInput } from "./ui/email-input";
import useTranslation from "next-translate/useTranslation";

export const EmailCta: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormProps>({
    defaultValues: {
      email: "",
      newsletter: true,
    },
  });
  const { t } = useTranslation("home");
  return (
    <section className="py-8 px-4 bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col gap-1 max-w-7xl mx-auto">
        <h2 className="text-gray-900 dark:text-gray-300 mb-6">
          {t`common:discover-the-power-of-ai`}
        </h2>
        {!isSubmitted ? (
          <form
            className="flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-center"
            onSubmit={handleSubmit((data) => {
              subscribeToNewsletter(data.email);
              setIsSubmitted(true);
            })}
          >
            <EmailInput
              withplaceholder="true"
              errors={errors}
              {...register("email", emailOptions)}
              className="text-2xl md:text-lg w-full md:w-1/2"
              placeholder={t`common:enter-your-email`}
              containerclassname="min-w-96"
            />
            <Button className="md:text-lg w-auto md:w-auto">
              {t`common:keep-me-updated`}
            </Button>
            <div className="text-gray-700 dark:text-gray-400 text-lg text-center md:text-left">
              {t`common:reach-us-today`}
            </div>
          </form>
        ) : (
          <div className="leading-9 flex flex-col md:flex-row text-green-600 dark:text-green-400 text-lg text-center md:text-start">
            Thank you for subscribing!
            <div className="mx-2 flex justify-center">
              <CountdownCircleTimer
                strokeWidth={5}
                size={40}
                isPlaying
                duration={5}
                colors={"#00FF00"}
                onComplete={() => setIsSubmitted(false)}
              >
                {({ remainingTime }: { remainingTime: number }) =>
                  remainingTime
                }
              </CountdownCircleTimer>
            </div>
          </div>
        )}
        <Link
          className="text-green-light text-center md:text-start font-medium hover:underline dark:text-green-light"
          href={SERVICES_PAGE_PATH}
        >
          {t`common:learn-more-about-our-ai-solutions`}
        </Link>
      </div>
    </section>
  );
};
