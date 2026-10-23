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
        Header: './src/components/Header.astro',
        PageTitle: './src/components/PageTitle.astro',
        Sidebar: './src/components/Sidebar.astro',
        SocialIcons: './src/components/SocialIcons.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      routeMiddleware: './src/routeData.ts',
      head: [
        // Link previews (iMessage, Slack, LinkedIn) use the site's share card;
        // without it they fall back to the favicon, blue on blue.
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://paladinrecruiter.com/assets/paladin-logo-horizontal.png' } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        { tag: 'meta', attrs: { property: 'og:image:alt', content: 'Paladin, Realtime Advisor' } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: 'https://paladinrecruiter.com/assets/paladin-logo-horizontal.png' } },
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
      // Each top-level group is a header tab (src/routeData.ts). Inside a tab,
      // loose pages come first, then groups shown as fixed headings. Icons for
      // tabs and groups: src/navigation.ts.
      sidebar: [
        {
          label: 'Guides',
          items: [
            { slug: 'index', label: 'Quickstart', attrs: { 'data-icon': 'rocket' } },
            'get-started/set-up-your-account',
            'get-started/the-recruiting-workflow',
            {
              label: 'Report feedback',
              link: 'mailto:inquiries@ashfordbriggs.com?subject=Paladin%20docs%20feedback',
              attrs: { 'data-icon': 'message' },
            },
            { label: 'Jobs', items: [{ autogenerate: { directory: 'jobs' } }] },
            { label: 'Candidates', items: [{ autogenerate: { directory: 'candidates' } }] },
            { label: 'Calls', items: [{ autogenerate: { directory: 'calls' } }] },
            { label: 'Reports', items: [{ autogenerate: { directory: 'reports' } }] },
            { label: 'Pipeline', items: [{ autogenerate: { directory: 'pipeline' } }] },
            { label: 'Paladin Dialer', items: [{ autogenerate: { directory: 'dialer' } }] },
          ],
        },
        { label: 'Reference', items: [{ autogenerate: { directory: 'reference' } }] },
      ],
      plugins: [starlightLlmsTxt()],
    }),
  ],
});
