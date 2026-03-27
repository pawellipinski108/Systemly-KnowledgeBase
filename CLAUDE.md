# Systemly Knowledge Base

A knowledge base website for Systemly (white-labeled GoHighLevel platform for Arbonne consultants).
Built with Astro Starlight, hosted on Netlify.

## Content Structure

- Articles are Markdown files in `src/content/docs/`
- Categories = folders (e.g., `start-here/`, `tutorials/`)
- Sidebar auto-generates from folder contents
- Article sort order is controlled by `sidebar.order` in frontmatter

## Creating a New Article

1. Create a `.md` file in the appropriate category folder under `src/content/docs/`
2. Use this frontmatter template:

```yaml
---
title: Article Title
description: Brief description for search and SEO.
sidebar:
  order: N  # Controls position in the sidebar within its category
---
```

3. Write content in Markdown below the frontmatter
4. Use "Systemly" branding (never "GoHighLevel" or "GHL" in user-facing content)

## Adding a New Category

1. Create a new folder under `src/content/docs/`
2. Add the folder to the `sidebar` array in `astro.config.mjs`:

```js
{
  label: 'Category Name',
  autogenerate: { directory: 'folder-name' },
},
```

3. Add articles to the new folder

## Moving an Article

Use `git mv` to move the file between category folders. The sidebar updates automatically.

## Publishing Workflow

```
git add <files>
git commit -m "Add/Update: Article Name"
git push
```

Netlify auto-deploys from the `main` branch.

## Development

- `npm run dev` — Start local dev server
- `npm run build` — Build for production
- `npm run preview` — Preview production build locally

## Key Files

- `astro.config.mjs` — Site config, sidebar categories, custom CSS reference
- `src/styles/custom.css` — Brand colors and styling overrides
- `src/content/docs/index.mdx` — Landing page
- `netlify.toml` — Netlify build configuration
