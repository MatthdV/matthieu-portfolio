"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-accent/20 bg-accent/[0.05] p-8 text-center">
        <svg
          className="mx-auto h-10 w-10 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-4 text-xl font-semibold">Message envoyé !</h3>
        <p className="mt-2 text-sm text-foreground/60">
          Merci pour votre message. Je reviens vers vous sous 24h.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-foreground/70"
          >
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-foreground/15 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="Jean Dupont"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-foreground/70"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-foreground/15 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder="jean@entreprise.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="budget"
          className="mb-1.5 block text-sm font-medium text-foreground/70"
        >
          Budget estimé
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full rounded-lg border border-foreground/15 bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <option value="">Sélectionner un budget</option>
          <option value="<2k">&lt; 2 000 €</option>
          <option value="2k-5k">2 000 € – 5 000 €</option>
          <option value="5k-10k">5 000 € – 10 000 €</option>
          <option value="10k+">10 000 € +</option>
          <option value="retainer">Retainer mensuel</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-foreground/70"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none rounded-lg border border-foreground/15 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder="Décrivez votre projet ou votre besoin..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover sm:w-auto"
      >
        Envoyer le message
      </button>
    </form>
  );
}
