import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Matthieu de Villele — Automation & AI Engineer",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}}catch(e){}})();`,
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
