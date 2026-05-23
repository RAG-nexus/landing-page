import React from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconType } from "react-icons";
import {
  FaAws,
  FaFolder,
  FaMicrophone,
  FaBriefcase,
  FaBullhorn,
  FaGoogle,
  FaChartLine,
  FaClipboardList,
  FaTicketAlt,
  FaGlobe,
  FaMicrosoft,
  FaDatabase,
} from "react-icons/fa";
import {
  SiAirtable,
  SiAsana,
  SiConfluence,
  SiDropbox,
  SiDiscord,
  SiGithub,
  SiGitlab,
  SiGooglecloudstorage,
  SiGoogledrive,
  SiHubspot,
  SiJira,
  SiSalesforce,
  SiSlack,
  SiStripe,
  SiCloudflare,
  SiZendesk,
  SiZulip,
  SiGitbook,
  SiGmail,
  SiLinear,
  SiNotion,
} from "react-icons/si";

import { BsMicrosoftTeams } from "react-icons/bs";
import { GoogleGmail } from "@/components/ui/icons";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const metaData = {
    en: {
      title: "Integrations | Connect Your Tools with RAGnexus",
      description:
        "Discover how RAGnexus integrates with your favorite tools like Confluence, Gmail, Slack, and more. Seamlessly connect your knowledge sources to power smarter chatbots for your business.",
    },
    es: {
      title: "Integraciones | Conecta Tus Herramientas con RAGnexus",
      description:
        "Descubre cómo RAGnexus se integra con tus herramientas favoritas como Confluence, Gmail, Slack y más. Conecta tus fuentes de conocimiento fácilmente para potenciar chatbots más inteligentes para tu empresa.",
    },
  };

  return metaData[locale as keyof typeof metaData];
}

interface Integration {
  name: string;
  icon: IconType;
}

const integrations: Integration[] = [
  { name: "Airtable", icon: SiAirtable },
  { name: "Asana", icon: SiAsana },
  { name: "Confluence", icon: SiConfluence },
  { name: "Dropbox", icon: SiDropbox },
  { name: "Discord", icon: SiDiscord },
  { name: "Egnyte", icon: FaFolder },
  { name: "Fireflies AI", icon: FaMicrophone },
  { name: "Freshworks", icon: FaBriefcase },
  { name: "GitHub", icon: SiGithub },
  { name: "GitLab", icon: SiGitlab },
  { name: "Gong", icon: FaBullhorn },
  { name: "GitBook", icon: SiGitbook },
  { name: "Gmail", icon: GoogleGmail as any },
  { name: "Google Drive", icon: SiGoogledrive },
  { name: "Google Sites", icon: FaGoogle },
  { name: "Google Storage", icon: SiGooglecloudstorage },
  { name: "HubSpot", icon: SiHubspot },
  { name: "Highspot", icon: FaChartLine },
  { name: "Jira", icon: SiJira },
  { name: "Linear", icon: SiLinear },
  { name: "Notion", icon: SiNotion },
  { name: "Oracle Storage", icon: FaDatabase },
  { name: "Productboard", icon: FaClipboardList },
  { name: "Cloudflare R2", icon: SiCloudflare },
  { name: "AWS S3", icon: FaAws },
  { name: "Request Tracker", icon: FaTicketAlt },
  { name: "Salesforce", icon: SiSalesforce },
  { name: "Sharepoint", icon: FaMicrosoft },
  { name: "Slack", icon: SiSlack },
  { name: "Stripe", icon: SiStripe },
  { name: "Microsoft Teams", icon: BsMicrosoftTeams },
  { name: "Web", icon: FaGlobe },
  { name: "Zendesk", icon: SiZendesk },
  { name: "Zulip", icon: SiZulip },
];

const generateDescKey = (name: string) => name.replace(/\s+/g, "_");

export default async function IntegrationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("integrations");

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {integrations.map((integration) => (
            <Card
              key={integration.name}
              className="w-full flex flex-col hover:shadow-lg transition-shadow duration-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <div className="flex items-center space-x-3">
                  <integration.icon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                  <CardTitle className="text-lg font-semibold text-left text-gray-800 dark:text-white">
                    {integration.name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex p-5 pt-0">
                <CardDescription className="text-sm text-gray-500 dark:text-gray-400 text-left">
                  {t(generateDescKey(integration.name))}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
