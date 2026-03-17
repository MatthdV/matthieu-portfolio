"use client";

export default function NewsletterForm() {
  return (
    <form
      className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="votre@email.com"
        required
        className="flex-1 rounded-lg border border-foreground/15 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
      />
      <button
        type="submit"
        className="shrink-0 rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
      >
        S&apos;inscrire
      </button>
    </form>
  );
}
