import { getCollection, type CollectionEntry } from "astro:content";

export type ResourceEntry = CollectionEntry<"resources">;

export function resourceSlug(resource: ResourceEntry) {
  return resource.id.replace(/\.(md|mdx)$/i, "");
}

export function sortResources(resources: ResourceEntry[]) {
  return [...resources].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getAllResources() {
  return sortResources(await getCollection("resources"));
}

export async function getResourceBySlug(slug: string) {
  const resources = await getCollection("resources");
  return resources.find((resource) => resourceSlug(resource) === slug);
}

export function resourceLabel(resource: ResourceEntry) {
  return resource.data.isPremium ? `$${resource.data.price}` : "Free";
}
