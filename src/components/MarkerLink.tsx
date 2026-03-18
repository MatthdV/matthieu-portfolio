"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";

interface MarkerLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
}

export default function MarkerLink({ children, href, className = "", onClick }: MarkerLinkProps) {
  const pathname = usePathname();
  // Strip locale prefix for comparison
  const pathWithoutLocale = pathname.replace(/^\/(fr|en|es)/, "") || "/";
  const isActive = pathWithoutLocale === href;

  return (
    <motion.span
      className="relative inline-block"
      whileHover="hover"
      initial="rest"
      animate={isActive ? "hover" : "rest"}
    >
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
      <motion.span
        aria-hidden
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-marker-blue pointer-events-none"
        style={{ originX: 0 }}
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1 },
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.span>
  );
}
