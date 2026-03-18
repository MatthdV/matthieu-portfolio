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
        className="absolute -inset-3 w-[calc(100%+24px)] h-[calc(100%+24px)] pointer-events-none"
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ transform: "rotate(-2deg)" }}
      >
        {/* Hand-drawn imperfect circle — does not close perfectly */}
        <motion.path
          d="M100,8 C145,5 185,18 192,42 C198,65 178,88 140,93 C105,97 55,95 25,80 C5,68 2,45 10,28 C18,12 55,6 105,10"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.85 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{
            pathLength: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] as const, delay: 0.2 },
            opacity: { duration: 0.1, delay: 0.2 },
          }}
        />
      </svg>
    </span>
  );
}
