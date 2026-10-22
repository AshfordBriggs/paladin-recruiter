// Paladin Recruiter user docs (FEAT-131). Built into /docs of paladinrecruiter.com.
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';

export default defineConfig({
  site: 'https://paladinrecruiter.com',
  base: '/docs',
  integrations: [
    starlight({
      title: 'Paladin Recruiter Help',
      description: 'How to set up Paladin Recruiter, call candidates, and use the call screen.',
      logo: { src: './src/assets/paladin-icon.png', alt: 'Paladin' },
      favicon: '/favicon.png',
      customCss: ['./src/styles/brand.css'],
      components: {
        Footer: './src/components/Footer.astro',
      },
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        {
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap',
          },
        },
      ],
      sidebar: [
        { label: 'Get started', items: [{ autogenerate: { directory: 'get-started' } }] },
        { label: 'Calls', items: [{ autogenerate: { directory: 'calls' } }] },
        { label: 'Reference', items: [{ autogenerate: { directory: 'reference' } }] },
      ],
      plugins: [starlightLlmsTxt()],
    }),
  ],
});
