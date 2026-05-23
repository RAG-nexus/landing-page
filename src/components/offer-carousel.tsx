"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { useTranslations } from "next-intl";
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
  const t = useTranslations("home");
  const items = t.raw("offer-carousel") as TranslateCarouselItemObject[];
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent>
        {items.map((item) => (
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
      <CarouselPrevious className="hidden lg:flex" />
      <CarouselNext className="hidden lg:flex" />
    </Carousel>
  );
};
