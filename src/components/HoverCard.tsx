"use client";

import { motion } from "framer-motion";

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function HoverCard({ children, className = "" }: HoverCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover="hovered"
      initial="rest"
      animate="rest"
    >
      {/* Marker fill background — paints left to right */}
      <motion.span
        aria-hidden
        className="absolute inset-0 bg-marker-blue/[0.06] pointer-events-none"
        style={{ originX: 0 }}
        variants={{
          rest: { scaleX: 0 },
          hovered: { scaleX: 1 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      {/* Marker top border */}
      <motion.span
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[2px] bg-marker-blue pointer-events-none"
        style={{ originX: 0 }}
        variants={{
          rest: { scaleX: 0 },
          hovered: { scaleX: 1 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      <motion.div
        variants={{
          rest: { y: 0 },
          hovered: { y: -4 },
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
