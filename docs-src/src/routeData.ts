import { defineRouteMiddleware, type StarlightRouteData } from '@astrojs/starlight/route-data';

type Entry = StarlightRouteData['sidebar'][number];

const hasCurrent = (e: Entry): boolean =>
  e.type === 'link' ? e.isCurrent : e.entries.some(hasCurrent);
const firstHref = (e: Entry): string | undefined =>
  e.type === 'link' ? e.href : e.entries.map(firstHref).find(Boolean);

// Top-level sidebar groups are header tabs, OpenRouter-style: the header shows
// one tab per group and the sidebar shows only the current tab's entries.
export const onRequest = defineRouteMiddleware((context) => {
  const route = context.locals.starlightRoute;
  const groups = route.sidebar.filter((e) => e.type === 'group');
  const current = groups.find(hasCurrent) ?? groups[0];
  if (!current) return;
  context.locals.tabs = groups.map((g) => ({
    label: g.label,
    href: firstHref(g) ?? '#',
    isCurrent: g === current,
  }));
  route.sidebar = current.entries;
});
