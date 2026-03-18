import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { getLocalizedProjects } from "@/data/projects";
import MarkerUnderline from "@/components/MarkerUnderline";
import MarkerCircle from "@/components/MarkerCircle";
import { Link } from "@/i18n/navigation";
import FadeIn from "@/components/FadeIn";
import PageHeader from "@/components/PageHeader";
import StaggerContainer from "@/components/StaggerContainer";
import StaggerItem from "@/components/StaggerItem";
import HoverCard from "@/components/HoverCard";
import MarkerButton from "@/components/MarkerButton";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "Metadata" });
  return {
    title: t("projetsTitle"),
    description: t("projetsDescription"),
    openGraph: {
      title: t("projetsTitle"),
      description: t("projetsDescription"),
    },
  };
}

export default function ProjetsPage() {
  const t = useTranslations("ProjectsPage");
  const tProjects = useTranslations("Projects");
  const projects = getLocalizedProjects(tProjects);

  return (
    <main className="flex flex-col">
      {/* Header */}
      <PageHeader
        label={t("title")}
        title={t("title")}
        description={t("description")}
      />

      {/* Project cards */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <StaggerContainer className="mx-auto flex max-w-6xl flex-col gap-8" stagger={0.1}>
          {projects.map((project, index) => (
            <StaggerItem key={project.slug} direction="left">
            <HoverCard>
            <article
              className="relative group rounded-none border border-border p-8 md:p-10"
            >
              {/* Top row: number + title + tags */}
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-sm text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-sans text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    {index === 0 ? (
                      <MarkerUnderline color="yellow">{project.title}</MarkerUnderline>
                    ) : (
                      project.title
                    )}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2 md:mt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-2 py-0.5 font-mono text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="mb-8 max-w-3xl font-sans text-base leading-relaxed text-foreground/80">
                {project.description}
              </p>

              {/* Problem / Stack / Results grid */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
                {/* Problem */}
                {project.problem && (
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-marker-red">
                      <span className="h-px w-4 bg-marker-red" />
                      {t("problem")}
                    </h3>
                    <p className="font-sans text-sm leading-relaxed text-muted">
                      {project.problem}
                    </p>
                  </div>
                )}

                {/* Stack */}
                {project.stack && project.stack.length > 0 && (
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-marker-blue">
                      <span className="h-px w-4 bg-marker-blue" />
                      {t("stack")}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="border border-border bg-marker-blue/5 px-2 py-0.5 font-mono text-xs text-foreground/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Results */}
                {project.results && project.results.length > 0 && (
                  <div>
                    <h3 className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-marker-yellow">
                      <span className="h-px w-4 bg-marker-yellow" />
                      {t("results")}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {project.results.map((result, i) => (
                        <li
                          key={i}
                          className="font-mono text-sm text-foreground/80"
                        >
                          <span className="mr-2 text-marker-yellow">&rarr;</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* GitHub link */}
              {project.github && (
                <div className="mt-8 border-t border-border pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-sm text-muted transition-colors duration-200 hover:text-marker-blue"
                  >
                    GitHub &rarr;
                  </a>
                </div>
              )}
            </article>
            </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <FadeIn>
        <div className="mx-auto max-w-6xl border border-border p-8 text-center md:p-12">
          <p className="mb-6 font-sans text-xl font-bold tracking-tight text-foreground md:text-2xl">
            {t("ctaText")}
          </p>
          <MarkerButton href="/contact" color="blue" variant="filled">
            {t("ctaButton")}
          </MarkerButton>
        </div>
        </FadeIn>
      </section>
    </main>
  );
}
