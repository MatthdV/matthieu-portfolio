"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const LOCALES = [
  { code: "fr", name: "Français" },
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
] as const;

export default function LanguageSwitcher({ label }: { label: string }) {
  const pathname = usePathname();
  const current = useLocale();
  return (
    <nav aria-label={label} className="flex items-center gap-1 text-sm font-bold">
      {LOCALES.map(({ code, name }) => (
        <Link
          key={code}
          href={pathname}
          locale={code}
          hrefLang={code}
          lang={code}
          aria-label={`${name} (${code})`}
          aria-current={current === code ? "true" : undefined}
          className={`px-2 py-2 uppercase ${
            current === code ? "border-b-[3px] border-tomato text-ink" : "text-soft hover:text-ink"
          }`}
        >
          {code}
        </Link>
      ))}
    </nav>
  );
}
