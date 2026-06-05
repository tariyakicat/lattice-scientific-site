import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { projects } from "@/lib/data";
import { cx } from "@/lib/utils";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.brief,
  };
}

export default async function CaseStudyPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main>
      <section className="border-b border-border bg-bg">
        <div className="mx-auto max-w-site px-5 py-10 md:px-8 md:py-14 xl:px-12">
          <Link href="/work" className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-surface px-4 text-sm font-semibold text-ink transition duration-200 hover:-translate-y-0.5">
            <ArrowLeft aria-hidden className="h-4 w-4" />
            Back to portfolio
          </Link>
          <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {project.discipline} / {project.usage} / {project.year}
              </p>
              <h1 className="mt-5 text-balance font-display text-5xl leading-[0.94] text-ink md:text-7xl">{project.title}</h1>
            </div>
            <dl className="grid gap-4 rounded-lg border border-border bg-surface p-5 text-sm md:col-span-4">
              <div>
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-text-muted">Client</dt>
                <dd className="mt-1 font-semibold text-ink">{project.client}</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-text-muted">Use</dt>
                <dd className="mt-1 font-semibold text-ink">{project.context}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-surface">
        <div className="mx-auto max-w-site px-5 py-5 md:px-8 xl:px-12">
          <div className="plate-crop-mark relative overflow-hidden rounded-lg border border-border bg-canvas p-4 shadow-plate">
            <div className="relative aspect-[16/10] overflow-hidden rounded-md">
              {project.video ? (
                <video className="h-full w-full object-contain" src={project.video} poster={project.cover} muted loop autoPlay playsInline controls />
              ) : (
                <Image src={project.cover} alt={project.title} width={project.width} height={project.height} priority sizes="100vw" className={cx("h-full w-full", project.fit === "cover" ? "object-cover" : "object-contain")} />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-site gap-8 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28 xl:px-12">
        <div className="md:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Project background</p>
          <h2 className="mt-4 font-display text-4xl leading-none text-ink md:text-6xl">The science problem.</h2>
        </div>
        <div className="grid gap-8 text-lg leading-8 text-text-muted md:col-span-7">
          <p>{project.brief}</p>
          <div className="border-t border-border pt-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Visual solution</p>
            <p className="mt-4">{project.solution}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-site gap-4 px-5 py-5 md:grid-cols-12 md:px-8 xl:px-12">
          {project.gallery.map((image, index) => (
            <div key={image.src} className={cx("plate-crop-mark relative overflow-hidden rounded-lg border border-border bg-canvas p-3 shadow-plate", index === 0 ? "md:col-span-12" : "md:col-span-6")}>
              <div className={cx("relative overflow-hidden rounded-md", index === 0 ? "aspect-[16/9]" : "aspect-[4/3]")}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes={index === 0 ? "100vw" : "(min-width: 1024px) 50vw, 100vw"}
                  className={cx("h-full w-full", image.fit === "cover" ? "object-cover" : "object-contain")}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-site px-5 py-16 md:px-8 xl:px-12">
        <Link href={`/work/${nextProject.slug}`} className="group grid gap-4 rounded-lg border border-border bg-surface p-6 shadow-plate transition duration-200 hover:-translate-y-1 hover:border-border-strong md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">Next plate</p>
            <h2 className="mt-3 font-display text-4xl leading-none text-ink md:text-6xl">{nextProject.title}</h2>
          </div>
          <div className="inline-flex items-center gap-2 font-semibold text-ink md:col-span-4 md:justify-self-end">
            Open case
            <ArrowUpRight aria-hidden className="h-4 w-4 transition duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </Link>
      </section>

      <CtaBand />
    </main>
  );
}
