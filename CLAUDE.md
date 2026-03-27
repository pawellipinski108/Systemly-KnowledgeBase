# Systemly Knowledge Base

A knowledge base website for Systemly (white-labeled GoHighLevel platform for Arbonne consultants).
Built with custom Astro + Pagefind search, hosted on Netlify.

## Content Structure

- Articles are Markdown files in `src/content/articles/<category-slug>/`
- Categories are defined in `src/data/categories.ts`
- Navigation auto-generates from the categories list and article frontmatter
- Pagefind indexes all articles at build time for search

## Creating a New Article

1. Create a `.md` file in the appropriate category folder under `src/content/articles/`
2. Use this frontmatter template:

```yaml
---
title: Article Title
description: Brief description for search and SEO.
category: category-slug
order: 1
---
```

3. Write content in Markdown below the frontmatter
4. Use "Systemly" branding (never "GoHighLevel" or "GHL" in user-facing content)

## Adding a New Category

1. Create a new folder under `src/content/articles/`
2. Add an entry to the `categories` array in `src/data/categories.ts`:

```ts
{
  slug: 'folder-name',
  title: 'Category Name',
  description: 'Description shown on homepage and category page.',
  icon: '📋',
  order: 3,
},
```

3. Add articles to the new folder

## Moving an Article

1. Move the file to a different category folder
2. Update the `category` field in the article's frontmatter to match the new folder
3. Commit and push

## Publishing Workflow

```
git add <files>
git commit -m "Add/Update: Article Name"
git push
```

Netlify auto-deploys from the `main` branch.

## Development

- `npm run dev` — Start local dev server (search won't work in dev, only after build)
- `npm run build` — Build for production (includes Pagefind indexing)
- `npm run preview` — Preview production build locally

## Key Files

- `astro.config.mjs` — Astro site config
- `src/data/categories.ts` — Category definitions (slug, title, description, icon, order)
- `src/content/articles/` — All article content (Markdown)
- `src/layouts/BaseLayout.astro` — Base HTML layout (header, footer, theme toggle)
- `src/components/SearchBar.astro` — Pagefind search component
- `src/components/Sidebar.astro` — Categories list + "Need Support?" box
- `src/pages/index.astro` — Homepage (hero + category grid)
- `src/pages/[category].astro` — Category listing page
- `src/pages/[category]/[slug].astro` — Article page
- `netlify.toml` — Netlify build config (Node 22)
