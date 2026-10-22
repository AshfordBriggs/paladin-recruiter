// Icons for the header tabs and sidebar group headings, keyed by the label in
// astro.config.mjs. Pages set their own with `sidebar.attrs.data-icon`. Every
// name here needs a matching `[data-icon='…']` rule in src/styles/brand.css.
export const groupIcons: Record<string, string> = {
  Guides: 'file',
  Reference: 'book',
  Jobs: 'briefcase',
  Candidates: 'users',
  Calls: 'phone',
  Reports: 'file-text',
  Pipeline: 'kanban',
  'Paladin Dialer': 'smartphone',
  API: 'code',
  Endpoints: 'terminal',
};

export type Tab = { label: string; href: string; isCurrent: boolean };
