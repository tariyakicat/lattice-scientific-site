"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const quickServices = [
  "Graphical abstract",
  "Journal cover",
  "Paper figure",
  "Scientific animation",
  "Template pack",
];

export function MiniQuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;

    try {
      const formData = new FormData(form);
      formData.set("target", "Homepage quick quote");
      formData.set("message", `Quick quote request from homepage. Institution: ${formData.get("institution") || "Not provided"}`);
      const response = await fetch("/api/quote", { method: "POST", body: formData });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-border bg-surface p-4 shadow-plate md:p-5">
      <div className="grid gap-3">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="University or company" name="institution" />
        <label className="grid gap-2 text-sm font-semibold text-ink">
          Project type
          <select name="service" required className="h-11 rounded-md border border-border bg-bg px-3 text-sm text-text focus:border-accent">
            {quickServices.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-canvas transition duration-200 hover:-translate-y-0.5 disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Order / request quote"}
        <ArrowUpRight aria-hidden className="h-4 w-4" />
      </button>
      <p aria-live="polite" className="mt-3 text-xs leading-5 text-text-muted">
        {status === "success" ? "Request received. We will reply within one working day." : null}
        {status === "error" ? "Could not send. Please email hello@latticevisual.com." : null}
        {status === "idle" || status === "sending" ? "No payment here. We reply with scope, price and timeline." : null}
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink">
      {label} {required ? <span className="sr-only">required</span> : null}
      <input name={name} type={type} required={required} className="h-11 rounded-md border border-border bg-bg px-3 text-sm text-text focus:border-accent" />
    </label>
  );
}
