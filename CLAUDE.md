# Systemly Knowledge Base

A knowledge base website for **Systemly** — a white-labeled GoHighLevel (GHL) platform for Arbonne consultants.
Pawel heavily customizes GHL's UI (hides elements, changes menus, renames things), so GHL's own docs don't apply.
This knowledge base provides Systemly-specific help articles for users.

**Live site:** Deployed on Netlify, auto-deploys from `main` branch on GitHub.
**GitHub:** https://github.com/pawellipinski108/Systemly-KnowledgeBase
**Tech stack:** Custom Astro site + Pagefind search + Netlify + GitHub

## Design

The site follows a HeroicKB-style layout (NOT Starlight docs layout):
- **Homepage:** Blue hero banner with "How can we help?" + search bar, 2-column category grid, "Popular Articles" sidebar
- **Category page:** Blue breadcrumb/search bar, category title + description, article list, "Knowledge Base Categories" sidebar
- **Article page:** Blue breadcrumb/search bar, article content, collapsible TOC sidebar (H2/H3 with scroll-spy), related articles
- **Light/dark mode** toggle in header
- All sections use a shared `.container` class for consistent widths

## Content Structure

```
src/content/articles/
├── start-here/          # Category: "Start Here" (onboarding)
│   ├── welcome.md
│   └── setting-up-your-account.md
└── tutorials/           # Category: "Tutorials"
    └── your-first-funnel.md
```

- Articles are Markdown files in `src/content/articles/<category-slug>/`
- Categories are defined in `src/data/categories.ts`
- Navigation auto-generates from the categories list and article frontmatter
- Pagefind indexes all articles at build time for full-text search

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
4. **IMPORTANT:** Use "Systemly" branding everywhere — never "GoHighLevel" or "GHL" in user-facing content
5. Use H2 (`##`) for main sections and H3 (`###`) for subsections — these appear in the TOC sidebar

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

Netlify auto-deploys from the `main` branch (~60 seconds).

## Article Authoring Workflow (AI-driven)

The intended workflow for creating articles:
1. User provides: a GHL knowledge base URL + instructions + optional image URLs
2. Claude fetches/reads the source material
3. Claude rewrites the content for Systemly branding (rename features, update URLs, adapt screenshots)
4. Claude creates the `.md` file in the correct category folder
5. Claude runs git add → git commit → git push
6. Netlify auto-deploys, article is live and searchable

## Development

- `npm run dev` — Start local dev server (search won't work in dev, only after build)
- `npm run build` — Build for production (Astro build + Pagefind indexing)
- `npm run preview` — Preview production build locally

## Key Files

- `astro.config.mjs` — Astro site config (just site URL)
- `src/data/categories.ts` — Category definitions (slug, title, description, icon, order)
- `src/content.config.ts` — Astro content collection schema (title, description, category, order, draft)
- `src/content/articles/` — All article content (Markdown files)
- `src/layouts/BaseLayout.astro` — Base HTML layout (header, footer, theme toggle, global `.container` class)
- `src/components/SearchBar.astro` — Pagefind search with live results dropdown
- `src/components/Sidebar.astro` — "Knowledge Base Categories" + "Need Support?" (used on category & article pages)
- `src/components/HomeSidebar.astro` — "Popular Articles" + "Need Support?" (used on homepage only)
- `src/pages/index.astro` — Homepage (hero search + category grid)
- `src/pages/[category]/index.astro` — Category listing page (article list, 50/page pagination)
- `src/pages/[category]/[slug].astro` — Article page (content, collapsible TOC with scroll-spy, related articles)
- `netlify.toml` — Netlify build config (Node 22, build command, publish dir)

## Current Status

- Site structure and design: COMPLETE
- Current articles: 3 placeholder articles (to be replaced with real content)
- Next phase: Creating real articles based on GHL knowledge base content
