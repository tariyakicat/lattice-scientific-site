"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cx } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/work", label: "Gallery" },
  { href: "/services", label: "Services" },
  { href: "/templates", label: "Templates" },
  { href: "/process", label: "Workflow" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between px-5 md:px-8 xl:px-12">
        <Link href="/" className="group inline-flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-md border border-border bg-ink font-mono text-[0.68rem] font-semibold tracking-wider text-canvas transition-transform duration-200 group-hover:-translate-y-0.5">
            LV
          </span>
          <span className="font-sans text-sm font-semibold tracking-tight text-ink">Lattice Visual</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "relative py-2 font-mono text-xs uppercase tracking-[0.16em] transition-colors duration-200",
                  active ? "text-ink" : "text-text-muted hover:text-ink",
                )}
              >
                {item.label}
                <span
                  className={cx(
                    "absolute inset-x-0 bottom-0 h-px origin-left bg-accent transition-transform duration-200",
                    active ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-5 font-sans text-sm font-semibold text-canvas transition duration-200 hover:-translate-y-0.5"
          >
            Request a quote
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface text-ink"
          >
            {open ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav aria-label="Mobile navigation" className="border-t border-border bg-bg px-5 py-4 md:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center justify-between border-b border-border py-3 text-base font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
