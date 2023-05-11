import { defineCollection, z } from "astro:content";

export const collections = {
  work: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      order: z.number(),
      tags: z.array(z.string()),
      img: z.string(),
      img_alt: z.string().optional(),
      role: z.string(),
      time: z.string(),
      tech_stack: z.string(),
    }),
  }),
};
