import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import useTranslation from "next-translate/useTranslation";
import MarkdownRenderer from "@/components/ui/MarkdownRenderer";

interface OfferCardContentProps {
  children: React.ReactNode;
}
const OfferCardContent: React.FC<OfferCardContentProps> = ({ children }) => (
  <CardContent className="flex flex-col aspect-square items-center justify-center p-6 ml-auto text-xl">
    {children}
  </CardContent>
);

type TranslateCarouselItemObject = {
  title: string;
  description: string;
};
export const OfferCarousel: React.FC = () => {
  const { t } = useTranslation("home");
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent>
        {t<TranslateCarouselItemObject[]>(
          "offer-carousel",
          {},
          {
            returnObjects: true,
          }
        ).map((item) => (
          <CarouselItem key={item.title}>
            <div className="p-1">
              <Card>
                <OfferCardContent>
                  <span className="font-semibold">{item.title}</span>
                  <br />
                  <MarkdownRenderer text={item.description} />
                </OfferCardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};
