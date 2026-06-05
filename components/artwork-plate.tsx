import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";
import { cx } from "@/lib/utils";

const spanClasses = {
  standard: "md:col-span-4",
  wide: "md:col-span-8",
  tall: "md:col-span-4 md:row-span-2",
  feature: "md:col-span-7",
};

export function ArtworkPlate({
  project,
  variant = "standard",
  priority = false,
}: {
  project: Project;
  variant?: keyof typeof spanClasses;
  priority?: boolean;
}) {
  const imageFit = project.fit === "cover" ? "object-cover" : "object-contain";
  const aspect = variant === "tall" ? "aspect-[4/5]" : variant === "wide" ? "aspect-[16/9]" : "aspect-[4/3]";

  return (
    <Link
      href={`/work/${project.slug}`}
      className={cx(
        "group plate-crop-mark relative block overflow-hidden rounded-lg border border-border bg-surface p-3 shadow-plate transition duration-200 ease-plate hover:-translate-y-1 hover:border-border-strong hover:shadow-plate-hover",
        spanClasses[variant],
      )}
    >
      <div className={cx("relative overflow-hidden rounded-md bg-canvas", aspect)}>
        {project.video ? (
          <video
            className={cx("h-full w-full", imageFit)}
            src={project.video}
            poster={project.cover}
            muted
            loop
            autoPlay
            playsInline
            preload="metadata"
            aria-label={`${project.title} animation preview`}
          />
        ) : (
          <Image
            src={project.cover}
            alt={project.title}
            width={project.width}
            height={project.height}
            sizes={variant === "wide" || variant === "feature" ? "(min-width: 1024px) 66vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
            priority={priority}
            className={cx("h-full w-full transition duration-300 ease-plate group-hover:scale-[1.015]", imageFit)}
          />
        )}
      </div>
      <div className="grid gap-2 px-1 pb-1 pt-4">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-accent">
          {project.discipline} / {project.year}
        </p>
        <div className="flex items-end justify-between gap-5">
          <h3 className="text-lg font-semibold leading-tight text-ink">{project.title}</h3>
          <span className="shrink-0 border-l border-border pl-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-text-muted">
            {project.usage}
          </span>
        </div>
      </div>
    </Link>
  );
}

export function StaticPlate({
  project,
  label,
  className,
  priority = false,
}: {
  project: Project;
  label?: string;
  className?: string;
  priority?: boolean;
}) {
  const imageFit = project.fit === "cover" ? "object-cover" : "object-contain";

  return (
    <div className={cx("plate-crop-mark relative overflow-hidden rounded-lg border border-border bg-surface p-3 shadow-plate", className)}>
      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-canvas">
        {project.video ? (
          <video className={cx("h-full w-full", imageFit)} src={project.video} poster={project.cover} muted loop autoPlay playsInline preload="metadata" />
        ) : (
          <Image
            src={project.cover}
            alt={project.title}
            width={project.width}
            height={project.height}
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority={priority}
            className={cx("h-full w-full", imageFit)}
          />
        )}
      </div>
      <p className="px-1 pt-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-text-muted">
        {label ?? `${project.usage} / ${project.discipline} / ${project.year}`}
      </p>
    </div>
  );
}
