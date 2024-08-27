import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useTranslation from "next-translate/useTranslation";

const UseCasesPage: React.FC = () => {
  const { t } = useTranslation("use-cases");
  return (
    <section className="py-16 dark:bg-gray-700" id="offer">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 gap-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle
              style={{
                color: "#04a118",
              }}
            >
              {t`rag-nexus-chat.title`}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-flow-col gap-4 grid-flow-row md:grid-cols-2">
            <div>
              <p>{t`rag-nexus-chat.descriptionP1`}</p>
              <p>{t`rag-nexus-chat.descriptionP2`}</p>
            </div>
            <div>
              <video
                className="rounded-md"
                width={600}
                height={600}
                autoPlay
                loop
                muted
              >
                <source src="/project-rag.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default UseCasesPage;
