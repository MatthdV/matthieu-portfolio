"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function ProjectRowItem({ project }: { project: ProjectRow }) {
  return (
    <motion.div
      className="relative overflow-hidden"
      variants={rowVariants}
      whileHover="hovered"
    >
      {/* Marker highlight fill */}
      <motion.span
        aria-hidden
        className="absolute inset-0 bg-marker-blue/8 pointer-events-none"
        style={{ originX: 0, scaleX: 0 }}
        variants={{
          hovered: { scaleX: 1 },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />

      <Link
        href="/projets"
        className="relative z-10 group flex items-center gap-3 border-b border-border py-5 pl-2 md:grid md:grid-cols-[3rem_1fr_1fr_2rem] md:gap-4"
      >
        {/* Number → arrow on hover (CSS-driven) */}
        <span className="font-mono text-sm text-muted w-12 shrink-0">
          <span className="group-hover:hidden">{project.number}</span>
          <span className="hidden group-hover:inline text-marker-blue">&rarr;</span>
        </span>

        {/* Title */}
        <span className="font-sans text-sm font-bold tracking-tight text-foreground min-w-0 truncate md:text-lg md:truncate-none">
          {project.title}
        </span>

        {/* Tags */}
        <span className="hidden gap-2 md:flex">
          {project.tags.map((tag) => (
            <span key={tag} className="font-mono text-xs text-muted">
              {tag}
            </span>
          ))}
        </span>

        {/* Arrow */}
        <span className="ml-auto font-mono text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-marker-blue shrink-0">
          &rarr;
        </span>
      </Link>
    </motion.div>
  );
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
            <motion.span
              className="h-px bg-marker-blue"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
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

        {/* Project rows — slide from left */}
        <motion.div
          className="flex flex-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {projects.map((project) => (
            <ProjectRowItem key={project.number} project={project} />
          ))}
        </motion.div>

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
