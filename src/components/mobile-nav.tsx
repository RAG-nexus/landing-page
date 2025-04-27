import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import useTranslation from "next-translate/useTranslation";
import {
  ABOUT_PAGE_PATH,
  CONTACT_PAGE_PATH,
  SERVICES_PAGE_PATH,
  USE_CASES_PAGE_PATH,
  INTEGRATIONS_PAGE_PATH,
} from "@/constants";

interface MobileNavProps {
  className?: string;
}
export const MobileNav = ({ className }: MobileNavProps) => {
  const { t, lang } = useTranslation("common");
  return (
    <div className={className}>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline-transparent"
            size="icon"
            className="shrink-0 xl:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle className="sr-only">{t("navigation-menu")}</SheetTitle>
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <span className="sr-only">RAGnexus</span>
            </Link>
            <Link
              href={`/${lang}`}
              className="text-muted-foreground hover:text-foreground"
            >
              {t("home")}
            </Link>
            <Link
              href={`/${lang}${ABOUT_PAGE_PATH}`}
              className="text-muted-foreground hover:text-foreground"
            >
              {t("about")}
            </Link>
            <Link
              href={`/${lang}/${SERVICES_PAGE_PATH}`}
              className="text-muted-foreground hover:text-foreground"
            >
              {t("services")}
            </Link>
            <Link
              href={`/${lang}/${USE_CASES_PAGE_PATH}`}
              className="text-muted-foreground hover:text-foreground"
            >
              {t("use-cases")}
            </Link>
            <Link
              href={`/${lang}/${INTEGRATIONS_PAGE_PATH}`}
              className="text-muted-foreground hover:text-foreground"
            >
              {t("integrations")}
            </Link>
            <Link
              href={`/${lang}/${CONTACT_PAGE_PATH}`}
              className="hover:text-foreground"
            >
              {t("contact")}
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
