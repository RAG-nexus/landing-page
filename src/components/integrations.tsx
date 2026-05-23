"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SiHubspot } from "react-icons/si";
import {
  Slack,
  Confluence,
  Notion,
  Salesforce,
  Asana,
  Github,
  Dropbox,
  GoogleDrive,
  GoogleGmail,
  AwsS3,
  Zendesk,
  Jira,
  SharePoint,
} from "./ui/icons";
import { ReactElement } from "react";

import { INTEGRATIONS_PAGE_PATH } from "@/constants";

interface IntegrationItem {
  name: string;
  iconPath?: string;
  icon?: ReactElement;
}

const integrations: IntegrationItem[] = [
  { name: "Gmail", icon: <GoogleGmail /> },
  { name: "SharePoint", icon: <SharePoint /> },
  { name: "Google Drive", icon: <GoogleDrive /> },
  { name: "Slack", icon: <Slack /> },
  { name: "Notion", icon: <Notion /> },
  { name: "Confluence", icon: <Confluence /> },
  { name: "Salesforce", icon: <Salesforce /> },
  { name: "HubSpot", icon: <SiHubspot className="w-12 h-12 text-[#ff7a59]" /> },
  { name: "Zendesk", icon: <Zendesk /> },
  { name: "Jira", icon: <Jira /> },
  { name: "GitHub", icon: <Github /> },
  { name: "Dropbox", icon: <Dropbox /> },
];

export function Integrations({ minimal = false }: { minimal?: boolean }) {
  const tCommon = useTranslations("common");
  const tHome = useTranslations("home");

  if (minimal) {
    return (
      <div className="w-full">
        <div className="grid grid-cols-3 gap-3 lg:gap-4 justify-center justify-items-center">
          {integrations.slice(0, 6).map((integration) => (
            <div
              key={integration.name}
              className="flex flex-col items-center group"
            >
              <Card className="p-2 transition-transform duration-300 ease-in-out group-hover:scale-110 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
                <CardContent className="flex justify-center items-center h-10 w-10 p-0">
                  {integration.iconPath ? (
                    <Image
                      src={integration.iconPath}
                      alt={`${integration.name} logo`}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  ) : (
                    integration.icon
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href={INTEGRATIONS_PAGE_PATH} className="text-sm text-emerald-600 dark:text-emerald-500 font-medium hover:underline">
            {tCommon("integrations-view-all")}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800" id="integrations">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            {tHome("integrations-section-title")}
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {tHome("integrations-section-subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mb-16">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex flex-col items-center group"
            >
              <Card className="p-6 mb-4 w-full transition-all duration-300 ease-in-out group-hover:-translate-y-1 group-hover:shadow-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-sm">
                <CardContent className="flex justify-center items-center h-16 p-0">
                  {integration.iconPath ? (
                    <Image
                      src={integration.iconPath}
                      alt={`${integration.name} logo`}
                      width={56}
                      height={56}
                      className="object-contain"
                    />
                  ) : (
                    integration.icon
                  )}
                </CardContent>
              </Card>
              <span className="text-base font-semibold text-gray-700 dark:text-gray-300">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
        <Link href={INTEGRATIONS_PAGE_PATH}>
          <Button size="lg" className="text-lg px-8 py-6 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(5,150,105,0.2)] hover:shadow-[0_0_30px_rgba(5,150,105,0.4)]">
            {tHome("integrations-section-cta")}
          </Button>
        </Link>
      </div>
    </section>
  );
}
