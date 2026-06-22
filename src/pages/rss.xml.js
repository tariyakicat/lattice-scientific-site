import rss from "@astrojs/rss";
import { getAllBlogPosts, blogUrl } from "@/lib/blog";

export async function GET(context) {
  const posts = await getAllBlogPosts();
  return rss({
    title: "Lattice Visual Blog",
    description: "Scientific illustration and research communication guidance from Lattice Visual.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.datePublished,
      link: blogUrl(post),
    })),
  });
}
