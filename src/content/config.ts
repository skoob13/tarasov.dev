import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: () =>
    z.object({
      title: z.string(),
      seoTitle: z.string(),
      summary: z.string(),
      publishedAt: z.date(),
      isPublished: z.boolean(),
    }),
});

export const collections = {
  blog,
};
