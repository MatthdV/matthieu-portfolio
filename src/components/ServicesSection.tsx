import Image from "next/image";
import Link from "next/link";
import MarkerUnderline from "./MarkerUnderline";
import FadeIn from "./FadeIn";

interface ServiceCard {
  title: string;
  description: string;
  price: string;
  icon: string;
  featured?: boolean;
  priceColor?: "yellow" | "blue";
}

interface ServicesSectionProps {
  sectionLabel: string;
  title: string;
  titleAccent: string;
  services: ServiceCard[];
}

export default function ServicesSection({
  sectionLabel,
  title,
  titleAccent,
  services,
}: ServicesSectionProps) {
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

        {/* Title */}
        <FadeIn delay={0.1}>
          <h2
            className="mb-16 font-sans font-bold tracking-[-2px] text-foreground"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            {title}{" "}
            <MarkerUnderline color="red">{titleAccent}</MarkerUnderline>
          </h2>
        </FadeIn>

        {/* Bento grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={index} delay={0.15 + index * 0.1} className={service.featured ? "md:col-span-2" : ""}>
            <Link
              href="/services"
              className="group relative flex flex-col border border-border bg-background p-6 transition-all duration-200 hover:-translate-y-1 hover:border-marker-blue h-full"
            >
              {/* Icon */}
              <div className="mb-5 h-14 w-14 relative">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mb-2 font-sans text-xl font-bold tracking-tight text-foreground">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-6 text-sm leading-relaxed text-muted flex-1">
                {service.description}
              </p>

              {/* Price */}
              <span
                className={`font-mono text-sm font-bold ${
                  service.priceColor === "blue"
                    ? "text-marker-blue"
                    : "text-marker-yellow"
                }`}
              >
                {service.price}
              </span>
            </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
