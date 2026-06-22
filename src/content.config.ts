import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { blogCategoryNames } from "@/lib/blog-categories";
import { portfolioCategoryNames } from "@/lib/portfolio-categories";

const authors = defineCollection({
  loader: glob({ base: "./src/content/authors", pattern: "**/*.{md,mdx,json,yaml,yml}" }),
  schema: ({ image }) => z.object({
    name: z.string(),
    role: z.string(),
    credentials: z.string().default(""),
    bio: z.string(),
    avatar: image(),
    links: z.object({
      website: z.url().optional(),
      linkedin: z.url().optional(),
      orcid: z.url().optional(),
    }).default({}),
  }),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().max(155),
    tldr: z.string().refine((value) => {
      const words = value.trim().split(/\s+/).filter(Boolean).length;
      return words >= 40 && words <= 60;
    }, "TL;DR must contain 40–60 words."),
    category: z.enum(blogCategoryNames),
    tags: z.array(z.string()).min(1),
    author: reference("authors"),
    datePublished: z.coerce.date(),
    dateModified: z.coerce.date(),
    heroImage: image(),
    ogImage: image().optional(),
    faq: z.array(z.object({ question: z.string(), answer: z.string() })).default([]),
    featured: z.boolean().default(false),
    draftFinal: z.object({
      draftImage: image(),
      finalImage: image(),
      caption: z.string(),
    }).optional(),
    relatedSlugs: z.array(z.string()).optional().default([]),
  }),
});

const resources = defineCollection({
  loader: glob({ base: "./src/content/resources", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(["Templates", "Asset Library"]),
      subtype: z.string(),
      fileType: z.enum(["PPTX", "AI", "SVG", "PNG", "ZIP"]),
      isPremium: z.boolean(),
      price: z.number().nonnegative().nullable(),
      currency: z.string().default("usd"),
      stripePriceId: z.string().nullable(),
      thumb: image(),
      previewImages: z.array(image()).min(1),
      formats: z.array(z.string()).min(1),
      fileSize: z.string(),
      license: z.string(),
      compatibility: z.string(),
      summary: z.string(),
      included: z.array(z.string()).min(1),
      downloadUrl: z.string().nullable().optional(),
      featured: z.boolean().default(false),
      date: z.coerce.date(),
    })
    .superRefine((resource, context) => {
      if (resource.isPremium && resource.price === null) {
        context.addIssue({ code: "custom", path: ["price"], message: "Premium resources require a price." });
      }
      if (!resource.isPremium && !resource.downloadUrl) {
        context.addIssue({ code: "custom", path: ["downloadUrl"], message: "Free resources require a public download URL." });
      }
    }),
});

const portfolio = defineCollection({
  loader: glob({ base: "./src/content/portfolio", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      category: z.enum(portfolioCategoryNames),
      field: z.string(),
      finalImage: image(),
      draftImage: image().nullable().default(null),
      gallery: z.array(image()).optional().default([]),
      summary: z.string(),
      tools: z.array(z.string()).optional().default([]),
      featured: z.boolean().default(false),
      date: z.coerce.date(),
      displayPermission: z.boolean().default(true),
      client: z.string().nullable().default(null),
    }),
});

export const collections = { authors, blog, resources, portfolio };
