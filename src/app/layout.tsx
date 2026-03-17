import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://matthieudevillele.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Matthieu de Villele — Automation & AI Engineer",
    template: "%s | Matthieu de Villele",
  },
  description:
    "Senior Automation & AI Engineer freelance. Agents IA sur-mesure, automation de process (n8n, Apps Script), audit & conseil IA. 40+ workflows en production.",
  keywords: [
    "automation",
    "IA",
    "AI engineer",
    "freelance",
    "n8n",
    "Apps Script",
    "agents IA",
  ],
  authors: [{ name: "Matthieu de Villele" }],
  creator: "Matthieu de Villele",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Matthieu de Villele",
    title: "Matthieu de Villele — Automation & AI Engineer",
    description:
      "Senior Automation & AI Engineer freelance. Agents IA sur-mesure, automation de process, audit & conseil IA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthieu de Villele — Automation & AI Engineer",
    description:
      "Senior Automation & AI Engineer freelance. Agents IA sur-mesure, automation de process, audit & conseil IA.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="preconnect" href="https://calendly.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Matthieu de Villele",
              url: siteUrl,
              jobTitle: "Senior Automation & AI Engineer",
              sameAs: [
                "https://linkedin.com/in/matthieu-de-villele",
                "https://github.com/matthieu-de-villele",
              ],
              knowsAbout: [
                "Artificial Intelligence",
                "Process Automation",
                "n8n",
                "Google Apps Script",
                "Jira Automation",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <div className="pt-16">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
