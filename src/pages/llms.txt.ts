import { getAllBlogPosts, blogUrl } from "@/lib/blog";

export async function GET({ site }: { site: URL }) {
  const posts = await getAllBlogPosts();
  const lines = [
    "# Lattice Visual",
    "",
    "> Scientific illustration and visual communication for research.",
    "",
    `- Home: ${new URL("/", site).href}`,
    `- Portfolio: ${new URL("/portfolio/", site).href}`,
    `- Resources: ${new URL("/resources/", site).href}`,
    `- Blog: ${new URL("/blog/", site).href}`,
    "",
    "## Blog articles",
    ...posts.map((post) => `- ${post.data.title}: ${new URL(blogUrl(post), site).href}`),
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
