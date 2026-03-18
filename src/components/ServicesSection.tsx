"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.93 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

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
            <motion.span
              className="h-px bg-marker-blue"
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
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

        {/* Bento grid — stagger */}
        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={service.featured ? "md:col-span-2" : ""}
            >
              <motion.div
                whileHover="hovered"
                initial="rest"
                animate="rest"
                className="relative overflow-hidden"
              >
                {/* Marker fill background — paints left to right */}
                <motion.span
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{ backgroundColor: 'rgba(26, 101, 255, 0.06)', originX: 0 }}
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
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                <Link
                  href="/services"
                  className="group relative flex flex-col border border-border bg-background p-6 h-full"
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
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
