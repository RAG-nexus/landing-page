/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/lEHbmIThscb
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";
import {
  OfferCarousel,
  EmailCta,
  ContactWithMe,
  Integrations,
} from "@/components";
import { CEO_EMAIL, CEO_NAME, CEO_TITLE } from "@/constants";
import useTranslation from "next-translate/useTranslation";
import type { Metadata } from "next";
import VideoSection from "@/components/video-section";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { lang: string };
}): Promise<Metadata> {
  const metaData = {
    en: {
      title: "RAGnexus",
      description: "RAGnexus. Your AI enabler.",
    },
    es: {
      title: "RAGnexus",
      description: "RAGnexus. Tu conexión con la IA",
    },
  };

  return metaData[searchParams.lang as keyof typeof metaData];
}

export default async function Index({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { t } = useTranslation("home");
  // Await the searchParams promise to get the actual object
  const params = await searchParams;
  const lang = params.lang as string;
  return (
    <div key="1">
      <header className="bg-ai-cubes dark:bg-gray-800 bg-cover bg-center bg-no-repeat relative">
        <div id="Board"></div>
        <div className="max-w-7xl mx-auto py-24 px-4 text-center">
          <div className="backdrop-blur min-w-fit bg-black bg-opacity-25 box-content rounded-lg">
            <h1 className="text-5xl font-bold text-emerald-200 mb-4 antialiased">
              {t`welcome-to-ragnexus`}
            </h1>
            <div className="text-xl text-emerald-100">
              {t`hero-description`}
            </div>
          </div>
          <Link href="#offer">
            <Button className="mt-8">{t`common:learn-more`}</Button>
          </Link>
        </div>
      </header>
      <section className="py-16 dark:bg-gray-700" id="offer">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="w-full">
            <CardHeader>
              <CardTitle
                style={{
                  color: "#04a118",
                }}
              >
                {t`custom-ai-solutions`}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {t`custom-ai-solutions-description`}
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle
                style={{
                  color: "#04a118",
                }}
              >
                {t`highly-personalized-responses`}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {t`highly-personalized-responses-description`}
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle
                style={{
                  color: "#04a118",
                }}
              >
                {t`efficiency-and-productivity`}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {t`efficiency-and-productivity-description`}
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle
                style={{
                  color: "#04a118",
                }}
              >
                Customer Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                By providing personalized and adapted solutions.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle
                style={{
                  color: "#04a118",
                }}
              >
                {t`cost-reduction`}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{t`cost-reduction-description`}</CardDescription>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle
                style={{
                  color: "#04a118",
                }}
              >
                {t`cutting-edge-technology`}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {t`cutting-edge-technology-description`}
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
      <Integrations />
      {lang === "es" && <VideoSection />}
      <section className="py-8 px-4 bg-gray-100 dark:bg-gray-800" id="about">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-gray-900 dark:text-gray-300 mb-6">
            {t`about-ragnexus`}
          </h2>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <div className="text-justify text-lg text-gray-500 dark:text-gray-400 leading-10">
              <p>{t`about-ragnexus-description`}</p>
            </div>
            <div className="md:ml-8 justify-center flex">
              <OfferCarousel />
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 px-4 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <ContactWithMe name={CEO_NAME} email={CEO_EMAIL} title={CEO_TITLE} />
        </div>
      </section>
      <EmailCta />
    </div>
  );
}
