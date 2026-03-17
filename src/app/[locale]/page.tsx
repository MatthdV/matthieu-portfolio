import { useTranslations } from "next-intl";
import ProjectCard from "@/components/ProjectCard";
import { getLocalizedProjects } from "@/data/projects";
import FadeIn from "@/components/FadeIn";
import NewsletterForm from "@/components/NewsletterForm";

const serviceIcons = [
  <svg key="ai" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>,
  <svg key="auto" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  <svg key="audit" className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>,
];

export default function Home() {
  const t = useTranslations("HomePage");
  const tp = useTranslations("Projects");
  const tCard = useTranslations("ProjectCard");
  const tNewsletter = useTranslations("NewsletterForm");

  const services = [
    { icon: serviceIcons[0], title: t("service1Title"), description: t("service1Desc") },
    { icon: serviceIcons[1], title: t("service2Title"), description: t("service2Desc") },
    { icon: serviceIcons[2], title: t("service3Title"), description: t("service3Desc") },
  ];

  const projects = getLocalizedProjects(tp);

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-24">
        <FadeIn className="max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {t("heroTitle")}{" "}
            <span className="text-accent">{t("heroTitleAccent")}</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-foreground/60">
            {t("heroSubtitle")}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
            <a
              href="https://calendly.com"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-hover transition-colors"
            >
              {t("ctaPrimary")}
            </a>
            <a
              href="#projets"
              className="text-sm font-semibold leading-6 text-foreground/80 hover:text-foreground transition-colors"
            >
              {t("ctaSecondary")} <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Services */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {t("servicesTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-foreground/60">
              {t("servicesDescription")}
            </p>
          </FadeIn>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <FadeIn key={service.title} delay={i * 0.1}>
                <div className="group rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-8 transition-colors hover:border-accent/30 hover:bg-accent/[0.05]">
                  <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3 text-accent">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projets" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {t("projectsTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-foreground/60">
              {t("projectsDescription")}
            </p>
          </FadeIn>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.08}>
                <ProjectCard project={project} learnMoreLabel={tCard("learnMore")} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
              {t("testimonialsTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-foreground/60">
              {t("testimonialsDescription")}
            </p>
          </FadeIn>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {([1, 2, 3] as const).map((i) => (
              <FadeIn key={i} delay={(i - 1) * 0.1}>
                <blockquote className="flex h-full flex-col rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-8">
                  <svg
                    className="mb-4 h-8 w-8 text-accent/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
                  </svg>
                  <p className="flex-1 text-sm leading-relaxed text-foreground/70">
                    {t(`testimonial${i}Quote`)}
                  </p>
                  <div className="mt-6 border-t border-foreground/10 pt-4">
                    <p className="text-sm font-semibold">{t(`testimonial${i}Name`)}</p>
                    <p className="text-xs text-foreground/50">{t(`testimonial${i}Role`)}</p>
                  </div>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-6 py-24">
        <FadeIn className="mx-auto max-w-2xl rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold">{t("newsletterTitle")}</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-foreground/60">
            {t("newsletterDescription")}
          </p>
          <NewsletterForm placeholder={tNewsletter("placeholder")} subscribe={tNewsletter("subscribe")} />
        </FadeIn>
      </section>
    </main>
  );
}
