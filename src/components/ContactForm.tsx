"use client";

import { useRef, useState } from "react";
import { Link } from "@/i18n/navigation";

type FieldName = "name" | "email" | "message" | "consent";

export type ContactFormLabels = {
  name: string;
  email: string;
  phone: string;
  message: string;
  messageHelp: string;
  consent: string;
  consentLink: string;
  submit: string;
  sending: string;
  successTitle: string;
  success: string;
  error: string;
  invalid: string;
  errors: Record<FieldName, string>;
};

type Status = "idle" | "sending" | "ok" | "error" | "invalid";

const FIELDS: FieldName[] = ["name", "email", "message", "consent"];

const field =
  "mt-1 block w-full border-2 border-ink bg-card px-3 py-3 text-base text-ink placeholder:text-soft";

export default function ContactForm({ labels, locale }: { labels: ContactFormLabels; locale: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const openedAt = useRef(Date.now());
  const successRef = useRef<HTMLDivElement>(null);

  const fieldProps = (name: FieldName) => ({
    "aria-invalid": errors[name] ? (true as const) : undefined,
    "aria-describedby": errors[name] ? `cf-${name}-error` : undefined,
  });

  const fieldError = (name: FieldName) =>
    errors[name] ? (
      <p id={`cf-${name}-error`} className="mt-1 text-base font-bold text-ink">
        {errors[name]}
      </p>
    ) : null;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // Validation dans la langue du site : les bulles natives suivent celle du navigateur.
    const found: Partial<Record<FieldName, string>> = {};
    let firstInvalid: HTMLElement | null = null;
    for (const name of FIELDS) {
      const el = form.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement | null;
      // Un champ introuvable compte comme invalide : on n'envoie jamais un formulaire incomplet.
      if (!el || !el.validity.valid) {
        found[name] = labels.errors[name];
        if (el) firstInvalid ??= el;
      }
    }
    setErrors(found);
    if (firstInvalid) {
      setStatus("invalid");
      firstInvalid.focus();
      return;
    }

    setStatus("sending");
    const data = new FormData(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          consent: data.get("consent") === "on",
          company: data.get("company"),
          elapsed: Date.now() - openedAt.current,
          locale,
        }),
      });
      setStatus(res.ok ? "ok" : res.status === 400 ? "invalid" : "error");
      if (res.ok) {
        form.reset();
        // Le formulaire disparaît : on place le focus sur la confirmation.
        requestAnimationFrame(() => successRef.current?.focus());
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="border-2 border-ink bg-card p-6 outline-none">
        <p className="font-display text-2xl">{labels.successTitle}</p>
        <p className="mt-2">{labels.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-describedby="form-status">
      <div>
        <label htmlFor="cf-name" className="font-bold">{labels.name}</label>
        <input id="cf-name" name="name" type="text" required autoComplete="name" maxLength={120} className={field} {...fieldProps("name")} />
        {fieldError("name")}
      </div>
      <div>
        <label htmlFor="cf-email" className="font-bold">{labels.email}</label>
        <input id="cf-email" name="email" type="email" required autoComplete="email" maxLength={200} className={field} {...fieldProps("email")} />
        {fieldError("email")}
      </div>
      <div>
        <label htmlFor="cf-phone" className="font-bold">{labels.phone}</label>
        <input id="cf-phone" name="phone" type="tel" autoComplete="tel" maxLength={40} className={field} />
      </div>
      <div>
        <label htmlFor="cf-message" className="font-bold">{labels.message}</label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          maxLength={3000}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "cf-message-error cf-message-help" : "cf-message-help"}
          className={field}
        />
        {fieldError("message")}
        <p id="cf-message-help" className="mt-1 text-sm text-soft">{labels.messageHelp}</p>
      </div>

      {/* Champ piège : invisible pour les visiteurs, rempli par les robots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input name="company" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="cf-consent"
            name="consent"
            type="checkbox"
            required
            className="mt-1 h-6 w-6 shrink-0 accent-tomato"
            {...fieldProps("consent")}
          />
          <label htmlFor="cf-consent">
            {labels.consent}{" "}
            <Link href="/confidentialite" className="font-bold underline">
              {labels.consentLink}
            </Link>
          </label>
        </div>
        {fieldError("consent")}
      </div>

      <button type="submit" disabled={status === "sending"} className="btn btn-red w-full sm:w-auto">
        {status === "sending" ? labels.sending : labels.submit}
      </button>

      <p id="form-status" role="status" aria-live="polite" className="min-h-[1.5rem] font-bold text-ink">
        {status === "error" ? labels.error : status === "invalid" ? labels.invalid : ""}
      </p>
    </form>
  );
}
