# @waaelg/dga-design-system

Saudi **DGA (Digital Government Authority)** design system — compiled CSS utilities, components, and optional JavaScript for interactive behavior.

- Responsive 12-column grid
- Typography, spacing, colors, radius, and **width/height** utilities
- UI components (buttons, alerts, accordion, navbar, cards, forms, and more)
- Optional JS helpers for interactive components
- Built-in **IBM Plex Sans Arabic** font
- RTL-friendly markup patterns

---

## Installation

```bash
npm install @waaelg/dga-design-system
```

The published package includes compiled assets from the `dist` folder:

| Import path | Description |
|-------------|-------------|
| `@waaelg/dga-design-system/style.css` | All compiled styles |
| `@waaelg/dga-design-system` | JavaScript component classes |

---

## Quick start

### 1. Import the stylesheet

```js
import '@waaelg/dga-design-system/style.css';
```

### 2. Use `dga-*` classes in your HTML

```html
<html lang="ar" dir="rtl">
  <body class="dga-bg-gray-25">
    <div class="dga-container">
      <div class="dga-row">
        <div class="dga-col-12 dga-col-md-6">
          <button class="dga-btn dga-btn-primary">زر أساسي</button>
        </div>
      </div>
    </div>
  </body>
</html>
```

### 3. Initialize JavaScript (only when needed)

Static components work with CSS alone. For **legacy HTML markup**, interactive components need a one-time JS setup. **Web components** (`<dga-*>`) handle behavior automatically.

```js
import '@waaelg/dga-design-system/style.css';
import '@waaelg/dga-design-system'; // registers <dga-*> elements

// Legacy only:
import { DGAAlert } from '@waaelg/dga-design-system';
new DGAAlert();
```

**Web component (no init):**

```html
<dga-alert variant="success-color" title="Success" dismissible>
  Operation completed successfully.
</dga-alert>
```

---

## Usage by project type

Every setup comes down to the **same two imports** — the stylesheet, plus the package entry, which registers the `<dga-*>` web components automatically:

```js
import '@waaelg/dga-design-system/style.css';
import '@waaelg/dga-design-system';
```

