import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
  as = "h2",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  as?: "h1" | "h2";
}) {
  const Heading = as;

  return (
    <div className="max-w-4xl">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <Heading className="mt-4 text-balance font-display text-4xl leading-none text-ink md:text-6xl">{title}</Heading>
      {children ? <div className="mt-5 max-w-copy text-base leading-7 text-text-muted md:text-lg">{children}</div> : null}
    </div>
  );
}
