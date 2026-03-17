import { Link } from "@/i18n/navigation";

type FooterProps = {
  tagline: string;
  copyright: string;
  navLinks: { href: string; label: string }[];
};

export default function Footer({ tagline, copyright, navLinks }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-12 md:flex-row md:items-start md:justify-between">
        {/* Logo + tagline */}
        <div className="flex flex-col items-center gap-1 md:items-start">
          <Link href="/" className="group flex items-baseline">
            <span className="text-xl font-bold tracking-tight text-foreground transition-transform duration-150 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
              matthieu
            </span>
            <span className="text-xl font-bold text-marker-blue">.</span>
          </Link>
          <span className="font-mono text-xs text-muted">{tagline}</span>
        </div>

        {/* Nav links */}
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-muted transition-colors duration-150 hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="font-mono text-xs text-muted">
          &copy; {year} Matthieu de Villele. {copyright}
        </p>
      </div>
    </footer>
  );
}
