"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import ScrollProgress from "./ScrollProgress";
import PageTransition from "./PageTransition";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <ScrollProgress />
        <PageTransition>{children}</PageTransition>
      </MotionConfig>
    </LazyMotion>
  );
}
