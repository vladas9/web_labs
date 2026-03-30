import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const site = defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/site' }),
    schema: z.object({
        logo_text: z.string(),
        site_tagline: z.string(),
        hero_title: z.string(),
        hero_subtitle: z.string(),
        hero_primary_btn_text: z.string(),
        hero_primary_btn_href: z.string(),
        hero_secondary_btn_text: z.string(),
        hero_secondary_btn_href: z.string(),
        header_cta_text: z.string(),
        services_title: z.string(),
        services_subtitle: z.string(),
        builds_title: z.string(),
        builds_subtitle: z.string(),
        about_title: z.string(),
        about_subtitle: z.string(),
        stats_title: z.string(),
        stats_cta_text: z.string(),
        stats_cta_href: z.string(),
        stats: z.array(z.object({ number: z.string(), label: z.string() })),
        contact_title: z.string(),
        contact_subtitle: z.string(),
        footer_email: z.string(),
        footer_phone: z.string(),
        footer_hours: z.string(),
        footer_copyright: z.string(),
    }),
});

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

export const collections = { services, builds, about, site };
