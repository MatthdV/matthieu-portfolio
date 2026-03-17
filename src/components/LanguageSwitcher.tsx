"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

type LanguageSwitcherProps = {
  labels: {
    fr: string;
    en: string;
    es: string;
  };
};

const locales = ["fr", "en", "es"] as const;

export default function LanguageSwitcher({ labels }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const currentLocale = params.locale as string;

  function handleSwitch(locale: string) {
    router.replace(pathname, { locale });
  }

  return (
    <div className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && <span className="mx-1 text-muted">/</span>}
          <button
            onClick={() => handleSwitch(locale)}
            className={`transition-colors duration-150 ${
              currentLocale === locale
                ? "text-marker-blue font-bold"
                : "text-muted hover:text-foreground"
            }`}
          >
            {labels[locale]}
          </button>
        </span>
      ))}
    </div>
  );
}
