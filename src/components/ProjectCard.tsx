import Link from "next/link";

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  slug: string;
  problem?: string;
  stack?: string[];
  results?: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-foreground/10 bg-foreground/[0.03] p-6 transition-colors hover:border-accent/30 hover:bg-accent/[0.05]">
      <div className="mb-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/60">
        {project.description}
      </p>
      <div className="mt-4 flex items-center gap-4">
        <Link
          href={`/projets#${project.slug}`}
          className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
        >
          En savoir plus &rarr;
        </Link>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground/50 hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
