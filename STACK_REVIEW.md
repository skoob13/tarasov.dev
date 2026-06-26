# Stack Review — tarasov.dev

_Reviewed 2026-06-26 against `main` (`c36bdde`)._

A personal site + blog. This is a review of the technology choices, configuration,
and the code as it stands. It does **not** change any application behavior — it
documents the stack and flags concrete issues worth fixing.

## 1. Stack overview

| Layer | Choice | Notes |
| --- | --- | --- |
| Framework | [Astro](https://astro.build) `^5.1.1` | Static output, content collections, islands. Solid fit for a content site. |
| Styling | Tailwind CSS `^3.4.17` via `@astrojs/tailwind`, `@tailwindcss/typography` | `darkMode: 'class'`, custom `prose`/`prose-dark` typography theme. |
| Content | `@astrojs/mdx`, Astro content collections | Zod-validated frontmatter schema in `src/content/config.ts`. |
| Markdown pipeline | `remark-gfm`, `rehype-slug`, `rehype-code-titles`, `rehype-autolink-headings`, Shiki (`dracula-soft`) | Reading time computed with `reading-time`. |
| Language | TypeScript `^5.7.2`, `astro/tsconfigs/strictest` | Strictest preset — good. |
| Tooling | ESLint 9 (flat config), Prettier 3 + Astro/Tailwind plugins | `simple-import-sort`, `jsx-a11y`. |
| Package manager | Bun (`bun.lockb`) | |
| Hosting | Cloudflare Pages + Cloudflare Web Analytics beacon | Beacon injected only in `production` via `requestIdleCallback`. |
| SEO | `@astrojs/sitemap`, canonical + OpenGraph/Twitter meta, `robots.txt` | |

**Overall:** a clean, conventional, well-chosen Astro stack for a personal blog.
Strictest TS, sorted imports, formatting, and a11y linting are all in place. The
dependency set is current and minimal. The issues below are small and localized —
nothing structural.

## 2. Bugs (functional defects)

### 2.1 Invalid SVG attributes on the theme toggle icons — `src/layouts/main-layout.astro`
The sun/moon icons use `stroke-line-cap` and `stroke-line-join` (lines ~118–133).
These are **not valid SVG attribute names** — the correct attributes are
`stroke-linecap` and `stroke-linejoin`. As written, the line caps/joins are not
applied (the strokes fall back to the default `butt`/`miter`), and they will be
dropped/flagged by the HTML parser. Fix:

```diff
-                stroke-line-cap="round"
-                stroke-line-join="round"
+                stroke-linecap="round"
+                stroke-linejoin="round"
```

(Both occurrences, both icons.)

### 2.2 Unitless CSS transition duration — `src/styles/globals.css:30`
```css
transition: background-color 0.1 ease-in-out;
```
`0.1` has no time unit, so the entire `transition` declaration is invalid and is
discarded by the browser — the sticky-nav background change is not actually
animated. Should be `0.1s` (or `100ms`):

```diff
-  transition: background-color 0.1 ease-in-out;
+  transition: background-color 0.1s ease-in-out;
```

### 2.3 `article:published_time` is not a machine-readable date — `src/pages/blog/[slug].astro`
```astro
<meta slot="head" property="article:published_time" content={formatPublishedAt(entry.data.publishedAt)} />
```
`formatPublishedAt` returns a human string like `26 June` / `26 June 2024`. The
OpenGraph `article:published_time` property expects an ISO‑8601 timestamp.
Crawlers can't parse the current value. Use the raw date:

```astro
content={entry.data.publishedAt.toISOString()}
```

## 3. Dead / leftover code

### 3.1 `#__next` block in `src/styles/globals.css:22`
This is a Next.js root-element selector. The site is Astro and has no `#__next`
element, so the rule never matches. Dead CSS — safe to delete.

### 3.2 `contentlayer` pushed into ESLint import groups — `eslint.config.mjs:11`
```js
folders.push('contentlayer');
```
Contentlayer is not a dependency and there is no `contentlayer` directory. Leftover
from a previous setup; the import-sort group it creates is never used. Safe to remove.

### 3.3 Unused `Props` interface — `src/pages/index.astro:8`
`index.astro` declares an `interface Props { posts: ... }` but the page is a route
that fetches its own data via `getCollection` and never receives those props. The
interface (and its shape, which doesn't match what's rendered) is dead. Remove it.

## 4. Minor / polish

- **README broken link.** The "Next.js Image Optimization" entry points to
  `https://tarasov.dev/how-to-use-nextjs-image-optimization-in-react-native`
  (missing the `/blog/` segment that every other link and the actual route use).
- **`robots.txt` `Host` directive** is a non-standard, Yandex-only directive and is
  ignored by Google/Bing. Harmless, but not doing anything for most crawlers.
- **No RSS/Atom feed.** A blog is a natural fit for `@astrojs/rss`; worth adding for
  readers and as a complement to the existing sitemap.
- **`tsconfig` path mapping `"*": ["src/*"]`** makes bare imports (`layouts/...`,
  `components/...`) resolve into `src`. It works, but bare specifiers can collide
  with `node_modules` package names; a prefixed alias (e.g. `@/*` or `~/*`) is the
  more common, collision-safe convention.
- **Content typos** in `src/components/timeline.astro` / `src/pages/about.astro`
  ("transpilled", "engeneering", "I did not found", "a exceptional"). Cosmetic.

## 5. Suggested fix order

1. **2.1, 2.2, 2.3** — small, real defects with user-visible or SEO impact.
2. **3.1, 3.2, 3.3** — dead-code cleanup; zero risk.
3. **4** — polish (README link, RSS feed) as time allows.
