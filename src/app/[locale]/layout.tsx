import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientProviders from "@/components/ClientProviders";
import "@/app/globals.css";

const BASE_URL = "https://matthieudevillele.com";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "700"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: t("homeTitle"),
      template: `%s`,
    },
    description: t("homeDescription"),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        fr: `${BASE_URL}/fr`,
        en: `${BASE_URL}/en`,
        es: `${BASE_URL}/es`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : locale === "es" ? "es_ES" : "en_US",
      siteName: t("siteName"),
    },
    twitter: {
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
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
  const t = await getTranslations("Nav");
  const tLang = await getTranslations("LanguageSwitcher");

  const tFooter = await getTranslations("Footer");

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/projets", label: t("projects") },
    { href: "/services", label: t("services") },
    { href: "/blog", label: t("blog") },
    { href: "/contact", label: t("contact") },
  ];

  const languageLabels = {
    fr: tLang("fr"),
    en: tLang("en"),
    es: tLang("es"),
  };

  return (
    <html lang={locale} className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-foreground antialiased font-sans">
        <NextIntlClientProvider messages={messages}>
          <Navbar navLinks={navLinks} languageLabels={languageLabels} />
          <div className="pt-16">
            <ClientProviders>{children}</ClientProviders>
          </div>
          <Footer
            tagline={tFooter("tagline")}
            copyright={tFooter("copyright")}
            navLinks={navLinks}
          />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
