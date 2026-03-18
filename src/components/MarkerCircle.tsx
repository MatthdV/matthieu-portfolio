"use client";

import { motion } from "framer-motion";

type MarkerCircleProps = {
  children: React.ReactNode;
  color?: "yellow" | "blue" | "red";
  className?: string;
};

const colorMap = {
  yellow: "var(--color-marker-yellow)",
  blue: "var(--color-marker-blue)",
  red: "var(--color-marker-red)",
} as const;

export default function MarkerCircle({
  children,
  color = "yellow",
  className = "",
}: MarkerCircleProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <svg
        className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <motion.ellipse
          cx="50"
          cy="50"
          rx="46"
          ry="44"
          stroke={colorMap[color]}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="4 2"
          transform="rotate(-3 50 50)"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
        />
      </svg>
    </span>
  );
}
