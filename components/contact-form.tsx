"use client";

import { UploadCloud } from "lucide-react";
import { useState } from "react";

const serviceOptions = [
  "Journal cover",
  "Paper figure",
  "Graphical abstract",
  "Scientific animation",
  "Academic poster",
  "3D molecular/cellular visualization",
  "Template pack / resource",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: new FormData(form),
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 rounded-lg border border-border bg-surface p-5 shadow-plate md:grid-cols-2 md:p-8">
      <Field label="Name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <label className="grid gap-2 text-sm font-semibold text-ink">
        Service type <span className="sr-only">required</span>
        <select name="service" required className="h-12 rounded-md border border-border bg-bg px-3 text-base text-text focus:border-accent">
          <option value="">Select a service</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <Field label="Target use" name="target" placeholder="Journal, grant, conference, lab website" />
      <Field label="Deadline" name="deadline" type="date" />
      <Field label="Budget range" name="budget" placeholder="Optional" />
      <label className="grid gap-2 text-sm font-semibold text-ink md:col-span-2">
        Project notes <span className="sr-only">required</span>
        <textarea
          name="message"
          required
          rows={7}
          className="rounded-md border border-border bg-bg px-3 py-3 text-base leading-7 text-text focus:border-accent"
          placeholder="Tell us what the figure needs to explain, what source material exists, and who will review it."
        />
      </label>
      <label className="grid gap-3 rounded-md border border-dashed border-border-strong bg-bg p-4 text-sm font-semibold text-ink md:col-span-2">
        <span className="inline-flex items-center gap-2">
          <UploadCloud aria-hidden className="h-4 w-4 text-accent" />
          Manuscript, sketch or references
        </span>
        <input name="files" type="file" multiple className="text-sm text-text-muted file:mr-4 file:rounded-md file:border-0 file:bg-accent-soft file:px-3 file:py-2 file:text-sm file:font-semibold file:text-ink" />
        <span className="font-normal text-text-muted">PDF, DOCX, PPTX, PNG, JPG or ZIP references are fine for quoting.</span>
      </label>
      <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-5 font-semibold text-canvas transition duration-200 hover:-translate-y-0.5 disabled:opacity-60"
        >
          {status === "sending" ? "Sending request..." : "Request a quote"}
        </button>
        <p aria-live="polite" className="text-sm text-text-muted">
          {status === "success" ? "Quote request received. We will reply within one working day." : null}
          {status === "error" ? "The request could not be sent. Please email hello@latticevisual.com." : null}
          {status === "idle" || status === "sending" ? "We reply within one working day." : null}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink">
      {label} {required ? <span className="sr-only">required</span> : null}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 rounded-md border border-border bg-bg px-3 text-base text-text focus:border-accent"
      />
    </label>
  );
}
