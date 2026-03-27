import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		category: z.string(),
		order: z.number().default(100),
		draft: z.boolean().default(false),
	}),
});

export const collections = { articles };
