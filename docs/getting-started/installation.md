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

## Plain HTML & server-rendered pages

Works with static HTML, **ASP.NET Core `.cshtml`**, PHP, etc. Load CSS + JS once, then use `<dga-*>` tags in markup.

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <link rel="stylesheet" href="./node_modules/@waaelg/dga-design-system/dist/style.css" />
</head>
<body>
  <dga-alert variant="success-color" title="نجاح" dismissible>
    تمت العملية بنجاح
  </dga-alert>

  <script type="module">
    import './node_modules/@waaelg/dga-design-system/dist/index.js'
  </script>
</body>
</html>
```

See [Web Components](./web-components.md) for ASP.NET layout setup and more examples.

---

## ASP.NET Core (Razor)

In `_Layout.cshtml`, reference the built files from `wwwroot`:

```html
<link rel="stylesheet" href="~/lib/dga/style.css" />
<script type="module" src="~/lib/dga/index.js"></script>
```

In any view:

```html
<dga-verify-bar domain=".gov.sa"></dga-verify-bar>
```

---

## Vite / Vue

**`main.js`** — import CSS and register web components:

```js
import { createApp } from 'vue'
import '@waaelg/dga-design-system/style.css'
import '@waaelg/dga-design-system'
import App from './App.vue'

createApp(App).mount('#app')
```

**`App.vue`** — use `<dga-alert>` etc. (no `new DGAAlert()` needed):

```vue
<template>
  <dga-alert variant="success-color" title="نجاح" dismissible>
    تمت العملية بنجاح
  </dga-alert>
</template>
```

**`vite.config.js`** — avoid stale dependency cache:

```js
export default defineConfig({
  optimizeDeps: {
    exclude: ['@waaelg/dga-design-system'],
  },
})
```

---

## React

```jsx
// main.jsx
import '@waaelg/dga-design-system/style.css'
import '@waaelg/dga-design-system'
```

```jsx
export function App() {
  return (
    <>
      <dga-alert variant="success-color" title="Success" dismissible>
        Operation completed.
      </dga-alert>
      <button className="dga-btn dga-btn-primary">زر</button>
    </>
  )
}
```

For legacy HTML markup, use `useEffect` with `new DGAAlert()` instead. See [Web Components](./web-components.md).

---

## Next.js

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
