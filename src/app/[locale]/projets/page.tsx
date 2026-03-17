import { useTranslations } from "next-intl";
import { getLocalizedProjects } from "@/data/projects";
import MarkerUnderline from "@/components/MarkerUnderline";
import MarkerCircle from "@/components/MarkerCircle";
import { Link } from "@/i18n/navigation";
import FadeIn from "@/components/FadeIn";

export default function ProjetsPage() {
  const t = useTranslations("ProjectsPage");
  const tProjects = useTranslations("Projects");
  const projects = getLocalizedProjects(tProjects);

  return (
    <main className="flex flex-col">
      {/* Header */}
      <section className="px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-marker-blue" />
              <span className="font-mono text-xs uppercase tracking-widest text-marker-blue">
                {t("title")}
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1
              className="mb-4 font-sans font-bold tracking-[-2px] text-foreground"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              {t("title")}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="max-w-2xl font-sans text-lg text-muted">
              {t("description")}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Project cards */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
            <article
              className="group rounded-none border border-border bg-background p-8 transition-all duration-200 hover:border-marker-blue hover:-translate-y-1 md:p-10"
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
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <FadeIn>
        <div className="mx-auto max-w-6xl border border-border p-8 text-center md:p-12">
          <p className="mb-6 font-sans text-xl font-bold tracking-tight text-foreground md:text-2xl">
            {t("ctaText")}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-marker-blue px-8 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-marker-yellow)]"
          >
            {t("ctaButton")}
          </Link>
        </div>
        </FadeIn>
      </section>
    </main>
  );
}
