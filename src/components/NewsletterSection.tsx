"use client";

import { useState } from "react";
import Image from "next/image";
import MarkerUnderline from "./MarkerUnderline";
import FadeIn from "./FadeIn";

interface NewsletterSectionProps {
  sectionLabel: string;
  title: string;
  titleAccent: string;
  description: string;
  placeholder: string;
  subscribe: string;
}

export default function NewsletterSection({
  sectionLabel,
  title,
  titleAccent,
  description,
  placeholder,
  subscribe,
}: NewsletterSectionProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        {/* Section label */}
        <FadeIn>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-marker-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-marker-blue">
              {sectionLabel}
            </span>
          </div>
        </FadeIn>

        {/* Content */}
        <FadeIn delay={0.15}>
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:gap-16 lg:text-left">
          {/* Illustration */}
          <div className="relative mb-8 h-32 w-32 shrink-0 lg:mb-0 lg:h-40 lg:w-40">
            <Image
              src="/images/icon-newsletter.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Text + Form */}
          <div className="flex-1">
            <h2
              className="mb-4 font-sans font-bold tracking-[-2px] text-foreground"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              {title}{" "}
              <MarkerUnderline color="blue">{titleAccent}</MarkerUnderline>
            </h2>

            <p className="mb-8 max-w-xl text-muted lg:max-w-none">
              {description}
            </p>

            {submitted ? (
              <div className="inline-flex items-center gap-2 border border-marker-blue px-6 py-3">
                <span className="font-mono text-sm text-marker-blue">
                  OK
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={placeholder}
                  required
                  className="flex-1 border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted focus:border-marker-blue focus:outline-none"
                />
                <button
                  type="submit"
                  className="border border-l-0 border-marker-blue bg-marker-blue px-6 py-3 font-mono text-sm font-bold text-background transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--marker-yellow)]"
                >
                  {subscribe}
                </button>
              </form>
            )}
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
