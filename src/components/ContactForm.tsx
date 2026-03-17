"use client";

import { useState } from "react";

export interface ContactFormTranslations {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  budgetLabel: string;
  budgetPlaceholder: string;
  budgetLt2k: string;
  budget2k5k: string;
  budget5k10k: string;
  budget10kPlus: string;
  budgetRetainer: string;
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  successTitle: string;
  successMessage: string;
}

export default function ContactForm({ translations: t }: { translations: ContactFormTranslations }) {
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
        <h3 className="mt-4 text-xl font-semibold">{t.successTitle}</h3>
        <p className="mt-2 text-sm text-foreground/60">
          {t.successMessage}
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
            {t.nameLabel}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-lg border border-foreground/15 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder={t.namePlaceholder}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-foreground/70"
          >
            {t.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-foreground/15 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder={t.emailPlaceholder}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="budget"
          className="mb-1.5 block text-sm font-medium text-foreground/70"
        >
          {t.budgetLabel}
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full rounded-lg border border-foreground/15 bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        >
          <option value="">{t.budgetPlaceholder}</option>
          <option value="<2k">{t.budgetLt2k}</option>
          <option value="2k-5k">{t.budget2k5k}</option>
          <option value="5k-10k">{t.budget5k10k}</option>
          <option value="10k+">{t.budget10kPlus}</option>
          <option value="retainer">{t.budgetRetainer}</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-foreground/70"
        >
          {t.messageLabel}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none rounded-lg border border-foreground/15 bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-foreground/30 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          placeholder={t.messagePlaceholder}
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover sm:w-auto"
      >
        {t.submit}
      </button>
    </form>
  );
}
