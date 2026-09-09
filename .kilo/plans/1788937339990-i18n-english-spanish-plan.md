# Plan: English (default) + Spanish i18n

## Goal
Convert the VitePress site from single-locale Spanish to bilingual: **English (default/root)** with a **Spanish** locale accessible via the built-in VitePress language switcher.

## Approach
Use VitePress 1.6.4's built-in `locales` configuration. English will be the `root` locale (no URL prefix), Spanish will be the `es` locale (`/es/` prefix). All content will be machine-translated from the existing Spanish files.

## Affected boundaries
- `config.mjs` — `locales`, `title`, `description`, `themeConfig.nav`, `themeConfig.sidebar`
- `index.md` — English root page
- `content/*.md` (8 files) — English translations
- `solved-exercises/index.md` — English translation
- `.vitepress/theme/CustomLayout.vue` — locale-aware title
- Directory structure — Spanish originals moved to `es/` subdirectories

## Data flow
1. VitePress resolves URLs based on locale: root locale → `/bash-docs/...`, `es` locale → `/bash-docs/es/...`
2. `config.mjs` defines `locales: { root: {...}, es: {...} }` with per-locale `themeConfig`
3. VitePress auto-renders a language switcher dropdown in the navbar when `locales` has more than one entry
4. `CustomLayout.vue` uses `useData()` to detect current locale and render the appropriate nav title

## URL structure (with `base: '/bash-docs/'`)
| Language | URL pattern | Source files |
|----------|-------------|--------------|
| English (root) | `/bash-docs/`, `/bash-docs/content/000-intro` | `index.md`, `content/*.md` |
| Spanish | `/bash-docs/es/`, `/bash-docs/es/content/000-intro` | `es/index.md`, `es/content/*.md` |

## Ordered tasks

1. **Move existing Spanish content to `es/` subdirectories**
   - Move `index.md` → `es/index.md`
   - Move `content/*.md` → `es/content/*.md`
   - Move `solved-exercises/index.md` → `es/solved-exercises/index.md`

2. **Create English translations of all content files**
   - Create `index.md` (English landing page)
   - Create `content/000-intro.md` through `content/600-functions.md` (8 files)
   - Create `solved-exercises/index.md`
   - Bash code blocks remain identical (code is universal); translate only prose, headings, comments, and inline text
   - Machine-translate all prose from the Spanish originals now in `es/`

3. **Update `.vitepress/config.mjs`**
   - Add `locales` with `root` (English) and `es` (Español)
   - Set `lang` for each locale (`en`, `es`)
   - Provide per-locale `themeConfig`:
     - `root.themeConfig.nav` — English nav text, links without `/es/` prefix
     - `es.themeConfig.nav` — Spanish nav text, links with `/es/` prefix
     - `root.themeConfig.sidebar` — English sidebar
     - `es.themeConfig.sidebar` — Spanish sidebar
   - Set `title` and `description` per locale (or keep a generic title and override in each locale)

4. **Localize `.vitepress/theme/CustomLayout.vue`**
   - Use `useData()` to get current locale
   - Render "BASH Fundamentals" for English, "BASH Fundamentos" for Spanish
   - Update `alt` attributes on logo images to match locale

5. **Validate**
   - Run `yarn docs:dev` and verify:
     - `/bash-docs/` serves English content
     - `/bash-docs/es/` serves Spanish content
     - Language switcher dropdown appears in navbar
     - Switching locales updates all nav/sidebar text and page content
     - All internal links resolve correctly in both locales

## Risks / caveats
- Machine-translated content may require manual review for technical accuracy
- The `solved-exercises/index.md` is 675 lines; ensure English version is complete
- `base: '/bash-docs/'` is preserved; ensure locale-prefixed paths (`/es/`) work correctly with the base path
- External links (GNU Bash manual, BASH Home) are the same in both locales and should NOT be prefixed with `/es/`

## Open questions
- None. Proceeding with machine translation of all content files.
