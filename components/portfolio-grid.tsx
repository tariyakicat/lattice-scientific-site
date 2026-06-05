"use client";

import { Check, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { disciplines, projects, usages, type Discipline, type Usage } from "@/lib/data";
import { cx } from "@/lib/utils";
import { ArtworkPlate } from "./artwork-plate";

type DisciplineFilter = "All" | Discipline;
type UsageFilter = "All" | Usage;

const variants = ["wide", "standard", "tall", "standard", "wide", "standard", "standard", "wide"] as const;

export function PortfolioGrid({ featuredOnly = false }: { featuredOnly?: boolean }) {
  const [discipline, setDiscipline] = useState<DisciplineFilter>("All");
  const [usage, setUsage] = useState<UsageFilter>("All");
  const [visible, setVisible] = useState(featuredOnly ? 5 : 8);

  const filtered = useMemo(() => {
    if (featuredOnly) return projects.slice(0, 5);
    return projects.filter((project) => {
      const disciplineMatch = discipline === "All" || project.discipline === discipline;
      const usageMatch = usage === "All" || project.usage === usage;
      return disciplineMatch && usageMatch;
    });
  }, [discipline, featuredOnly, usage]);

  const shown = filtered.slice(0, visible);

  return (
    <div>
      {!featuredOnly ? (
        <div className="mb-10 rounded-lg border border-border bg-surface p-4 shadow-plate">
          <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
            <SlidersHorizontal aria-hidden className="h-4 w-4" />
            Filter plates
          </div>
          <FilterRow
            label="Discipline"
            values={["All", ...disciplines]}
            active={discipline}
            onChange={(value) => {
              setDiscipline(value as DisciplineFilter);
              setVisible(8);
            }}
          />
          <FilterRow
            label="Usage"
            values={["All", ...usages]}
            active={usage}
            onChange={(value) => {
              setUsage(value as UsageFilter);
              setVisible(8);
            }}
          />
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        {shown.map((project, index) => (
          <ArtworkPlate
            key={project.slug}
            project={project}
            variant={featuredOnly ? (index === 0 ? "wide" : "standard") : variants[index % variants.length]}
            priority={index < 2}
          />
        ))}
      </div>

      {!featuredOnly && visible < filtered.length ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((value) => value + 6)}
            className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-surface px-5 font-semibold text-ink transition duration-200 hover:-translate-y-0.5 hover:border-border-strong"
          >
            Load more plates
          </button>
        </div>
      ) : null}
    </div>
  );
}

function FilterRow({
  label,
  values,
  active,
  onChange,
}: {
  label: string;
  values: string[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-3 border-t border-border py-4 md:grid-cols-[8rem_1fr] md:items-start">
      <p className="pt-2 font-mono text-xs uppercase tracking-[0.18em] text-text-muted">{label}</p>
      <div className="flex flex-wrap gap-2">
        {values.map((value) => {
          const selected = active === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => onChange(value)}
              aria-pressed={selected}
              className={cx(
                "inline-flex min-h-11 items-center gap-2 rounded-md border px-3 text-sm transition duration-200",
                selected
                  ? "border-accent bg-accent-soft text-ink"
                  : "border-border bg-bg text-text-muted hover:border-border-strong hover:text-ink",
              )}
            >
              {selected ? <Check aria-hidden className="h-4 w-4 text-accent" /> : null}
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}
