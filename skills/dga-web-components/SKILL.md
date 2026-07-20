---
name: dga-web-components
description: Use the DGA (Saudi Digital Government Authority) design system's `<dga-*>` custom elements and JS classes directly — plain HTML, ASP.NET Razor (.cshtml), PHP, or any bundler setup without a Vue/React wrapper. Use when the user is working outside a Vue project and explicitly mentions DGA, @waaelg/dga-design-system, or asks to wire up a `<dga-*>` element / DGA JS class. Do NOT use for generic web component questions unrelated to this package, and prefer the `dga-vue-component` skill when the target is a Vue SFC.
---

# DGA Web Components & JavaScript API

`@waaelg/dga-design-system` ships standard HTML custom elements — they work in any environment that can load a script tag: static HTML, ASP.NET Core Razor, PHP, Blazor, or a bundler (Vite/webpack). This skill covers using the package **without** a Vue/React wrapper. Content here is verified against `docs/getting-started/web-components.md`, `docs/getting-started/javascript-api.md`, `docs/getting-started/installation.md`, and `docs/getting-started/rtl-arabic.md`.

## Setup

```bash
npm install @waaelg/dga-design-system
```

Import once, globally — this registers all custom elements automatically (no manual `customElements.define`):

```js
import '@waaelg/dga-design-system/style.css'
import '@waaelg/dga-design-system'
```

**Plain HTML / no bundler** — reference the built files directly:

```html
<link rel="stylesheet" href="./node_modules/@waaelg/dga-design-system/dist/style.css" />
<script type="module">
  import './node_modules/@waaelg/dga-design-system/dist/index.js'
</script>
```

**ASP.NET Core Razor** — copy `dist/style.css` and `dist/index.js` into `wwwroot/lib/dga/`, then in `_Layout.cshtml`:

```html
<link rel="stylesheet" href="~/lib/dga/style.css" asp-append-version="true" />
<script type="module" src="~/lib/dga/index.js" asp-append-version="true"></script>
```

Custom element tags are lowercase in HTML — Razor/PHP output them like any other markup, no special handling needed:

```html
<dga-alert variant="success-color" title="@Model.Title" dismissible>
  @Model.Message
</dga-alert>
```

Only `dist/` ships on npm — SCSS source isn't published. Clone the GitHub repo if variables need customizing.

## The actual custom-element list

These are the **only** `<dga-*>` tags the package registers. Don't assume every component has one — most DGA components are CSS-only and need no element at all.

| Element | Legacy JS class | Needs the element/class at all? |
|---------|------------------|----------------------------------|
| `<dga-alert>` | `DGAAlert` | Optional — alerts work as plain HTML + CSS; the class/element only wires up the dismiss button |
| `<dga-accordion>` + `<dga-accordion-item>` | `DGAAccordion` | Yes, for expand/collapse behavior |
| `<dga-code-snippet>` | `DGACodeSnippet` | Optional — only needed for the copy-to-clipboard button |
| `<dga-pie-chart>` | `DGAChart` | Yes, to render the conic-gradient segments |
| `<dga-verify-bar>` | `DGAVerifyBar` | Yes, for the expand/collapse toggle |

`button`, `card`, `forms` (input/select/textarea/label), `table`, `breadcrumb`, `link`, `tag`, `divider`, `avatar` are **CSS-only** — just apply the documented classes, no element or JS class involved.

**Navbar has no custom element.** Build `.dga-navbar` markup (see `docs/components/navbar.md`) and wire it up with the `DGAMenuDropDown` class — there is no `<dga-navbar>` tag.

## Using a web component

```html
<dga-alert variant="success-color" title="Success" dismissible>
  Operation completed successfully.
</dga-alert>

<dga-accordion>
  <dga-accordion-item title="What is an accordion?">
    An accordion lets users expand and collapse sections of content.
  </dga-accordion-item>
  <dga-accordion-item title="How do I use it?" size="lg" open>
    Import the package once — no manual JS init required.
  </dga-accordion-item>
</dga-accordion>

<dga-pie-chart data='[{"label":"Item 1","from":"0%","to":"40%","color":"var(--dga-primary-100)"}]'></dga-pie-chart>

<dga-code-snippet code="npm install @waaelg/dga-design-system"></dga-code-snippet>

<dga-verify-bar></dga-verify-bar>
```

