# Changelog

All notable changes to **@waaelg/dga-design-system**.

---

## [0.5.4] — 2026-09-01

### Fixed
- `<dga-accordion-item>` lost its body content when the element was upgraded
  while already in the DOM with attributes set (the common case: markup in
  the HTML, script loaded afterwards). `attributeChangedCallback` could run
  before `connectedCallback` had captured the slotted content, so an early
  render overwrote the answer with an empty body. The item now captures its
  content safely and does not render until it has.

---

## [0.5.3] — 2026-09-01

### Added
- Effect utilities: `.dga-shadow-{none|xs|sm|md|lg|xl|2xl|3xl}` (elevation
  scale) and `.dga-backdrop-blur-{sm|md|lg|xl}`. The scale was defined but
  previously not emitted as classes.

### Changed
- Foundations aligned to the DGA Figma spec values:
  - Display `2xl/xl/lg/md` now carry `-2%` tracking (`letter-spacing: -0.02em`).
  - `Text 2xs` is `12px / 18px`.
  - `Info 50` is `#ECFDF3`.

---

## [0.5.2] — 2026-09-01

### Changed
- Docs only: added a CDN (jsDelivr/unpkg) usage section and restructured the
  "Usage by project type" guidance around a single web-components-first setup.
  Published `dist/` output is unchanged from 0.5.1.

---

## [0.5.1] — 2026-08-30

### Changed
- Replaced the deprecated Sass `if()` function with `@if`/`@else` across the
  utility generators. Generated CSS is byte-for-byte identical.
- Bumped transitive dev dependencies flagged by `npm audit` (`nanoid`,
  `postcss`) to patched versions. Published `dist/` output is unchanged.

---

## [0.5.0] — 2026-07-22

### Added
- `<dga-verify-bar>` now supports `lang="en"` for a full English/LTR rendering
  (banner copy, CTA, both info cards, registration line, image `alt` text).
  Defaults to Arabic/RTL (`lang="ar"` or omitted) — fully backward compatible.
  The component now sets its own `dir` attribute directly, so it no longer
  depends on an ancestor element to provide RTL/LTR context.

### Fixed
- The toggle button's chevron icon (`#dga-verifyBtn`) was hardcoded to the
  physical left (`padding-left`, `background-position: 0`), which was wrong
  for a component that's meant to flip with direction. Now trails the label
  correctly in both directions (left in RTL, right in LTR) via
  `[dir="rtl"]`/`[dir="ltr"]` on `#dga-verify-bar`.
- `.dga-table th`/`td` and `label.dga-label` had no explicit `color`, unlike
  every other component with text (alert, card, link, tag, breadcrumb) —
  harmless as long as an ancestor happened to provide a readable inherited
  color, but broke (invisible text) in any context where it didn't, such as
  a dark-themed page. Added `color: $dga-text-primary` to both, matching the
  pattern already used elsewhere.

---

## [0.4.9] — 2026-07-21

### Fixed
- `.dga-acc-header` (accordion), `.dga-navbar-toggler` (navbar), and `.dga-alert-close`
  didn't declare `font-family`, so they fell back to the browser's native `<button>`
  UA default (Arial) instead of inheriting the page's IBM Plex Sans Arabic — the only
  interactive elements in the package with this gap (`.dga-btn`, `.dga-input`,
  `.dga-select`, `.dga-textarea` were already correct). Added `font-family: inherit`
  to all three.

---

## [0.4.0] — 2026-06-29

### Added
- Web components: `<dga-alert>`, `<dga-accordion>`, `<dga-code-snippet>`, `<dga-pie-chart>`
- [Web Components guide](./getting-started/web-components.md)
- Full documentation under `docs/`:
  - Getting started (installation, JS API, RTL, web components)
  - Foundations (`colors`, `grid`, `width-height`, `radius`, typography, spacing)
  - All 15 component docs

### Changed
- Legacy JS classes share utilities with web components (`src/scripts/shared/`)
- Foundation docs moved to `docs/foundations/` with npm quick-start sections
- Alert, accordion, code snippet, and chart docs: legacy + web component options
- JavaScript API and README: web component registration and usage

---

## [0.3.9]

### Added
- Height utilities (`dga-h-*`, `dga-max-h-*`, `dga-min-h-*`)
- Flex direction aliases: `dga-flex-column`, `dga-flex-column-reverse`
- Avatar component in build (`components/avatar`)
- Initial documentation under `docs/`

### Changed
- Grid documentation: width/height section, justify-content table

---

## [0.3.8]

- Published npm package with compiled `dist/`
- Grid, color, radius utilities
- Components: button, alert, accordion, navbar, card, forms, table, verify bar, code snippet, chart
- JavaScript exports: `DGAAccordion`, `DGAAlert`, `DGAChart`, `DGACodeSnippet`, `DGAMenuDropDown`, `DGAVerifyBar`
- `<dga-verify-bar>` web component

---

## Versioning

This project uses [Semantic Versioning](https://semver.org/):

- **Patch** — bug fixes, doc updates, new utility classes
- **Minor** — new components or features (backward compatible)
- **Major** — breaking class renames or API changes
