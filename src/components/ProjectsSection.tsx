import Link from "next/link";
import MarkerCircle from "./MarkerCircle";
import FadeIn from "./FadeIn";

interface ProjectRow {
  number: string;
  title: string;
  tags: string[];
}

interface ProjectsSectionProps {
  sectionLabel: string;
  title: string;
  titleAccent: string;
  projects: ProjectRow[];
  viewAllLabel: string;
  viewAllHref: string;
}

export default function ProjectsSection({
  sectionLabel,
  title,
  titleAccent,
  projects,
  viewAllLabel,
  viewAllHref,
}: ProjectsSectionProps) {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <FadeIn>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-marker-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-marker-blue">
              {sectionLabel}
            </span>
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.1}>
          <h2
            className="mb-16 font-sans font-bold tracking-[-2px] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            {title}{" "}
            <MarkerCircle color="yellow">{titleAccent}</MarkerCircle>
          </h2>
        </FadeIn>

        {/* Project rows */}
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <FadeIn key={project.number} delay={0.1 + index * 0.05}>
            <Link
              href="/projets"
              className="group grid grid-cols-[3rem_1fr_auto_2rem] items-center gap-4 border-b border-border py-5 transition-all duration-200 hover:bg-marker-blue/5 hover:pl-2 md:grid-cols-[3rem_1fr_1fr_2rem]"
            >
              {/* Number */}
              <span className="font-mono text-sm text-muted">
                {project.number}
              </span>

              {/* Title */}
              <span className="font-sans text-base font-bold tracking-tight text-foreground md:text-lg">
                {project.title}
              </span>

              {/* Tags */}
              <span className="hidden gap-2 md:flex">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </span>

              {/* Arrow */}
              <span className="font-mono text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-marker-blue">
                &rarr;
              </span>
            </Link>
            </FadeIn>
          ))}
        </div>

        {/* View all link */}
        <FadeIn delay={0.5}>
        <div className="mt-8 flex justify-end">
          <a
            href={viewAllHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted transition-colors duration-200 hover:text-marker-blue"
          >
            {viewAllLabel} &rarr;
          </a>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
