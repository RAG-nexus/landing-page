"use client";
import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Link } from "@/i18n/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import {
  ABOUT_PAGE_PATH,
  CONTACT_PAGE_PATH,
  SERVICES_PAGE_PATH,
  USE_CASES_PAGE_PATH,
  INTEGRATIONS_PAGE_PATH,
} from "@/constants";

interface MobileNavProps {
  className?: string;
  scrolled?: boolean;
}
export const MobileNav = ({ className, scrolled }: MobileNavProps) => {
  const t = useTranslations("common");

  return (
    <div className={className}>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline-transparent"
            size="icon"
            className={cn(
              "shrink-0 lg:hidden transition-colors duration-300",
              scrolled
                ? "border-gray-200 text-gray-900 hover:bg-gray-100"
                : "border-white/20 text-white hover:bg-white/10"
            )}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle className="sr-only">{t("navigation-menu")}</SheetTitle>
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <span className="sr-only">RAGnexus</span>
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              {t("home")}
            </Link>
            <Link href={ABOUT_PAGE_PATH} className="text-muted-foreground hover:text-foreground">
              {t("about")}
            </Link>
            <Link href={SERVICES_PAGE_PATH} className="text-muted-foreground hover:text-foreground">
              {t("services")}
            </Link>
            <Link href={USE_CASES_PAGE_PATH} className="text-muted-foreground hover:text-foreground">
              {t("use-cases")}
            </Link>
            <Link href={INTEGRATIONS_PAGE_PATH} className="text-muted-foreground hover:text-foreground">
              {t("integrations")}
            </Link>
            <Link href={CONTACT_PAGE_PATH} className="hover:text-foreground">
              {t("contact")}
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
