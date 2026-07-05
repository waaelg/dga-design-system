# Changelog

All notable changes to **@waaelg/dga-design-system**.

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
