# @waaelg/dga-design-on-sass

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
npm install @waaelg/dga-design-on-sass
```

The published package includes compiled assets from the `dist` folder:

| Import path | Description |
|-------------|-------------|
| `@waaelg/dga-design-on-sass/style.css` | All compiled styles |
| `@waaelg/dga-design-on-sass` | JavaScript component classes |

---

## Quick start

### 1. Import the stylesheet

```js
import '@waaelg/dga-design-on-sass/style.css';
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

Static components work with CSS alone. Interactive components need a one-time JS setup:

```js
import '@waaelg/dga-design-on-sass/style.css';
import { DGAAlert } from '@waaelg/dga-design-on-sass';

new DGAAlert();
```

---

## Usage by project type

### Vite / React / Vue / Svelte

Add the CSS import once in your entry file (`main.js`, `main.tsx`, `App.vue`, etc.):

```js
import '@waaelg/dga-design-on-sass/style.css';
```

**React example**

```jsx
import { useEffect } from 'react';
import '@waaelg/dga-design-on-sass/style.css';
import { DGAAccordion, DGAAlert } from '@waaelg/dga-design-on-sass';

export function App() {
  useEffect(() => {
    const accordionEl = document.getElementById('faq');
    if (accordionEl) new DGAAccordion(accordionEl);
    new DGAAlert();
  }, []);

  return (
    <div className="dga-container">
      <div className="dga-acc" id="faq">
        <div className="dga-acc-item">
          <button className="dga-acc-header" aria-expanded="false">
            <span>السؤال الأول</span>
          </button>
          <div className="dga-acc-content">
            <div className="dga-acc-body">الإجابة هنا.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Next.js (App Router)

Import styles in `app/layout.tsx`:

```tsx
import '@waaelg/dga-design-on-sass/style.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
```

Use a client component for JS initialization:

```tsx
'use client';

import { useEffect } from 'react';
import { DGAAlert } from '@waaelg/dga-design-on-sass';

export function DGAInit() {
  useEffect(() => {
    new DGAAlert();
  }, []);

  return null;
}
```

### Plain HTML

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="./node_modules/@waaelg/dga-design-on-sass/dist/style.css" />
</head>
<body>
  <button class="dga-btn dga-btn-primary">زر</button>

  <script type="module">
    import { DGAAlert } from './node_modules/@waaelg/dga-design-on-sass/dist/index.js';
    new DGAAlert();
  </script>
</body>
</html>
```

> **Tip:** For production, copy `dist/style.css` to your `public` folder or let your bundler handle the import.

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
| Flex direction | `dga-flex-col` / `dga-flex-column`, `dga-flex-row` |

### Included CSS components

These work with markup and classes only (no JS required):

- Buttons — `dga-btn`, `dga-btn-primary`, `dga-btn-neutral`, `dga-btn-subtle`, sizes `dga-btn-sm` / `dga-btn-md` / `dga-btn-lg`
- Cards — `dga-card`
- Forms — `dga-input`, `dga-select`, `dga-textarea`, `dga-label`
- Links & tags — `dga-link`, `dga-tag`
- Tables — `dga-table`
- Breadcrumb, divider, avatar

For the full grid reference, see [docs/DGA-Grid-System-Documentation.md](./docs/DGA-Grid-System-Documentation.md).

For width and height utilities, see [docs/DGA-Width-Height-Documentation.md](./docs/DGA-Width-Height-Documentation.md).

---

## JavaScript components

Import from the main package entry:

```js
import {
  DGAAccordion,
  DGAAlert,
  DGAChart,
  DGACodeSnippet,
  DGAMenuDropDown,
  DGAVerifyBar,
} from '@waaelg/dga-design-on-sass';
```

### DGAAccordion

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

### DGAAlert

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

### DGAChart

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

### DGACodeSnippet

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

### DGAVerifyBar

Controls the Saudi government verification bar (legacy markup with fixed element IDs).

Expected IDs: `dga-verify-bar`, `dga-verifyBtn`, `dga-verify-bar_content`.

```js
const verifyBar = new DGAVerifyBar();
const menu = new DGAMenuDropDown();

// Optional: coordinate verify bar and navbar
verifyBar.menu = menu;
menu.verifyBar = verifyBar;
```

### `<dga-verify-bar>` web component

Importing the main package also registers the `<dga-verify-bar>` custom element — a self-contained alternative to `DGAVerifyBar`.

```html
<!-- Default -->
<dga-verify-bar></dga-verify-bar>

<!-- With custom attributes -->
<dga-verify-bar
  domain=".edu.sa"
  registration-number="20250105758"
  registration-link="https://raqmi.dga.gov.sa/...">
</dga-verify-bar>
```

| Attribute | Default | Description |
|-----------|---------|-------------|
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
node_modules/@waaelg/dga-design-on-sass/
├── dist/
│   ├── index.js      # JavaScript components
│   ├── index.js.map
│   └── style.css     # Compiled CSS
└── package.json
```

SCSS source files are **not** included in the npm package. To customize variables or mixins, clone the [repository](https://github.com/waaelg/personal_fe_dga-sass) and build locally.

---

## Local development (contributors)

```bash
git clone https://github.com/waaelg/personal_fe_dga-sass.git
cd personal_fe_dga-sass
npm install
npm run dev      # demo pages at http://localhost:5173
npm run build    # outputs dist/index.js and dist/style.css
```

Demo pages in the repo:

| File | Contents |
|------|----------|
| `index.html` | Full component showcase |
| `alerts.html` | Alert variants |
| `colors.html` | Color palette |
| `verify-bar.html` | `<dga-verify-bar>` web component |

Documentation:

| File | Contents |
|------|----------|
| `docs/DGA-Grid-System-Documentation.md` | Grid, flexbox, layout |
| `docs/DGA-Width-Height-Documentation.md` | Width & height utilities |
| `docs/DGA-Color-System-Documentation.md` | Color tokens and utilities |
| `docs/DGA-Border-Radius-Documentation.md` | Border radius utilities |

---

## Troubleshooting

**Styles not applied**
- Confirm `import '@waaelg/dga-design-on-sass/style.css'` runs before your app renders.
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
      exclude: ['@waaelg/dga-design-on-sass'],
    },
  })
  ```

---

## License

MIT — Wael Alghamdi
