import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        worksImage1: z.object({
            url: z.string(),
            alt: z.string()
        }).optional(), // Marca todo el objeto como opcional
        worksImage2: z.object({
            url: z.string(),
            alt: z.string()
        }).optional(), // Marca todo el objeto como opcional
        platform: z.string(),
        stack: z.string(),
        website: z.string().optional(),
        github: z.string(),
    })
});

export const collections = {
    projects: projectsCollection,
};
