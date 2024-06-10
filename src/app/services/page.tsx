import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useTranslation from "next-translate/useTranslation";

interface ListDiscProps {
  children: React.ReactNode;
}

const ListDisc: React.FC<ListDiscProps> = ({ children }) => (
  <ul className="list-disc list-inside text-lg text-gray-500 dark:text-gray-400 space-y-4">
    {children}
  </ul>
);

const ServicesPage: React.FC = () => {
  const { t } = useTranslation("services");
  return (
    <section className="py-16 dark:bg-gray-700" id="offer">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="w-full">
          <CardHeader>
            <CardTitle
              style={{
                color: "#04a118",
              }}
            >
              {t`custom-personal-assistants-development`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ListDisc>
              <li>
                Personalized consultancy to understand the specific needs and
                objectives of each client.
              </li>
              <li>
                Creation of personal assistants using RAG technology,
                integrating client&apos;s private data for highly customized
                responses.
              </li>
              <li>
                Delivery of assistants for different use cases, such as:
                <ul className=" pl-6">
                  <li>- customer service</li>
                  <li>- technical support</li>
                  <li>- medical inquiries</li>
                </ul>
                among others.
              </li>
            </ListDisc>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle
              style={{
                color: "#04a118",
              }}
            >
              Integration of Assistants into Existing Platforms and Systems
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ListDisc>
              <li>
                Evaluation of client&apos;s integration needs and their existing
                systems.
              </li>
              <li>
                Development and implementation of customized integration
                solutions to ensure a smooth and coherent user experience.
              </li>
              <li>
                Comprehensive testing to ensure interoperability and optimal
                performance of the assistants across different technological
                environments.
              </li>
            </ListDisc>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle
              style={{
                color: "#04a118",
              }}
            >
              Subscriptions and Maintenance Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ListDisc>
              <li>
                Offering flexible subscription plans to access personalized
                assistant services continuously.
              </li>
              <li>
                Periodic updates to enhance the accuracy and relevance of the
                responses provided by the assistants.
              </li>
              <li>
                Dedicated technical support and maintenance services to address
                issues and ensure smooth operation of the assistants.
              </li>
            </ListDisc>
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle
              style={{
                color: "#04a118",
              }}
            >
              Specialized Training and Consultancy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ListDisc>
              <li>
                Training programs to help clients maximize the potential of
                their personal assistants.
              </li>
              <li>
                Consultancy services to provide guidance on the best practices
                for using the assistants effectively.
              </li>
              <li>
                Tailored training and consultancy services to meet the specific
                needs and objectives of each client.
              </li>
            </ListDisc>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServicesPage;
