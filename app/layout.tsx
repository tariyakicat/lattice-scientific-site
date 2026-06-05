import type { Metadata } from "next";
import "./globals.css";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = {
  title: {
    default: "Lattice Visual | Scientific Illustration Studio",
    template: "%s | Lattice Visual",
  },
  description:
    "Scientific illustration studio creating journal covers, paper figures, graphical abstracts, scientific animation and 3D research visuals.",
};

const themeScript = `
try {
  const stored = localStorage.getItem("lattice-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (stored === "dark" || (!stored && prefersDark)) {
    document.documentElement.classList.add("dark");
  }
} catch {}
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
