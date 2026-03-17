import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  setRequestLocale(params.locale);
  const locale = params.locale;

  const messages = await getMessages();
  const tNav = await getTranslations("Nav");
  const tLang = await getTranslations("LanguageSwitcher");
  const tFooter = await getTranslations("Footer");

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
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Navbar navLinks={navLinks} languageLabels={languageLabels} locale={locale} />
            <div className="pt-16">
              {children}
            </div>
            <Footer tagline={tFooter("tagline")} copyright={tFooter("copyright")} links={footerLinks} />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
