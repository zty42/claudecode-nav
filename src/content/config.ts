import { defineCollection, z } from 'astro:content';

const sitesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        category: z.string(),
        affLink: z.string().url(),
        description: z.string(),
        logo: z.string().optional(),
        featured: z.boolean().default(false),
        order: z.number().default(100),
    }),
});

export const collections = {
    sites: sitesCollection,
};
