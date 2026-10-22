import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

// Extra front matter every task page carries (see TEMPLATE.md).
export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        app_route: z.string().optional(),
        features: z.array(z.string()).optional(),
        verified: z.coerce.date().optional(),
      }),
    }),
  }),
};
