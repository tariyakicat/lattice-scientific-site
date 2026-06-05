import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Download } from "lucide-react";
import type { TemplateItem } from "@/lib/data";
import { cx } from "@/lib/utils";

export function TemplateCard({ template, compact = false }: { template: TemplateItem; compact?: boolean }) {
  const Icon = template.icon;
  const isFree = template.access === "Free";

  return (
    <article
      className={cx(
        "group flex h-full flex-col rounded-lg border bg-surface p-5 shadow-plate transition duration-200 ease-plate hover:-translate-y-1 hover:shadow-plate-hover",
        isFree ? "border-border" : "border-accent",
      )}
    >
      <div className="flex items-start justify-between gap-5">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-md border border-border bg-bg text-accent">
            <Icon aria-hidden className="h-5 w-5" />
          </span>
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-text-muted">{template.category}</p>
            <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ink">{template.access}</p>
          </div>
        </div>
        <span
          className={cx(
            "rounded-full border px-3 py-1 font-mono text-xs font-semibold tabular",
            isFree ? "border-border bg-bg text-text-muted" : "border-accent bg-accent-soft text-ink",
          )}
        >
          {template.price}
        </span>
      </div>

      <h3 className={cx("mt-7 text-balance font-semibold leading-tight text-ink", compact ? "text-2xl" : "text-3xl")}>{template.title}</h3>
      <p className="mt-4 leading-7 text-text-muted">{template.description}</p>

      <ul className="mt-6 grid gap-3 text-sm text-text">
        {template.includes.slice(0, compact ? 2 : template.includes.length).map((item) => (
          <li key={item} className="flex gap-3">
            <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.16em] text-text-muted">{template.format}</p>
        {isFree ? (
          <a
            href={template.href}
            download
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-canvas transition duration-200 hover:-translate-y-0.5"
          >
            <Download aria-hidden className="h-4 w-4" />
            {template.cta}
          </a>
        ) : (
          <Link
            href={template.href}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-border bg-bg px-4 text-sm font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:border-border-strong"
          >
            {template.cta}
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </Link>
        )}
      </div>
    </article>
  );
}
