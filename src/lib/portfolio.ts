import { getCollection, type CollectionEntry } from "astro:content";
import { getPortfolioCategoryByName } from "@/lib/portfolio-categories";

export type PortfolioEntry = CollectionEntry<"portfolio">;

export function portfolioSlug(project: PortfolioEntry) {
  return project.id.replace(/\.(md|mdx)$/i, "");
}

export function sortPortfolio(projects: PortfolioEntry[]) {
  return [...projects].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getPublicPortfolio() {
  return sortPortfolio(await getCollection("portfolio", ({ data }) => data.displayPermission));
}

export function categorySlugForProject(project: PortfolioEntry) {
  return getPortfolioCategoryByName(project.data.category)?.slug ?? "portfolio";
}

export function portfolioAlt(project: PortfolioEntry, view = "final scientific illustration") {
  return `${project.data.title} — ${project.data.category}, ${project.data.field}, ${view}`;
}
