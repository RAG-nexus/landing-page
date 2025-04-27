import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Image from "next/image"; // Assuming you use next/image for optimization
import { Card, CardContent } from "@/components/ui/card"; // Using Card for consistency
import { Button } from "@/components/ui/button";
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
} from "./ui/icons";
import { ReactElement } from "react";

import { INTEGRATIONS_PAGE_PATH } from "@/constants";

// Define the structure for an integration item
interface IntegrationItem {
  name: string;
  iconPath?: string; // Path to the icon in the public folder
  icon?: ReactElement;
}

// Selected integrations based on relevance
const integrations: IntegrationItem[] = [
  { name: "Asana", icon: <Asana /> },
  { name: "Confluence", icon: <Confluence /> },
  { name: "Dropbox", icon: <Dropbox /> },
  { name: "GitHub", icon: <Github /> },
  { name: "Gmail", icon: <GoogleGmail /> },
  { name: "Google Drive", icon: <GoogleDrive /> },
  { name: "Jira", icon: <Jira /> },
  { name: "Notion", icon: <Notion /> },
  { name: "Salesforce", icon: <Salesforce /> },
  { name: "Slack", icon: <Slack /> },
  { name: "AWS S3", icon: <AwsS3 /> },
  { name: "Zendesk", icon: <Zendesk /> },
];

export function Integrations() {
  const { t, lang } = useTranslation("common"); // Using 'common' namespace, adjust if needed

  return (
    <section className="py-16 bg-white dark:bg-gray-900" id="integrations">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {t`integrations-title`}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          {t`integrations-description-1`}
          <br />
          {t`integrations-description-2`}
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-center mb-12">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex flex-col items-center group"
            >
              <Card className="p-4 mb-2 transition-transform duration-300 ease-in-out group-hover:scale-110 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md">
                <CardContent className="flex justify-center items-center h-16 w-16 p-0">
                  {/* Placeholder for Icon - Assuming icons are SVG and stored in public/icons/integrations */}
                  {integration.iconPath ? (
                    <Image
                      src={integration.iconPath}
                      alt={`${integration.name} logo`}
                      width={48} // Adjust size as needed
                      height={48} // Adjust size as needed
                      className="object-contain"
                    />
                  ) : (
                    integration.icon
                  )}
                </CardContent>
              </Card>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
        <Link href={`/${lang}/${INTEGRATIONS_PAGE_PATH}`} passHref>
          {/* Assuming '/integrations' is the route for the full list */}
          <Button variant="outline">{t`integrations-view-all`}</Button>
        </Link>
      </div>
    </section>
  );
}
