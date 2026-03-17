"use client";

import { useState } from "react";

interface ContactFormProps {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  budgetLabel: string;
  budgetPlaceholder: string;
  budgetOptions: { value: string; label: string }[];
  messageLabel: string;
  messagePlaceholder: string;
  submit: string;
  successTitle: string;
  successMessage: string;
}

export default function ContactForm({
  nameLabel,
  namePlaceholder,
  emailLabel,
  emailPlaceholder,
  budgetLabel,
  budgetPlaceholder,
  budgetOptions,
  messageLabel,
  messagePlaceholder,
  submit,
  successTitle,
  successMessage,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-marker-blue p-8">
        <h3 className="mb-2 font-sans text-xl font-bold text-foreground">
          {successTitle}
        </h3>
        <p className="font-mono text-sm text-muted">{successMessage}</p>
      </div>
    );
  }

  const inputClasses =
    "w-full border border-border bg-background px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted focus:border-marker-blue focus:outline-none transition-colors duration-200";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Name */}
      <div>
        <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
          {nameLabel}
        </label>
        <input
          type="text"
          placeholder={namePlaceholder}
          required
          className={inputClasses}
        />
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
          {emailLabel}
        </label>
        <input
          type="email"
          placeholder={emailPlaceholder}
          required
          className={inputClasses}
        />
      </div>

      {/* Budget */}
      <div>
        <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
          {budgetLabel}
        </label>
        <select className={`${inputClasses} appearance-none`} defaultValue="">
          <option value="" disabled>
            {budgetPlaceholder}
          </option>
          {budgetOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted">
          {messageLabel}
        </label>
        <textarea
          placeholder={messagePlaceholder}
          required
          rows={5}
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-marker-blue px-8 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-marker-yellow)]"
      >
        {submit}
      </button>
    </form>
  );
}
