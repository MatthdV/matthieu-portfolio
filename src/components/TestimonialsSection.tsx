"use client";

import { motion } from "framer-motion";
import MarkerUnderline from "./MarkerUnderline";
import FadeIn from "./FadeIn";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

interface TestimonialsSectionProps {
  sectionLabel: string;
  title: string;
  titleAccent: string;
  testimonials: Testimonial[];
}

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
      className="flex flex-col gap-6 border border-border p-8 bg-background relative overflow-hidden"
    >
      {/* Accent mark top-left */}
      <span
        aria-hidden
        className="absolute top-0 left-0 w-1 h-full bg-marker-blue opacity-60"
      />

      {/* Quote mark */}
      <span className="font-mono text-5xl text-marker-blue leading-none select-none">&ldquo;</span>

      <p className="font-sans text-base text-foreground leading-relaxed">
        {testimonial.quote}
      </p>

      <div className="mt-auto pt-4 border-t border-border">
        <p className="font-sans font-bold text-sm text-foreground">{testimonial.name}</p>
        <p className="font-mono text-xs text-muted mt-1">
          {testimonial.role} — {testimonial.company}
        </p>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection({
  sectionLabel,
  title,
  titleAccent,
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="px-6 py-24 md:px-12 lg:px-20 bg-card">
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
            <MarkerUnderline color="yellow">{titleAccent}</MarkerUnderline>
          </h2>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
