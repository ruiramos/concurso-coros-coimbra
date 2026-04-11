# CLAUDE.md — Concurso de Coros de Coimbra

## What is this?

A Gatsby 5 static site for an international choir competition held in Coimbra, Portugal. Each edition (2017, 2022, 2024, 2026) lives as a set of pages under `src/pages/<year>/`, with the current edition at `src/pages/index.js`. The site is primarily in Portuguese.

## Tech Stack

- **Framework:** Gatsby 5.13.3, React 18.2
- **Styling:** styled-components 5 + Tailwind 3.4 + twin.macro (all three coexist)
- **CSS Pipeline:** PostCSS → Tailwind → postcss-preset-env (nesting + grid)
- **Content:** Markdown files (choir bios) via gatsby-transformer-remark; most page data is hardcoded in JSX
- **Images:** gatsby-plugin-image/Sharp for optimized images; static images in `/static/` for choir photos used in modals
- **Package manager:** npm
- **Node version:** check `.nvmrc`

## Project Structure

```
src/
├── components/
│   ├── layout.js          # Master layout wrapper (accepts lang, edition props)
│   ├── menu.js            # Nav header, edition-aware, has "previous editions" dropdown
│   ├── footer.js          # Edition-specific sponsors/supporters
│   ├── seo.js             # react-helmet SEO component
│   ├── coro.js            # Choir card (grid item with image, name, placement)
│   ├── biomodal.js        # Portal-based modal for choir bios (YouTube embed support)
│   ├── resumo.js          # Expandable "read more" text block
│   ├── styled.js          # Shared styled-components (Section, MainHeading, SubHeading, Sep, ProgramaTableNew)
│   ├── constants.js       # LATEST_EDITION ("2026"), MENU_DATA per edition
│   └── layout.css         # Tailwind directives + global typography/button styles
├── content/
│   └── coros/             # Markdown choir bios (frontmatter: id, video_id)
├── images/                # Source images (logos, maestros, sponsors) — processed by Sharp
└── pages/
    ├── index.js           # Current edition (2026) landing page
    ├── 404.js
    ├── 2024/              # 8 pages: index, atelier, concurso, coros, en, juri, localizacao, regulamento
    ├── 2022/              # 6 pages: index, coros, juri, localizacao, programa, regulamento
    └── 2017/              # 1 page: index (results only)
```

```
static/                    # Copied as-is to /public at build time
├── images/coros/          # Choir photos (referenced as /images/coros/<file> in HTML)
├── *.pdf                  # Downloadable PDFs (regulations, sheet music)
└── ...                    # Legacy assets from previous editions
```

## Key Patterns

### Edition system
- `LATEST_EDITION` in `constants.js` controls which edition is "current"
- Every page passes `edition` prop to `<Layout>` which conditionally renders nav/footer
- Old editions show a "back to current edition" banner
- Menu items per edition are defined in `MENU_DATA` (constants.js)

### Page template
```jsx
<Layout lang="pt" edition="2024">
  <SEO title="Page Title" />
  {/* page content */}
</Layout>
```

### Styling convention
- **twin.macro** for simple utility components: `` const Box = tw.div`mx-auto mt-4 px-8` ``
- **styled-components** for complex/dynamic styles with props
- **Tailwind classes** used directly in JSX className where convenient
- **layout.css** for global base styles (headings, links, buttons)
- Primary color: `rgb(150, 216, 228)` / `#96D8E4` (cyan), defined in `tailwind.config.js`

### Choir bio modal system
- Choir cards link via URL hash (`#choir-id`)
- `useEffect` watches `window.location.hash` to open/close modal
- Modal renders via `ReactDOM.createPortal` to body
- Choir markdown bios queried via `allMarkdownRemark` GraphQL

### Image handling
- **Optimized (Gatsby Image):** logos, jury photos, sponsors — queried via `useStaticQuery` + `graphql` with `childImageSharp.gatsbyImageData`
- **Static (unoptimized):** choir photos in modals — served from `/static/images/coros/` as plain `<img>` tags

## Commands

