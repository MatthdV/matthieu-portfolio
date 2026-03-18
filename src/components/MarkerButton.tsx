"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";

interface MarkerButtonProps {
  children: React.ReactNode;
  href: string;
  color?: "blue" | "yellow";
  variant?: "filled" | "outline";
}

export default function MarkerButton({
  children,
  href,
  color = "blue",
  variant = "filled",
}: MarkerButtonProps) {
  const bgColor = color === "blue" ? "#1A65FF" : "#FFCD2E";
  const textColor = variant === "filled"
    ? color === "blue" ? "#fff" : "#0a0a0a"
    : undefined;

  return (
    <motion.span
      className="relative inline-block overflow-hidden"
      whileHover="hover"
      initial="rest"
    >
      {/* Marker fill */}
      <motion.span
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: bgColor, originX: 0 }}
        variants={{
          rest: { scaleX: variant === "filled" ? 1 : 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
      <Link
        href={href}
        className={`relative z-10 inline-block px-8 py-4 font-mono text-sm uppercase tracking-wider text-center transition-colors duration-200 ${
          variant === "outline"
            ? "border border-[var(--color-border)] text-foreground hover:text-[var(--color-background)]"
            : ""
        }`}
        style={textColor ? { color: textColor } : undefined}
      >
        {children}
      </Link>
    </motion.span>
  );
}
