import React from "react";
import useTranslation from "next-translate/useTranslation";
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
  SiOracle,
  SiCloudflare,
  SiZendesk,
  SiZulip,
  SiGitbook,
  SiGmail,
  SiLinear,
  SiNotion,
} from "react-icons/si";

import { BsMicrosoftTeams } from "react-icons/bs";

interface Integration {
  name: string;
  icon: IconType;
}

// Full list of integrations with icons
const integrations: Integration[] = [
  { name: "Airtable", icon: SiAirtable },
  { name: "Asana", icon: SiAsana },
  { name: "Confluence", icon: SiConfluence },
  { name: "Dropbox", icon: SiDropbox },
  { name: "Discord", icon: SiDiscord },
  { name: "Egnyte", icon: FaFolder }, // Generic icon
  { name: "Fireflies AI", icon: FaMicrophone }, // Generic icon
  { name: "Freshworks", icon: FaBriefcase }, // Generic icon
  { name: "GitHub", icon: SiGithub },
  { name: "GitLab", icon: SiGitlab },
  { name: "Gong", icon: FaBullhorn }, // Generic icon
  { name: "GitBook", icon: SiGitbook },
  { name: "Gmail", icon: SiGmail },
  { name: "Google Drive", icon: SiGoogledrive },
  { name: "Google Sites", icon: FaGoogle },
  { name: "Google Storage", icon: SiGooglecloudstorage }, // Generic cloud
  { name: "HubSpot", icon: SiHubspot },
  { name: "Highspot", icon: FaChartLine }, // Generic icon
  { name: "Jira", icon: SiJira },
  { name: "Linear", icon: SiLinear },
  { name: "Notion", icon: SiNotion },
  { name: "Oracle Storage", icon: SiOracle },
  { name: "Productboard", icon: FaClipboardList }, // Generic icon
  { name: "Cloudflare R2", icon: SiCloudflare },
  { name: "AWS S3", icon: FaAws },
  { name: "Request Tracker", icon: FaTicketAlt }, // Generic icon
  { name: "Salesforce", icon: SiSalesforce },
  { name: "Sharepoint", icon: FaMicrosoft },
  { name: "Slack", icon: SiSlack },
  { name: "Stripe", icon: SiStripe },
  { name: "Microsoft Teams", icon: BsMicrosoftTeams }, // Generic icon
  { name: "Web", icon: FaGlobe },
  { name: "Zendesk", icon: SiZendesk },
  { name: "Zulip", icon: SiZulip },
];

// Helper to generate translation key for description
const generateDescKey = (name: string) => name.replace(/\s+/g, "_");

const IntegrationsPage: React.FC = () => {
  const { t } = useTranslation("integrations");

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t`title`}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
            {t`description`}
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
                {/* Add Connect/Connected button logic here if needed */}
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
};

export default IntegrationsPage;