Attribute names are per-component — check the "Attributes" table in the matching `docs/components/*.md` file rather than guessing (e.g. `<dga-pie-chart>` takes `data` + `hole`; `<dga-verify-bar>` takes `domain`, `registration-number`, `registration-link`, `assets-base`, and `*-src` overrides).

**`<dga-verify-bar>` assets:** it defaults to loading `saudiFlag.svg`, `link-icon.svg`, `square-lock-password.svg`, and `DGA-logo-icon.svg` from `/`. Either copy those four SVGs from `node_modules/@waaelg/dga-design-system/dist/` into the consuming project's `public/` folder, or override `assets-base` (a shared path prefix) or the individual `flag-src` / `link-icon-src` / `lock-icon-src` / `logo-src` attributes. Without one of those, the images 404.

### Events

| Element | Event | Fires when |
|---------|-------|------------|
| `<dga-alert>` | `dga-alert-dismiss` | User clicks the dismiss button |
| `<dga-code-snippet>` | `dga-code-copy` | Copy succeeds |

```js
document.querySelector('dga-alert')?.addEventListener('dga-alert-dismiss', () => {
  console.log('Alert dismissed')
})
```

## Legacy JS-class API (when you need plain markup instead)

Use this when you have existing `dga-*` class markup already in place, need multi-tab code snippets (tabs aren't wired by the web component), or need the verify bar paired with a legacy navbar by ID.

```js
import {
  DGAAccordion,
  DGAAlert,
  DGAChart,
  DGACodeSnippet,
  DGAMenuDropDown,
  DGAVerifyBar,
} from '@waaelg/dga-design-system'
```

- **`DGAAccordion`** — `new DGAAccordion(document.getElementById('myAccordion'))` on a `.dga-acc` root.
- **`DGAAlert`** — `new DGAAlert()`, listens document-wide for `[data-alert-close]` clicks.
- **`DGAChart`** — `new DGAChart(el, data)` where `data` is `[{ label, from, to, color }]`; `data-hole="true"` on the root for a donut.
- **`DGACodeSnippet`** — `new DGACodeSnippet()`, listens for clicks on `.dga-code-snippet-inline__copy` / `.dga-code-snippet-multiline__copy`.
- **`DGAMenuDropDown`** — `new DGAMenuDropDown({ navbar: document.querySelector('.dga-navbar') })`. Required for every navbar, web-component or not.
- **`DGAVerifyBar`** — `new DGAVerifyBar()`, requires exact element IDs `#dga-verify-bar`, `#dga-verifyBtn`, `#dga-verify-bar_content`. Pair with the navbar's menu instance:
  ```js
  const menu = new DGAMenuDropDown({ navbar: document.querySelector('.dga-navbar') })
  const verifyBar = new DGAVerifyBar({ menu })
  menu.verifyBar = verifyBar
  ```
  Prefer `<dga-verify-bar>` for new work — it needs none of this wiring.

**Never mix both APIs for the same instance** — e.g. don't use `<dga-verify-bar>` and also call `new DGAVerifyBar()`; the web component already handles itself.

## Framework interop notes (when embedding in Vue/React without full component generation)

These are **not** Vue or React components — never write `<DGAAlert />`. Use the lowercase HTML tag directly after importing the package.

**Vue** — tell the compiler to treat `dga-*` as custom elements if it warns about unknown tags:

```js
// vite.config.js
export default defineConfig({
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('dga-'),
    },
  },
})
```

**React** — use lowercase tag names in JSX (`<dga-alert>`, not `<DgaAlert>`); TypeScript projects may need a `declare global` for the `dga-*` intrinsic elements.

For full Vue SFC generation with DGA styling conventions, use the [`dga-vue-component`](../dga-vue-component/SKILL.md) skill instead.

## RTL & Arabic

DGA targets Saudi government sites — Arabic/RTL is the default assumption, not an afterthought:

```html
<html lang="ar" dir="rtl">
```

IBM Plex Sans Arabic loads automatically with the stylesheet — no extra font import needed. Prefer logical classes (`dga-text-start`/`dga-text-end`) over physical `left`/`right` ones; chevrons and icon placement in components like breadcrumb and accordion flip automatically under `dir="rtl"`.

## Related skills

- [`dga-vue-component`](../dga-vue-component/SKILL.md) — generating full Vue 3 SFCs styled with DGA conventions.
- [`dga-foundations`](../dga-foundations/SKILL.md) — color/spacing/typography/radius utility reference for any markup, not just web components.