```sh
npm run develop    # Dev server at localhost:8000
npm run build      # Production build → /public
npm run serve      # Serve production build locally
npm run format     # Prettier on src/**/*.{js,jsx}
```

## GraphQL

Gatsby's GraphQL layer is used for:
- Site metadata (`site.siteMetadata`)
- Image optimization (`file(relativePath: ...) { childImageSharp { gatsbyImageData } }`)
- Markdown content (`allMarkdownRemark { nodes { html, frontmatter { id, video_id } } }`)

Explore queries at `localhost:8000/___graphql` during development.

## Current Edition (2026) vs Past Editions (2024, 2022, 2017)

The site works as a living archive — the current edition lives at `/` while past editions are preserved under `/YYYY/`.

### Current edition (2026): `src/pages/index.js`
- Minimal "save the date" landing page — just a date heading and subtitle
- No `edition` prop passed to `<Layout>`, so it defaults to `LATEST_EDITION` ("2026")
- Menu has only one item ("Apresentação") plus links to previous editions
- Footer renders nothing for edition "2026" (no sponsors yet)
- The header logo is `iv-concurso-coros-coimbra-logo.jpg` (selected by the ternary in `layout.js`)
- As the event approaches, pages like coros, juri, regulamento, etc. will be added under `src/pages/` (at root level, not in a `2026/` subfolder) — the current edition's pages live at top-level routes (`/coros`, `/juri`, etc.)

### Past editions (e.g. 2024): `src/pages/2024/*.js`
- Full set of pages: index, atelier, concurso, coros, juri, localizacao, regulamento, en
- Every page passes `edition="2024"` to `<Layout>`, which triggers:
  - **Different logo** — `layout.js` picks the edition-specific logo via a ternary chain (`logo24`, `logo22`, `logo17`)
  - **"Voltar" banner** — a cyan banner at the top links back to the current edition's site
  - **Edition-specific menu** — `MENU_DATA["2024"]` defines the full nav (Apresentação, Local, Atelier, Concurso, Os Coros, Júri, Regulamento)
  - **Edition-specific footer** — `footer.js` has `{edition === "2024" && ...}` blocks with that year's sponsors/supporters
- Routes are all prefixed: `/2024/`, `/2024/coros`, `/2024/juri`, etc.

### How edition switching works
- `constants.js` defines `LATEST_EDITION` and `MENU_DATA` (nav items per edition)
- `menu.js`: if on the latest edition, shows "Edições anteriores: 2017 | 2022 | 2024" links; if on an old edition, shows "Voltar ao site do IV Concurso" instead
- `layout.js`: shows the "Voltar" banner when `edition !== LATEST_EDITION`; selects the edition-appropriate header logo
- `footer.js`: conditionally renders sponsor blocks with `{edition === "YYYY" && ...}` checks

### Lifecycle of an edition
1. **Pre-event** — current edition starts as a save-the-date at `/` (like 2026 now)
2. **Build-up** — pages are added at root level (`/coros`, `/juri`, etc.) as content becomes available
3. **Post-event** — when a new edition begins, the old pages are moved into `src/pages/YYYY/`, all internal links updated to `/YYYY/` prefixes, a new logo added, and `LATEST_EDITION` bumped. The previous edition's root-level pages are replaced by the new edition's content.

## Adding a New Edition

1. Update `LATEST_EDITION` in `src/components/constants.js`
2. Add menu entries in `MENU_DATA` for the new edition
3. Create pages under `src/pages/<year>/`
4. Update `gatsby-config.js` siteMetadata (title, description)
5. Add edition-specific sponsor images to `src/images/`
6. Add choir photos to `static/images/coros/`
7. Add choir bio markdown files to `src/content/coros/`
8. Update footer.js with new sponsor logos/links

## Notes

- No tests exist (placeholder script only)
- No CI/CD config files in the repo
- i18n is minimal: Layout accepts `lang` prop, one English page exists at `/2024/en`, language switcher in menu is disabled
- `gatsby-node.js` only adds a webpack alias (`path-browserify`); no dynamic page creation via `createPages`
- All pages are statically generated at build time
