import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/services' }),
    schema: z.object({
        icon: z.string(),
        title: z.string(),
        description: z.string(),
        order: z.number(),
    }),
});

const builds = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/builds' }),
    schema: z.object({
        label: z.string(),
        title: z.string(),
        specs: z.array(z.string()),
        price: z.string(),
        order: z.number(),
    }),
});

const about = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/about' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        order: z.number(),
    }),
});

export const collections = { services, builds, about };
