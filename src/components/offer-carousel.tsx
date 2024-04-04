import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

interface OfferCardContentProps {
  children: React.ReactNode;
}
const OfferCardContent: React.FC<OfferCardContentProps> = ({ children }) => (
  <CardContent className="flex flex-col aspect-square items-center justify-center p-6 ml-auto text-xl">
    {children}
  </CardContent>
);

export const OfferCarousel: React.FC = () => {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <OfferCardContent>
                <span className="font-semibold">
                  Retriever-Augmented Generation (RAG) tech uses a 2 step
                  approach for generating responses:
                </span>
                <br />
                <span>
                  1. First, it retrieves relevant information from a database.
                </span>
                <br />
                <span>
                  2. And then it uses that information to generate accurate and
                  context-specific answers.
                </span>
              </OfferCardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <OfferCardContent>
                <span className="font-semibold">
                  Personalization and Relevance:
                </span>
                <br />
                <span>
                  We get your provided knowledge base and use it to generate a
                  responses that are relevant to your use case.
                </span>
                <br />
                <span>
                  We ensure that the data is securely stored and only used for
                  the purpose of generating responses.
                </span>
              </OfferCardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-1">
            <Card>
              <OfferCardContent>
                <span className="font-semibold">
                  Get the ultimate competitive advantage with RAG:
                </span>
                <br />
                <span>
                  Get ahead of the competition by providing your employees with
                  a tool that can generate accurate and context-specific
                  answers.
                </span>
              </OfferCardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};
