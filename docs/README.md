# DGA Design System — Documentation

Documentation for **@waaelg/dga-design-system**: Saudi DGA design system utilities, components, and optional JavaScript.

**Package:** [npm](https://www.npmjs.com/package/@waaelg/dga-design-system) · **Preview:** run `npm run docs:dev`

---

## Getting Started

| Doc | Description |
|-----|-------------|
| [Installation](./getting-started/installation.md) | npm, HTML, ASP.NET, Vue, React |
| [JavaScript API](./getting-started/javascript-api.md) | Interactive component classes |
| [Web Components](./getting-started/web-components.md) | `<dga-*>` custom elements |
| [RTL & Arabic](./getting-started/rtl-arabic.md) | Right-to-left setup |

---

## Foundations

| Doc | Description |
|-----|-------------|
| [Colors](./foundations/colors.md) | Palettes, semantic colors, utilities |
| [Colors cheatsheet](./foundations/colors-cheatsheet.md) | Quick class reference |
| [Color swatches](./foundations/colors-swatches.md) | Hex values per shade |
| [Typography](./foundations/typography.md) | Display, text sizes, weights |
| [Spacing](./foundations/spacing.md) | Padding, margin, gap |
| [Grid & Flex](./foundations/grid.md) | Layout, flexbox, display |
| [Width & Height](./foundations/width-height.md) | `dga-w-*`, `dga-h-*` |
| [Border radius](./foundations/radius.md) | Radius utilities |

---

## Components

| Component | Doc | Preview | JS / WC |
|-----------|-----|---------|---------|
| Button | [button.md](./components/button.md) | Docs | No |
| Alert | [alert.md](./components/alert.md) | Docs | WC or class |
| Accordion | [accordion.md](./components/accordion.md) | Docs | WC or class |
| Navbar | [navbar.md](./components/navbar.md) | Docs | Yes |
| Card | [card.md](./components/card.md) | Docs | No |
| Forms | [forms.md](./components/forms.md) | Docs | No |
| Table | [table.md](./components/table.md) | Docs | No |
| Breadcrumb | [breadcrumb.md](./components/breadcrumb.md) | Docs | No |
| Link | [link.md](./components/link.md) | Docs | No |
| Tag | [tag.md](./components/tag.md) | Docs | No |
| Divider | [divider.md](./components/divider.md) | Docs | No |
| Code snippet | [code-snippet.md](./components/code-snippet.md) | Docs | WC or class |
| Pie chart | [chart.md](./components/chart.md) | Docs | WC or class |
| Verify bar | [verify-bar.md](./components/verify-bar.md) | Docs | WC or class |
| Avatar | [avatar.md](./components/avatar.md) | — | No |

**WC** = web component (`<dga-*>`) registered on package import.

---

## Changelog

See [changelog.md](./changelog.md).

---

## Doc conventions

Every component page includes:

1. Overview  
2. HTML structure  
3. Classes and variants (from source SCSS)  
4. Copy-paste examples (from demo HTML)  
5. JavaScript setup (if needed)  
6. Accessibility notes  

Class names are verified against `dist/style.css` after `npm run build`.
