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
  const stroke = colorMap[color];

  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <svg
        className="absolute -inset-2 w-[calc(100%+16px)] h-[calc(100%+16px)] pointer-events-none"
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ transform: "rotate(-1.5deg)" }}
      >
        <motion.path
          d="M100,10 C140,7 178,20 188,42 C196,62 180,84 145,90 C110,95 60,93 30,78 C8,66 4,46 12,30 C20,14 58,8 102,11"
          stroke={stroke}
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.8"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.8 }}
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
