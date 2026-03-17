import { useTranslations } from "next-intl";

export default function ServicesPage() {
  const t = useTranslations("ServicesPage");

  const services = [
    {
      name: t("service1Name"),
      price: t("service1Price"),
      duration: t("service1Duration"),
      description: t("service1Desc"),
      features: [t("service1Feature1"), t("service1Feature2"), t("service1Feature3"), t("service1Feature4")],
      cta: t("service1Cta"),
      highlighted: false,
    },
    {
      name: t("service2Name"),
      price: t("service2Price"),
      duration: t("service2Duration"),
      description: t("service2Desc"),
      features: [t("service2Feature1"), t("service2Feature2"), t("service2Feature3"), t("service2Feature4")],
      cta: t("service2Cta"),
      highlighted: false,
    },
    {
      name: t("service3Name"),
      price: t("service3Price"),
      duration: t("service3Duration"),
      description: t("service3Desc"),
      features: [t("service3Feature1"), t("service3Feature2"), t("service3Feature3"), t("service3Feature4")],
      cta: t("service3Cta"),
      highlighted: true,
    },
    {
      name: t("service4Name"),
      price: t("service4Price"),
      duration: t("service4Duration"),
      description: t("service4Desc"),
      features: [t("service4Feature1"), t("service4Feature2"), t("service4Feature3"), t("service4Feature4")],
      cta: t("service4Cta"),
      highlighted: false,
    },
  ];

  return (
    <main className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-foreground/60">
            {t("description")}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-colors ${
                service.highlighted
                  ? "border-accent/40 bg-accent/[0.05]"
                  : "border-foreground/10 bg-foreground/[0.03] hover:border-accent/20"
              }`}
            >
              {service.highlighted && (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-white">
                  {t("popular")}
                </span>
              )}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold">{service.name}</h2>
                  <p className="mt-1 text-sm text-foreground/50">
                    {service.duration}
                  </p>
                </div>
                <p className="shrink-0 text-right text-lg font-bold text-accent">
                  {service.price}
                </p>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                {service.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-foreground/70"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com"
                className={`mt-8 block rounded-lg px-6 py-3 text-center text-sm font-semibold transition-colors ${
                  service.highlighted
                    ? "bg-accent text-white hover:bg-accent-hover"
                    : "border border-foreground/15 text-foreground/80 hover:border-accent/30 hover:text-accent"
                }`}
              >
                {service.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-12 text-center">
          <h2 className="text-2xl font-bold">
            {t("bottomCtaTitle")}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-foreground/60">
            {t("bottomCtaDesc")}
          </p>
          <a
            href="https://calendly.com"
            className="mt-6 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
          >
            {t("bottomCtaCta")}
          </a>
        </div>
      </div>
    </main>
  );
}
