"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import MarkerUnderline from "./MarkerUnderline";
import MarkerButton from "./MarkerButton";
import FadeIn from "./FadeIn";

type HeroSectionProps = {
  tag: string;
  title: string;
  titleAccent: string;
  description: string;
  stats: { value: string; label: string }[];
  ctaPrimary: string;
  ctaSecondary: string;
};

/* ── Animated stat counter ── */
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(wrapperRef, { once: true });
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) => Math.round(v));

  useEffect(() => {
    if (isInView && target > 0) {
      animate(motionVal, target, { duration: 1.5, ease: "easeOut" });
    }
  }, [isInView, target, motionVal]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      if (numberRef.current) numberRef.current.textContent = String(v);
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <div ref={wrapperRef} className="flex flex-col">
      <span className="font-mono text-2xl sm:text-3xl font-bold text-foreground">
        {target > 0 ? (
          <>
            <span ref={numberRef}>0</span>
            {suffix}
          </>
        ) : (
          value
        )}
      </span>
      <span className="font-mono text-[10px] sm:text-xs text-muted uppercase tracking-wider mt-1">
        {label}
      </span>
    </div>
  );
}

/* ── Word-by-word reveal ── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};
const wordVariant = {
  hidden: { opacity: 0, y: 40, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HeroSection({
  tag,
  title,
  titleAccent,
  description,
  stats,
  ctaPrimary,
  ctaSecondary,
}: HeroSectionProps) {
  const titleWords = title.split(" ");

  return (
    <section className="relative min-h-0 lg:min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 py-12 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left column */}
        <div className="relative z-10">
          {/* Availability tag */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <motion.span
                className="h-[2px] bg-marker-blue"
                initial={{ width: 0 }}
                whileInView={{ width: 32 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <span className="font-mono text-sm text-marker-blue tracking-wide">
                {tag}
              </span>
            </div>
          </FadeIn>

          {/* H1 — word by word */}
          <motion.h1
            className="font-bold leading-[1.05] tracking-[-0.04em] mb-6"
            style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="block">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariant}
                  style={{ display: "inline-block", marginRight: "0.25em" }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <MarkerUnderline color="yellow">{titleAccent}</MarkerUnderline>
          </motion.h1>

          {/* Description */}
          <FadeIn delay={0.2}>
            <p className="text-muted text-lg max-w-[500px] leading-relaxed mb-10">
              {description}
            </p>
          </FadeIn>

          {/* Stats — animated counters */}
          <FadeIn delay={0.3}>
            <div className="flex gap-6 sm:gap-10 mb-10">
              {stats.map((stat) => (
                <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
              ))}
            </div>
          </FadeIn>

          {/* CTAs — MarkerButton */}
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <MarkerButton href="/contact" color="blue" variant="filled">
                {ctaPrimary}
              </MarkerButton>
              <MarkerButton href="/projets" color="yellow" variant="outline">
                {ctaSecondary}
              </MarkerButton>
            </div>
          </FadeIn>
        </div>

        {/* Right column */}
        <FadeIn delay={0.3}>
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Decorative blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-marker-blue/[0.06] rounded-full blur-[100px] pointer-events-none" />

            {/* Decorative marker strokes — draw in */}
            <motion.div
              className="absolute -top-4 right-12 h-[4px] bg-marker-blue"
              style={{ transform: "rotate(-8deg)", originX: 0 }}
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            />
            <motion.div
              className="absolute bottom-16 left-4 h-[4px] bg-marker-yellow"
              style={{ transform: "rotate(12deg)", originX: 0 }}
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
            />

            {/* Hero illustration — continuous floating */}
            <motion.div
              className="relative w-full max-w-[320px] sm:max-w-[520px] mx-auto aspect-square"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: "transform" }}
            >
              <Image
                src="/images/hero-illustration.png"
                alt="Illustration marker — homme, robot et laptop"
                fill
                sizes="(max-width: 640px) 320px, 520px"
                className="object-contain"
                priority
              />
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
