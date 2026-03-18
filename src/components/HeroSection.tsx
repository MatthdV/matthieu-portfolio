import Image from "next/image";
import { Link } from "@/i18n/navigation";
import MarkerUnderline from "./MarkerUnderline";
import FadeIn from "./FadeIn";

type HeroSectionProps = {
  tag: string;
  title: string;
  titleAccent: string;
  description: string;
  stats: { value: string; label: string }[];
  ctaPrimary: string;
  ctaSecondary: string;
};

export default function HeroSection({
  tag,
  title,
  titleAccent,
  description,
  stats,
  ctaPrimary,
  ctaSecondary,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-0 lg:min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 py-12 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left column */}
        <div className="relative z-10">
          {/* Availability tag */}
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-[2px] bg-marker-blue" />
              <span className="font-mono text-sm text-marker-blue tracking-wide">
                {tag}
              </span>
            </div>
          </FadeIn>

          {/* H1 */}
          <FadeIn delay={0.1}>
            <h1
              className="font-bold leading-[1.05] tracking-[-0.04em] mb-6"
              style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
            >
              <span className="block">{title}</span>
              <MarkerUnderline color="yellow">{titleAccent}</MarkerUnderline>
            </h1>
          </FadeIn>

          {/* Description */}
          <FadeIn delay={0.2}>
            <p className="text-muted text-lg max-w-[500px] leading-relaxed mb-10">
              {description}
            </p>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.3}>
            <div className="flex gap-6 sm:gap-10 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-foreground">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs text-muted uppercase tracking-wider mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* CTAs */}
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-marker-blue text-white font-mono text-sm uppercase tracking-wider text-center transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[4px_4px_0px_0px_var(--color-marker-yellow)]"
              >
                {ctaPrimary}
              </Link>
              <Link
                href="/projets"
                className="inline-block px-8 py-4 border border-[var(--color-border)] text-foreground font-mono text-sm uppercase tracking-wider text-center transition-all duration-200 hover:border-foreground hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[4px_4px_0px_0px_var(--color-border)]"
              >
                {ctaSecondary}
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Right column */}
        <FadeIn delay={0.3}>
        <div className="relative flex items-center justify-center lg:justify-end">
          {/* Decorative blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-marker-blue/[0.06] rounded-full blur-[100px] pointer-events-none" />

          {/* Decorative marker strokes */}
          <div
            className="absolute -top-4 right-12 w-24 h-[4px] bg-marker-blue"
            style={{ transform: "rotate(-8deg)" }}
          />
          <div
            className="absolute bottom-16 left-4 w-16 h-[4px] bg-marker-yellow"
            style={{ transform: "rotate(12deg)" }}
          />

          {/* Hero illustration */}
          <div className="relative w-full max-w-[320px] sm:max-w-[520px] mx-auto aspect-square">
            <Image
              src="/images/hero-illustration.png"
              alt="Illustration marker — homme, robot et laptop"
              fill
              sizes="(max-width: 640px) 320px, 520px"
              className="object-contain"
              priority
            />
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
