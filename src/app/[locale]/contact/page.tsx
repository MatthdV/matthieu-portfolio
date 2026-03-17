import { useTranslations } from "next-intl";
import MarkerUnderline from "@/components/MarkerUnderline";
import ContactForm from "@/components/ContactForm";

const CONTACT_LINKS = [
  {
    key: "email",
    href: "mailto:matthieu@devillele.com",
    label: "matthieu@devillele.com",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    key: "linkedin",
    href: "https://linkedin.com/in/matthieudevillele",
    label: "LinkedIn",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    key: "github",
    href: "https://github.com/matthieudevillele",
    label: "GitHub",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const tf = useTranslations("ContactForm");

  const budgetOptions = [
    { value: "lt2k", label: tf("budgetLt2k") },
    { value: "2k5k", label: tf("budget2k5k") },
    { value: "5k10k", label: tf("budget5k10k") },
    { value: "10kPlus", label: tf("budget10kPlus") },
    { value: "retainer", label: tf("budgetRetainer") },
  ];

  return (
    <main className="flex flex-col">
      {/* Header */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-marker-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-marker-blue">
              Contact
            </span>
          </div>
          <h1
            className="mb-4 font-sans font-bold tracking-[-2px] text-foreground"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          >
            <MarkerUnderline color="blue">{t("title")}</MarkerUnderline>
          </h1>
          <p className="max-w-2xl font-sans text-lg text-muted">
            {t("description")}
          </p>
        </div>
      </section>

      {/* 2-column: Form + Sidebar */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_380px]">
          {/* Left: Form */}
          <ContactForm
            nameLabel={tf("nameLabel")}
            namePlaceholder={tf("namePlaceholder")}
            emailLabel={tf("emailLabel")}
            emailPlaceholder={tf("emailPlaceholder")}
            budgetLabel={tf("budgetLabel")}
            budgetPlaceholder={tf("budgetPlaceholder")}
            budgetOptions={budgetOptions}
            messageLabel={tf("messageLabel")}
            messagePlaceholder={tf("messagePlaceholder")}
            submit={tf("submit")}
            successTitle={tf("successTitle")}
            successMessage={tf("successMessage")}
          />

          {/* Right: Contact links */}
          <div className="flex flex-col gap-8">
            <h2 className="font-sans text-xl font-bold tracking-tight text-foreground">
              {t("sidebarTitle")}
            </h2>

            <div className="flex flex-col gap-4">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  target={link.key !== "email" ? "_blank" : undefined}
                  rel={link.key !== "email" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 border border-border p-4 transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-marker-blue hover:shadow-[4px_4px_0_var(--color-marker-blue)]"
                >
                  <span className="text-muted transition-colors duration-200 group-hover:text-marker-blue">
                    {link.icon}
                  </span>
                  <span className="font-mono text-sm text-foreground">
                    {link.label}
                  </span>
                  <span className="ml-auto font-mono text-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-marker-blue">
                    &rarr;
                  </span>
                </a>
              ))}

              {/* Calendly */}
              <a
                href="https://calendly.com/matthieudevillele"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-marker-blue bg-marker-blue/5 p-4 transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-marker-yellow)]"
              >
                <span className="text-marker-blue">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span className="font-mono text-sm font-bold text-marker-blue">
                  {t("calendlyLabel")}
                </span>
                <span className="ml-auto font-mono text-marker-blue transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
            </div>

            {/* Note */}
            <p className="border-l-2 border-marker-yellow pl-4 font-mono text-xs leading-relaxed text-muted">
              {t("sidebarNote")}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
