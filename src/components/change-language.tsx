"use client";
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { routing } from "@/i18n/routing";

interface ChangeLanguageProps {
  scrolled?: boolean;
}

export default function ChangeLanguage({ scrolled }: ChangeLanguageProps) {
  const t = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return routing.locales
    .filter((lng) => lng !== locale)
    .map((lng) => (
      <button
        key={lng}
        type="button"
        onClick={() => router.replace(pathname, { locale: lng })}
        className={cn(
          "flex items-center gap-2 px-4 py-3 rounded-full border transition-all duration-300 text-xs font-medium uppercase tracking-wider",
          scrolled
            ? "border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
            : "border-white/20 text-white/90 hover:bg-white/10 hover:text-white"
        )}
      >
        <Languages className="h-3.5 w-3.5" />
        <span>{t(`language-name-${lng}`)}</span>
      </button>
    ));
}
