import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { tagIds } from './data/tags';

const maturity = z.enum(['seed', 'developing', 'stable']);
const projectId = z.enum(['tonesu', 'tokimu', 'tosumu', 'weaver', 'anvil']);
const tagId = z.enum(tagIds);

const sharedRelationships = {
  tags: z.array(tagId).default([]),
  projects: z.array(projectId).default([]),
  ideas: z.array(z.string()).default([]),
};

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    status: z.string(),
    origin: z.string(),
    repository: z.url().optional(),
    homepage: z.url().optional(),
    themes: z.array(tagId).default([]),
    featured: z.boolean().default(false),
    underConstruction: z.boolean().default(false),
    order: z.number(),
  }),
});

const ideas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/ideas' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: maturity,
    firstPublished: z.coerce.date().optional(),
    lastReviewed: z.coerce.date().optional(),
    underConstruction: z.boolean().default(false),
    ...sharedRelationships,
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    kind: z.enum(['article', 'design-journal', 'research-note', 'note']),
    status: z.enum(['draft', 'published', 'superseded']),
    supersedes: z.string().optional(),
    supersededBy: z.string().optional(),
    featured: z.boolean().default(false),
    underConstruction: z.boolean().default(false),
    ...sharedRelationships,
  }),
});

const atlas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/atlas' }),
  schema: z.object({
    term: z.string(),
    summary: z.string(),
    status: z.enum(['provisional', 'working', 'established']),
    aliases: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    underConstruction: z.boolean().default(false),
    ...sharedRelationships,
  }),
});

export const collections = {
  projects,
  ideas,
  journal,
  atlas,
};
