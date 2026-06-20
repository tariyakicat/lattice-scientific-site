import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

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

export const collections = { resources };
