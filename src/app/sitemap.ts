import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { SITE } from "@/config/site";
import { PAGE_PATHS } from "@/lib/seo";

const priority: Record<keyof typeof PAGE_PATHS, number> = {
  home: 1,
  services: 0.8,
  projets: 0.8,
  contact: 0.7,
  mentions: 0.2,
  confidentialite: 0.2,
};

export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.keys(PAGE_PATHS) as (keyof typeof PAGE_PATHS)[]).flatMap((page) => {
    const languages = Object.fromEntries(
      routing.locales.map((l) => [l, `${SITE.url}/${l}${PAGE_PATHS[page]}`])
    );
    return routing.locales.map((locale) => ({
      url: `${SITE.url}/${locale}${PAGE_PATHS[page]}`,
      lastModified: new Date(),
      priority: priority[page],
      alternates: { languages },
    }));
  });
}
