import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { PageJsonLd } from "@/components/json-ld";
import { AuthorHero } from "@/components/author/author-hero";
import { AuthorLetter } from "@/components/author/author-letter";
import { AuthorBio } from "@/components/author/author-bio";
import { AuthorGuides } from "@/components/author/author-guides";
import { AuthorContact } from "@/components/author/author-contact";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata("/javier-perez", locale);
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <PageJsonLd route="/javier-perez" locale={locale} />
      <AuthorHero locale={locale} />
      <AuthorLetter />
      <AuthorBio locale={locale} />
      <AuthorGuides locale={locale} />
      <AuthorContact />
    </main>
  );
}
