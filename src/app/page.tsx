export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Automatisez vos process.{" "}
          <span className="text-accent">Accélérez avec l&apos;IA.</span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/60">
          Senior Automation &amp; AI Engineer — 40+ workflows en production
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://calendly.com"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-accent-hover transition-colors"
          >
            Réserver un audit IA gratuit
          </a>
          <a
            href="#projets"
            className="text-sm font-semibold leading-6 text-foreground/80 hover:text-foreground transition-colors"
          >
            Voir mes projets <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </main>
  );
}
