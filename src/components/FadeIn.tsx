"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

const directionMap = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
} as const;

export default function FadeIn({ children, className, delay = 0, direction = "up" }: FadeInProps) {
  const offset = directionMap[direction];

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ opacity: 0, ...offset }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
