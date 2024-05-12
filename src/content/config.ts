import { z, defineCollection } from 'astro:content';

const themeCollection = defineCollection({
  type: 'content', 
  schema: ({ image }) => z.object({
    title: z.string(),
    sortTitle: z.string(),
    desc: z.string(),
    image: image(),
    thumbnail: image(),
    ogImage: z.string(),
    price: z.string(),
    nPrice: z.string(),
    active: z.string(),
    urlPreview: z.string(),
    payLink: z.string(),
    pubDate: z.date(),
    feature: z.array(z.string())
  }),
});

export const collections = {
  'theme': themeCollection,
};