After that, drop `<dga-*>` elements anywhere in your markup — they handle their own behavior, no initialization needed. The legacy `DGA*` classes stay available for hand-wired markup; see [JavaScript components](#javascript-components).

| Environment | Where the two imports go |
|-------------|--------------------------|
| Vite · Vue · React · Svelte | Your entry file (`main.js`, `main.ts`, `main.tsx`) |
| Next.js (App Router) | CSS in `app/layout.tsx`; register components from a `'use client'` file |
| Plain HTML · PHP · Razor | `<link>` + `<script type="module">` in the page |
| No build step | Load from a [CDN](#cdn-no-build-step) |

### Bundler apps (Vite, Vue, React, Svelte)

Add both imports once in your entry file, then use web components in any template:

```jsx
// main.tsx
import '@waaelg/dga-design-system/style.css';
import '@waaelg/dga-design-system';
```

```jsx
export function App() {
  return (
    <div className="dga-container">
      <dga-alert variant="success-color" title="نجاح" dismissible>
        تمت العملية بنجاح
      </dga-alert>
    </div>
  );
}
```

> **Vite tip:** if an import looks stale after upgrading, add `optimizeDeps: { exclude: ['@waaelg/dga-design-system'] }` to `vite.config.js`.

### Next.js (App Router)

Import the stylesheet in `app/layout.tsx` (a server component):

```tsx
import '@waaelg/dga-design-system/style.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
```

Web components need the browser, so register them from a client component:

```tsx
'use client';
import { useEffect } from 'react';

export function DGAClient() {
  useEffect(() => {
    import('@waaelg/dga-design-system'); // registers <dga-*> elements
  }, []);
  return null;
}
```

Render `<DGAClient />` once in your layout, then use `<dga-*>` tags in any page.

### Plain HTML / server-rendered (PHP, Razor, …)

Load the CSS and JS once, then use `<dga-*>` tags in markup. The JS is ESM-only, so the script tag **must** be `type="module"`:

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="/assets/dga/style.css" />
</head>
<body>
  <dga-alert variant="success-color" title="نجاح" dismissible>
    تمت العملية بنجاح
  </dga-alert>

  <script type="module" src="/assets/dga/index.js"></script>
</body>
</html>
```

Copy `dist/style.css` and `dist/index.js` into your served assets folder (`public/`, `wwwroot/`, …), or skip the copy entirely and [load from a CDN](#cdn-no-build-step).

### CDN (no build step)

Load the package straight from **jsDelivr** or **unpkg** — no install, no bundler. The CSS works with a plain `<link>`; the JS is ESM-only, so its `<script>` **must** be `type="module"`.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@waaelg/dga-design-system@0.7.0/dist/style.css"
/>

<script type="module">
  import 'https://cdn.jsdelivr.net/npm/@waaelg/dga-design-system@0.7.0/dist/index.js';
</script>
```

Same files are on unpkg (`https://unpkg.com/@waaelg/dga-design-system@0.7.0/dist/…`). Pin a version for reproducible builds, or use `@latest` to always fetch the newest release. See the [installation docs](./docs/getting-started/installation.md#cdn-no-build-step) for a full example.

---

## CSS-only usage

Most of the design system works without JavaScript. Apply utility and component classes directly.

### Grid layout

```html
<div class="dga-container">
  <div class="dga-row">
    <div class="dga-col-12 dga-col-md-6 dga-col-lg-4">Column 1</div>
    <div class="dga-col-12 dga-col-md-6 dga-col-lg-4">Column 2</div>
    <div class="dga-col-12 dga-col-md-6 dga-col-lg-4">Column 3</div>
  </div>
</div>
```

### Common utility prefixes

| Prefix | Examples |
|--------|----------|
| Layout | `dga-container`, `dga-row`, `dga-col-*`, `dga-d-flex`, `dga-gap-*` |
| Width | `dga-w-full`, `dga-w-50`, `dga-max-w-lg`, `dga-w-screen` |
| Height | `dga-h-full`, `dga-h-100`, `dga-min-h-screen`, `dga-h-4` |
| Spacing | `dga-p-*`, `dga-m-*`, `dga-py-*`, `dga-px-*` |
| Colors | `dga-bg-primary-500`, `dga-text-gray-700` |
| Typography | `dga-text-sm`, `dga-text-xl`, `dga-fw-bold`, `dga-display-md` |
| Radius | `dga-rounded-md`, `dga-rounded-lg` |
| Effects | `dga-shadow-xs`…`dga-shadow-3xl`, `dga-backdrop-blur-md` |
| Flex direction | `dga-flex-col` / `dga-flex-column`, `dga-flex-row` |

### Included CSS components

These work with markup and classes only (no JS required):

- Buttons — `dga-btn`, `dga-btn-primary`, `dga-btn-neutral`, `dga-btn-subtle`, sizes `dga-btn-sm` / `dga-btn-md` / `dga-btn-lg`
- Cards — `dga-card`
- Forms — `dga-input`, `dga-select`, `dga-textarea`, `dga-label`
- Links & tags — `dga-link`, `dga-tag`
- Tables — `dga-table`
- Breadcrumb, divider, avatar

For the full documentation index, see **[docs/README.md](./docs/README.md)**.

Quick links:
- [Documentation index](./docs/README.md)
- [Installation](./docs/getting-started/installation.md)
- [JavaScript API](./docs/getting-started/javascript-api.md)
- [Web Components](./docs/getting-started/web-components.md)
- [Components](./docs/README.md#components)
- [Grid](./docs/foundations/grid.md) · [Colors](./docs/foundations/colors.md)

---

## JavaScript components

Import from the main package entry:

```js
import {
  DGAAccordion,
  DGAAlert,
  DGAChart,
  DGABarChart,
  DGALineChart,
  DGACodeSnippet,
  DGAMenuDropDown,
  DGAVerifyBar,
} from '@waaelg/dga-design-system';
```

Importing the package also registers **web components** — prefer these in Vue/React:

| Web component | Legacy class |
|---------------|--------------|
| `<dga-alert>` | `DGAAlert` |
| `<dga-accordion>` + `<dga-accordion-item>` | `DGAAccordion` |
| `<dga-code-snippet>` | `DGACodeSnippet` |
| `<dga-pie-chart>` | `DGAChart` |
| `<dga-bar-chart>` | `DGABarChart` |
| `<dga-line-chart>` | `DGALineChart` |
| `<dga-verify-bar>` | `DGAVerifyBar` |

See [Web Components](./docs/getting-started/web-components.md) for framework setup.

### DGAAccordion (legacy)

Expands and collapses accordion panels. Supports click and keyboard (Enter / Space).

```html
<div class="dga-acc" id="myAccordion">
  <div class="dga-acc-item">
    <button class="dga-acc-header" aria-expanded="false">
      <span>Section title</span>
    </button>
    <div class="dga-acc-content">
      <div class="dga-acc-body">Content goes here.</div>
    </div>
  </div>
</div>
```

```js
new DGAAccordion(document.getElementById('myAccordion'));
```

### DGAAlert (legacy)

Handles dismiss buttons on alerts. Requires `[data-alert-close]` on the close button.

```html
<div class="dga-alert" data-variant="success-color">
  <span class="dga-alert-icon" aria-hidden="true"></span>
  <div class="dga-alert-content">
    <h4 class="dga-alert-title">Success</h4>
    <div class="dga-alert-body">Operation completed successfully.</div>
  </div>
  <button class="dga-alert-close" type="button" data-alert-close aria-label="Dismiss alert">×</button>
</div>
```

```js
new DGAAlert(); // listens on document by default
```

**Variants:** `success-color`, `warning-color`, `destructive-color`, `info-color`, `neutral-color`, `success-white`, `warning-white`, `destructive-white`, `info-white`, `neutral-white`

### DGAChart (legacy)

Renders a pie chart using a `conic-gradient` background.

```html
<div id="myChart" class="dga-pie-chart" data-hole="false"></div>
```

```js
new DGAChart(document.getElementById('myChart'), [
  { label: 'Item 1', from: '0%', to: '40%', color: 'var(--dga-primary-100)' },
  { label: 'Item 2', from: '40%', to: '100%', color: 'var(--dga-gray-200)' },
]);
```

Set `data-hole="true"` on the element for a donut-style chart.

### DGACodeSnippet (legacy)

Enables copy-to-clipboard on code snippet blocks.

```js
new DGACodeSnippet(); // listens on document by default
```

Copy buttons must use `.dga-code-snippet-inline__copy` or `.dga-code-snippet-multiline__copy`.

### DGAMenuDropDown

Powers the responsive navbar with dropdown menus.

```html
<nav class="dga-navbar" role="navigation">
  <a class="dga-navbar-brand" href="#">Brand</a>
  <ul class="dga-menu">
    <li>
      <a class="dga-menu-item dga-has-dropdown" href="#" role="button" aria-expanded="false" aria-haspopup="true">
        Menu
      </a>
      <div class="dga-dropdown">
        <div class="dga-dropdown-content">
          <ul>
            <li><a href="#">Link</a></li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
  <button class="dga-navbar-toggler" aria-label="Toggle menu"></button>
</nav>
```

```js
const menu = new DGAMenuDropDown({
  navbar: document.querySelector('.dga-navbar'),
});
```

### Web components

```html
<dga-alert variant="success-color" title="Success" dismissible>Message</dga-alert>

<dga-accordion>
  <dga-accordion-item title="Question">Answer</dga-accordion-item>
</dga-accordion>

<dga-code-snippet code="npm install @waaelg/dga-design-system"></dga-code-snippet>

<dga-pie-chart data='[{"label":"A","from":"0%","to":"100%","color":"primary-100"}]'></dga-pie-chart>

<dga-verify-bar domain=".edu.sa"></dga-verify-bar>
```

### DGAVerifyBar (legacy)

Controls the Saudi government verification bar (legacy markup with fixed element IDs).

Expected IDs: `dga-verify-bar`, `dga-verifyBtn`, `dga-verify-bar_content`.

```js
const verifyBar = new DGAVerifyBar();
const menu = new DGAMenuDropDown();

// Optional: coordinate verify bar and navbar
verifyBar.menu = menu;
menu.verifyBar = verifyBar;
```

| `<dga-verify-bar>` attribute | Default | Description |
|------------------------------|---------|-------------|
| `domain` | `.edu.sa` | Official domain suffix shown in the verify panel |
| `registration-number` | `20250105758` | DGA registration number |
| `registration-link` | DGA Raqmi URL | Link to the platform license page |

---

## RTL and Arabic

The design system targets Arabic government websites. Set `dir="rtl"` and `lang="ar"` on the `<html>` element for correct layout direction. The default font is **IBM Plex Sans Arabic**, loaded automatically with the stylesheet.

---

## What's included in the npm package

Only compiled files are published:

```
node_modules/@waaelg/dga-design-system/
├── dist/
│   ├── index.js      # JavaScript components
│   ├── index.js.map
│   └── style.css     # Compiled CSS
└── package.json
```

SCSS source files are **not** included in the npm package. To customize variables or mixins, clone the [repository](https://github.com/waaelg/dga-design-system) and build locally.

---

## Local development (contributors)

```bash
git clone https://github.com/waaelg/dga-design-system.git
cd dga-design-system
npm install
npm run docs:dev   # documentation at http://localhost:5173
npm run build      # outputs dist/index.js and dist/style.css
```

Documentation site (VitePress):

```bash
npm run docs:dev     # local docs
npm run docs:build   # production build
```

Documentation:

| File | Contents |
|------|----------|
| `docs/foundations/grid.md` | Grid, flexbox, layout |
| `docs/foundations/width-height.md` | Width & height utilities |
| `docs/foundations/colors.md` | Color tokens and utilities |
| `docs/foundations/radius.md` | Border radius utilities |

---

## Troubleshooting

**Styles not applied**
- Confirm `import '@waaelg/dga-design-system/style.css'` runs before your app renders.
- In plain HTML, verify the `<link>` path points to `dist/style.css`.

**Interactive component not working**
- Check that the required HTML structure and classes match the examples above.
- Ensure the matching JS class is instantiated after the DOM is ready.
- For alerts and code snippets, `new DGAAlert()` / `new DGACodeSnippet()` must run once.

**Navbar dropdown or verify bar issues**
- `DGAMenuDropDown` requires a `.dga-navbar` element with `.dga-menu` and `.dga-navbar-toggler`.
- `DGAVerifyBar` requires the legacy ID-based markup (`#dga-verify-bar`, etc.), or use `<dga-verify-bar>` instead.

**Vite: `does not provide an export named 'DGAAlert'`**
- Stale Vite pre-bundle in `node_modules/.vite/deps/`. Clear it and restart:
  ```bash
  rm -rf node_modules/.vite
  npm run dev
  ```
- Or add to `vite.config.js`:
  ```js
  export default defineConfig({
    optimizeDeps: {
      exclude: ['@waaelg/dga-design-system'],
    },
  })
  ```

---

## Skills for AI coding tools

This repo has three parts: the **package** (`src/`, compiled to `dist/`), the **docs site** (`docs/`, VitePress), and **`skills/`** — Claude Skills that teach an AI coding assistant the actual class names, component patterns, and JS API documented above, grounded in `docs/` rather than guessed.

| Skill | Covers |
|-------|--------|
| [`dga-vue-component`](skills/dga-vue-component/SKILL.md) | Generating Vue 3 SFCs styled with DGA |
| [`dga-web-components`](skills/dga-web-components/SKILL.md) | `<dga-*>` elements and the JS class API outside Vue (plain HTML, Razor, PHP) |
| [`dga-foundations`](skills/dga-foundations/SKILL.md) | Color/spacing/typography/radius/grid utility reference |

If you clone this repo with **Claude Code**, these are picked up automatically via the `.claude/skills` symlink — no setup needed. Any other AI tool can be pointed directly at the `skills/<name>/SKILL.md` files.

---

## License

MIT — Wael Alghamdi
