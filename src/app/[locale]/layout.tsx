import { useTranslations, useLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  setRequestLocale(params.locale);

  const tNav = useTranslations("Nav");
  const tLang = useTranslations("LanguageSwitcher");
  const tFooter = useTranslations("Footer");
  const locale = useLocale();

  const navLinks = [
    { href: "/" as const, label: tNav("home") },
    { href: "/projets" as const, label: tNav("projects") },
    { href: "/services" as const, label: tNav("services") },
    { href: "/blog" as const, label: tNav("blog") },
    { href: "/contact" as const, label: tNav("contact") },
  ];

  const languageLabels: Record<string, string> = {};
  for (const loc of routing.locales) {
    languageLabels[loc] = tLang(loc);
  }

  const footerLinks = [
    { href: "/projets" as const, label: tNav("projects") },
    { href: "/services" as const, label: tNav("services") },
    { href: "/blog" as const, label: tNav("blog") },
    { href: "/contact" as const, label: tNav("contact") },
  ];

  return (
    <html lang={locale} className="dark">
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>
          <Navbar navLinks={navLinks} languageLabels={languageLabels} locale={locale} />
          <div className="pt-16">
            {children}
          </div>
          <Footer tagline={tFooter("tagline")} copyright={tFooter("copyright")} links={footerLinks} />
        </ThemeProvider>
      </body>
    </html>
  );
}
