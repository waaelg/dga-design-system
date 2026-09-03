# Installation

## npm

```bash
npm install @waaelg/dga-design-system
```

## Package exports

| Import | Purpose |
|--------|---------|
| `@waaelg/dga-design-system/style.css` | All compiled styles |
| `@waaelg/dga-design-system` | JavaScript classes + `<dga-*>` web components |

Importing the main entry registers web components automatically. See [Web Components](./web-components.md).

---

## CDN (no build step)

The published package is served straight from **jsDelivr** and **unpkg** — no npm install, no bundler. Ideal for static pages, prototypes, and server-rendered apps.

Add the CSS with a `<link>`, and load the JS as an ES module:

```html
<!-- Styles -->
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@waaelg/dga-design-system@0.6.0/dist/style.css"
/>

<!-- Components + JS (must be type="module") -->
<script type="module">
  import 'https://cdn.jsdelivr.net/npm/@waaelg/dga-design-system@0.6.0/dist/index.js'
</script>
```

Full page example:

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8" />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@waaelg/dga-design-system@0.6.0/dist/style.css"
  />
</head>
<body>
  <dga-alert variant="success-color" title="نجاح" dismissible>
    تمت العملية بنجاح
  </dga-alert>

  <script type="module">
    import 'https://cdn.jsdelivr.net/npm/@waaelg/dga-design-system@0.6.0/dist/index.js'
  </script>
</body>
</html>
```

### unpkg

Same files are available from unpkg:

```html
<link rel="stylesheet" href="https://unpkg.com/@waaelg/dga-design-system@0.6.0/dist/style.css" />
<script type="module">
  import 'https://unpkg.com/@waaelg/dga-design-system@0.6.0/dist/index.js'
</script>
```

::: tip Pin the version
The examples pin `@0.6.0` for reproducible, cacheable builds. Use `@latest` to always fetch the newest release, or a range like `@0.5` to get patch updates automatically.
:::

::: warning ES module only
The JavaScript bundle is ESM-only, so the script tag **must** include `type="module"`. A classic `<script src="…index.js"></script>` will not work and won't expose a global. The CSS `<link>` has no such restriction.
:::

---

## Core setup

Every environment uses the **same two imports** — the stylesheet, plus the package entry, which registers the `<dga-*>` web components automatically:

```js
import '@waaelg/dga-design-system/style.css'
import '@waaelg/dga-design-system'
```

Then use `<dga-*>` elements in your markup — no `new DGAAlert()` needed. Legacy `DGA*` classes remain available for hand-wired markup; see the [JavaScript API](./javascript-api.md).

| Environment | Where the imports go |
|-------------|----------------------|
| Vite · Vue · React · Svelte | Your entry file (`main.js`, `main.ts`, `main.tsx`) |
| Next.js (App Router) | CSS in `app/layout.tsx`; register components from a `'use client'` file |
| Plain HTML · PHP · Razor | `<link>` + `<script type="module">`, or a [CDN](#cdn-no-build-step) |

---

## Bundler apps (Vite, Vue, React, Svelte)

Import both once in your entry file, then use web components in any template.

**Vue** — `main.js`:

```js
import { createApp } from 'vue'
import '@waaelg/dga-design-system/style.css'
import '@waaelg/dga-design-system'
import App from './App.vue'

createApp(App).mount('#app')
```

```vue
<!-- App.vue -->
<template>
  <dga-alert variant="success-color" title="نجاح" dismissible>
    تمت العملية بنجاح
  </dga-alert>
</template>
```

**React** — `main.jsx`:

```jsx
import '@waaelg/dga-design-system/style.css'
import '@waaelg/dga-design-system'
```

```jsx
export function App() {
  return (
    <dga-alert variant="success-color" title="Success" dismissible>
      Operation completed.
    </dga-alert>
  )
}
```

::: tip Vite: stale imports
If an import looks stale after upgrading, tell Vite not to pre-bundle the package:

```js
// vite.config.js
export default defineConfig({
  optimizeDeps: { exclude: ['@waaelg/dga-design-system'] },
})
```
:::

---

## Next.js (App Router)

Import the stylesheet in `app/layout.tsx` (a server component):

```tsx
// app/layout.tsx
import '@waaelg/dga-design-system/style.css'

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
```

Web components need the browser, so register them from a client component:

```tsx
'use client'
import { useEffect } from 'react'

export function DGAClient() {
  useEffect(() => {
    import('@waaelg/dga-design-system') // registers <dga-*> elements
  }, [])
  return null
}
```

Render `<DGAClient />` once in the layout, then use `<dga-*>` tags in any page.

---

## Plain HTML & server-rendered (PHP, Razor, …)

Load the CSS and JS once, then use `<dga-*>` tags in markup. The JS is ESM-only, so the script tag **must** be `type="module"`:

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
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

Copy `dist/style.css` and `dist/index.js` into your served assets folder, or [load from a CDN](#cdn-no-build-step) with no copy step.

### ASP.NET Core (Razor)

In `_Layout.cshtml`, reference the built files from `wwwroot`:

```html
<link rel="stylesheet" href="~/lib/dga/style.css" />
<script type="module" src="~/lib/dga/index.js"></script>
```

Then in any view:

```html
<dga-verify-bar domain=".gov.sa"></dga-verify-bar>
```

---

## What gets published

Only `dist/` is on npm:

```
dist/index.js    → JS components
dist/style.css   → compiled CSS
```

SCSS source is not included. Clone the [GitHub repo](https://github.com/waaelg/dga-design-system) to customize variables.

---

## Related

- [Web Components](./web-components.md)
- [JavaScript API](./javascript-api.md)
- [RTL & Arabic](./rtl-arabic.md)
- [Components index](../README.md#components)
