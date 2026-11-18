"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Barre de réservation collée en bas de l'écran sur téléphone.
 * Elle se cache tant que le bouton principal du hero est à l'écran,
 * pour ne pas afficher deux fois la même action. Elle démarre cachée
 * et n'apparaît qu'une fois la situation connue, pour éviter un flash.
 */
export default function CallBar({ href, label }: { href: string; label: string }) {
  const [hidden, setHidden] = useState(true);
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const cta = document.querySelector("[data-hero-cta]");
    if (!cta || typeof IntersectionObserver === "undefined") {
      setHidden(false);
      return;
    }
    const io = new IntersectionObserver(([entry]) => setHidden(entry.isIntersecting));
    io.observe(cta);
    return () => io.disconnect();
  }, []);

  // `inert` retire le lien de l'ordre de tabulation et du focus programmatique.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (hidden) el.setAttribute("inert", "");
    else el.removeAttribute("inert");
  }, [hidden]);

  return (
    <a
      ref={ref}
      href={href}
      rel="noopener noreferrer"
      aria-hidden={hidden || undefined}
      className={`fixed inset-x-0 bottom-0 z-40 flex min-h-[3.5rem] items-center justify-center border-t-2 border-ink bg-tomato px-4 font-sans text-base font-semibold text-[#101010] transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
    >
      {label}
    </a>
  );
}
