import { getCollection, getEntry, type CollectionEntry } from "astro:content";
import { blogCategorySlug, slugify } from "@/lib/blog-categories";

export type BlogEntry = CollectionEntry<"blog">;
export type AuthorEntry = CollectionEntry<"authors">;

export function blogSlug(post: BlogEntry) {
  return post.id.replace(/\.(md|mdx)$/i, "");
}

export function blogUrl(post: BlogEntry) {
  return `/blog/${blogSlug(post)}/`;
}

export function sortBlogPosts(posts: BlogEntry[]) {
  return [...posts].sort((a, b) => b.data.datePublished.getTime() - a.data.datePublished.getTime());
}

export async function getAllBlogPosts() {
  return sortBlogPosts(await getCollection("blog"));
}

export async function getPostAuthor(post: BlogEntry) {
  return getEntry(post.data.author);
}

export function readingTime(post: BlogEntry) {
  const plainText = (post.body ?? "")
    .replace(/^---[\s\S]*?---/m, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/[`#>*_{}\[\]()]/g, " ")
    .replace(/https?:\/\/\S+/g, " ");
  const words = plainText.trim().split(/\s+/).filter(Boolean).length;
  return { words, minutes: Math.max(1, Math.ceil(words / 220)), label: `${Math.max(1, Math.ceil(words / 220))} min read` };
}

export function formatBlogDate(date: Date) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(date);
}

export function postCategorySlug(post: BlogEntry) {
  return blogCategorySlug(post.data.category);
}

export function blogTagSlug(tag: string) {
  return slugify(tag);
}

export function allBlogTags(posts: BlogEntry[]) {
  const tags = new Map<string, string>();
  posts.forEach((post) => post.data.tags.forEach((tag) => tags.set(blogTagSlug(tag), tag)));
  return [...tags].map(([slug, name]) => ({ slug, name })).sort((a, b) => a.name.localeCompare(b.name));
}
