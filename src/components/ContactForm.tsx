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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, budget, message }),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setSubmitted(true);
    } catch {
      setError("Une erreur est survenue. Réessaie ou contacte-moi directement.");
    } finally {
      setLoading(false);
    }
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
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <select
          className={`${inputClasses} appearance-none`}
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          defaultValue=""
        >
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={messagePlaceholder}
          required
          rows={5}
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Error */}
      {error && (
        <p className="font-mono text-xs text-red-500">{error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-marker-blue px-8 py-3 font-mono text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-marker-yellow)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {loading ? "..." : submit}
      </button>
    </form>
  );
}
