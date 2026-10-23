import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Media fields are optional paths under /public (e.g. "/media/work/rumah-kemang/cover.jpg").
// Leave them empty to render a labelled placeholder.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Residential', 'Hospitality', 'Workplace', 'Retail']),
    location: z.string(),
    year: z.number(),
    area: z.string().optional(),
    scope: z.array(z.string()).default([]),
    summary: z.string(),
    order: z.number(),
    format: z.enum(['landscape', 'portrait']).default('landscape'),
    cover: z.string().optional(),
    gallery: z.array(z.string().optional()).default([undefined, undefined, undefined, undefined]),
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    cover: z.string().optional(),
  }),
});

export const collections = { work, journal };
