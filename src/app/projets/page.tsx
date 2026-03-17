import type { Metadata } from "next";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Portfolio de projets : agents IA, automation n8n, intégrations Jira, Apps Script. Découvrez les résultats concrets livrés en production.",
  alternates: { canonical: "/projets" },
  openGraph: {
    title: "Projets — Matthieu de Villele",
    description:
      "7 projets livrés en production — automation, IA et intégrations enterprise.",
    url: "/projets",
  },
};

export default function ProjetsPage() {
  return (
    <main className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Projets
        </h1>
        <p className="mt-4 text-lg text-foreground/60">
          7 projets livrés en production — automation, IA et intégrations
          enterprise.
        </p>

        <div className="mt-16 space-y-20">
          {projects.map((project) => (
            <article
              key={project.slug}
              id={project.slug}
              className="scroll-mt-24"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 px-3 py-1 text-xs text-foreground/60 transition-colors hover:border-foreground/30 hover:text-foreground"
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                    GitHub
                  </a>
                )}
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {/* Problème */}
                <div className="rounded-xl border border-foreground/10 bg-foreground/[0.03] p-5">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/40">
                    Problème
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {project.problem}
                  </p>
                </div>

                {/* Stack */}
                <div className="rounded-xl border border-foreground/10 bg-foreground/[0.03] p-5">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/40">
                    Stack
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {project.stack?.map((tech) => (
                      <li
                        key={tech}
                        className="text-sm text-foreground/70"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Résultats */}
                <div className="rounded-xl border border-accent/20 bg-accent/[0.05] p-5">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Résultats
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {project.results?.map((result) => (
                      <li
                        key={result}
                        className="text-sm text-foreground/70"
                      >
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <p className="text-foreground/60">
            Un projet similaire en tête ?
          </p>
          <a
            href="https://calendly.com"
            className="mt-4 inline-block rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
          >
            Réserver un audit IA gratuit
          </a>
        </div>
      </div>
    </main>
  );
}
