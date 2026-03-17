import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Matthieu de Villele pour discuter de votre projet automation ou IA. Audit gratuit, devis personnalisé et réponse sous 24h.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Matthieu de Villele",
    description:
      "Discutons de votre projet automation ou IA. Réponse sous 24h.",
    url: "/contact",
  },
};

const contactInfo = [
  {
    label: "Email",
    value: "contact@matthieudevillele.com",
    href: "mailto:contact@matthieudevillele.com",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "matthieu-de-villele",
    href: "https://linkedin.com/in/matthieu-de-villele",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Calendly",
    value: "Réserver un créneau",
    href: "https://calendly.com",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Contact
        </h1>
        <p className="mt-4 text-lg text-foreground/60">
          Un projet en tête ? Envoyez-moi un message ou réservez directement un
          créneau.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-8">
              <h2 className="text-lg font-semibold">Autres moyens de contact</h2>
              <p className="mt-2 text-sm text-foreground/50">
                Réponse garantie sous 24h en jours ouvrés.
              </p>

              <ul className="mt-6 space-y-5">
                {contactInfo.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-3"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
                        {item.icon}
                      </span>
                      <span>
                        <span className="block text-xs text-foreground/40">
                          {item.label}
                        </span>
                        <span className="text-sm font-medium text-foreground/80 transition-colors group-hover:text-accent">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
