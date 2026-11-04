import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SITE } from "@/config/site";

export const PAGE_PATHS = {
  home: "",
  services: "/services",
  projets: "/projets",
  contact: "/contact",
  mentions: "/mentions-legales",
  confidentialite: "/confidentialite",
} as const;

export type PageKey = keyof typeof PAGE_PATHS;

const OG_LOCALE: Record<string, string> = { fr: "fr_FR", en: "en_GB", es: "es_CO" };

export async function pageMetadata(locale: string, page: PageKey): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Meta" });
  const path = PAGE_PATHS[page];
  const title = t(`${page}Title`);
  const description = t(`${page}Description`);
  const url = `${SITE.url}/${locale}${path}`;
  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l, `${SITE.url}/${l}${path}`])
  );
  languages["x-default"] = `${SITE.url}/${routing.defaultLocale}${path}`;

  return {
    title: page === "home" ? { absolute: `${title} | ${t("siteName")}` } : title,
    description,
    alternates: { canonical: url, languages },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: t("siteName"),
      locale: OG_LOCALE[locale] ?? "fr_FR",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
