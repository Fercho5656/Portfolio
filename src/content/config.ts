import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
	schema: ({image}) => z.object({
		inProgress: z.boolean(),
		title: z.string(),
		tags: z.array(z.string()),
		link: z.string(),
		project_link: z.string().optional(),
		img_url: image(),
		img_alt: z.string().optional(),
	}),
});

export const collections = {
	projects: projectsCollection,
};
