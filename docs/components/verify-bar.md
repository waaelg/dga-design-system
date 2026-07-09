# Verify Bar

Saudi government official site verification banner.

**Source:** `src/styles/components/verifyBar.scss`, `src/scripts/verifyBar.js`, `src/scripts/dga-verify-bar.js`  
**Demo:** VitePress live preview on this page  
**JavaScript:** Optional — web component or `DGAVerifyBar` class

---

## Option 1: Web component (recommended)

Import the package once — registers `<dga-verify-bar>` automatically:

```html
<dga-verify-bar></dga-verify-bar>
```

<Demo title="Preview" client>

<DgaVerifyBar />

</Demo>

### Custom attributes

```html
<dga-verify-bar
  domain=".edu.sa"
  registration-number="20250105758"
  registration-link="https://raqmi.dga.gov.sa/platforms/platforms/9ebc5e60-9081-4653-bfb9-08dd2a2f8633/platform-license">
</dga-verify-bar>
```

| Attribute | Default | Description |
|-----------|---------|-------------|
| `domain` | `.edu.sa` | Official domain suffix shown in copy |
| `registration-number` | `20250105758` | DGA registration number |
| `registration-link` | DGA Raqmi URL | Link to platform license |
| `assets-base` | `/` | Base path for default SVG filenames |
| `flag-src` | `{assets-base}saudiFlag.svg` | Saudi flag image URL |
| `link-icon-src` | `{assets-base}link-icon.svg` | Link icon URL |
| `lock-icon-src` | `{assets-base}square-lock-password.svg` | Lock icon URL |
| `logo-src` | `{assets-base}DGA-logo-icon.svg` | DGA logo URL |

Override individual images when your app serves assets from `src/assets` or a CDN:

```html
<dga-verify-bar
  domain=".edu.sa"
  flag-src="/assets/dga/saudiFlag.svg"
  link-icon-src="/assets/dga/link-icon.svg"
  lock-icon-src="/assets/dga/square-lock-password.svg"
  logo-src="/assets/dga/DGA-logo-icon.svg">
</dga-verify-bar>
```

Or set a shared folder once:

```html
<dga-verify-bar assets-base="/assets/dga/"></dga-verify-bar>
```

**Vue / Vite** — import SVGs and bind URLs:

```vue
<script setup>
import saudiFlag from '@/assets/dga/saudiFlag.svg'
import linkIcon from '@/assets/dga/link-icon.svg'
import lockIcon from '@/assets/dga/square-lock-password.svg'
import dgaLogo from '@/assets/dga/DGA-logo-icon.svg'
</script>

<template>
  <dga-verify-bar
    domain=".edu.sa"
    :flag-src="saudiFlag"
    :link-icon-src="linkIcon"
    :lock-icon-src="lockIcon"
    :logo-src="dgaLogo"
  />
</template>
```

No manual JS init required when using the web component.

---

## Option 2: Legacy markup + DGAVerifyBar

Requires fixed element IDs:

- `#dga-verify-bar`
- `#dga-verifyBtn`
- `#dga-verify-bar_content`

```js
import { DGAVerifyBar, DGAMenuDropDown } from '@waaelg/dga-design-system'

const verifyBar = new DGAVerifyBar()
const menu = new DGAMenuDropDown()
verifyBar.menu = menu
menu.verifyBar = verifyBar
```

Use this when you need custom verify bar markup instead of `<dga-verify-bar>`.

---

## Styling

- Background: `dga-bg-gray-100`
- Toggle button: `dga-btn dga-btn-subtle dga-text-primary-500`
- Expandable panel with domain and HTTPS verification info
- Arabic copy by default

---

## Assets

Copy the SVGs from `node_modules/@waaelg/dga-design-system/dist/` into your app `public/` folder (defaults load from `/`), **or** pass `assets-base` / `*-src` attributes (see table above).

---

## Related

- [Navbar](./navbar.md) — coordinate open/close with mobile menu
- [JavaScript API](../getting-started/javascript-api.md)
- [RTL & Arabic](../getting-started/rtl-arabic.md)
