"use client";

import { motion } from "framer-motion";

type MarkerUnderlineProps = {
  children: React.ReactNode;
  color?: "yellow" | "blue" | "red";
  className?: string;
};

const strokeColorMap = {
  yellow: "var(--color-marker-yellow)",
  blue: "var(--color-marker-blue)",
  red: "var(--color-marker-red)",
} as const;

export default function MarkerUnderline({
  children,
  color = "yellow",
  className = "",
}: MarkerUnderlineProps) {
  const stroke = strokeColorMap[color];

  return (
    <span className={`relative inline-block w-fit ${className}`}>
      {children}
      <svg
        className="absolute left-[-2%] bottom-[0.04em] w-[104%] h-[0.18em] pointer-events-none -z-10"
        viewBox="0 0 300 10"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ transform: "rotate(-1deg)" }}
      >
        <motion.path
          d="M2,6 C40,4.5 80,7 130,5.5 C180,4 220,7 260,5 C280,6.5 295,4.5 298,5.5"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.85"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.85 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{
            pathLength: { duration: 0.7, ease: "easeOut", delay: 0.2 },
            opacity: { duration: 0.1, delay: 0.2 },
          }}
        />
      </svg>
    </span>
  );
}
