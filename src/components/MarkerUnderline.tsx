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
    <span className={`relative inline-block ${className}`}>
      {children}
      <svg
        className="absolute left-[-2%] bottom-[0.02em] w-[104%] h-[0.28em] pointer-events-none -z-10"
        viewBox="0 0 300 12"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ transform: "rotate(-1.5deg)" }}
      >
        {/* Main hand-drawn stroke */}
        <motion.path
          d="M2,7 C18,4 45,9 80,6 C115,3 140,8 175,5 C210,8 245,3 270,7 C285,4 295,8 298,6"
          stroke={stroke}
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.9"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.9 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{
            pathLength: { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] as const, delay: 0.2 },
            opacity: { duration: 0.1, delay: 0.2 },
          }}
        />
        {/* Secondary thinner stroke for texture */}
        <motion.path
          d="M5,5 C30,8 70,3 110,7 C150,4 190,9 230,5 C260,8 280,4 296,7"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{
            pathLength: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] as const, delay: 0.35 },
            opacity: { duration: 0.1, delay: 0.35 },
          }}
        />
      </svg>
    </span>
  );
}
