"use client";

import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const wordVariant = {
  hidden: { opacity: 0, y: 30, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function PageHeader({ label, title, description, children }: PageHeaderProps) {
  const words = title.split(" ");

  return (
    <section className="px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Section label with draw-in line */}
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
              {label}
            </span>
          </div>
        </FadeIn>

        {/* Word-by-word title */}
        <motion.h1
          className="mb-4 font-sans font-bold tracking-[-2px] text-foreground"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {children ?? words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariant}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description */}
        {description && (
          <FadeIn delay={0.2}>
            <p className="max-w-2xl font-sans text-lg text-muted">
              {description}
            </p>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
