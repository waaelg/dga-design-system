# Verify Bar

Saudi government official site verification banner.

**Source:** `src/styles/components/verifyBar.scss`, `src/scripts/verifyBar.js`, `src/scripts/dga-verify-bar.js`  
**Demo:** VitePress live preview on this page  
**JavaScript:** Optional — `<dga-verify-bar>` web component (recommended) or `DGAVerifyBar` for plain HTML

---

## Web component (recommended)

Import the package once — registers `<dga-verify-bar>` automatically. No manual markup or `new DGAVerifyBar()` required.

```js
// main.js
import '@waaelg/dga-design-system/style.css'
import '@waaelg/dga-design-system'
```

```html
<dga-verify-bar></dga-verify-bar>
```

<Demo title="Preview" client>

<dga-verify-bar></dga-verify-bar>

</Demo>

### Custom attributes

Override defaults when your site needs different values:

```html
<dga-verify-bar
  domain=".edu.sa"
  registration-number="20250105758"
  registration-link="https://raqmi.dga.gov.sa/platforms/platforms/9ebc5e60-9081-4653-bfb9-08dd2a2f8633/platform-license"
  assets-base="/assets/dga/">
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

### Vue / Vite

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

```vue
<template>
  <dga-verify-bar
    domain=".edu.sa"
    registration-number="20250105758"
    registration-link="https://raqmi.dga.gov.sa/platforms/platforms/9ebc5e60-9081-4653-bfb9-08dd2a2f8633/platform-license"
  />
</template>
```

Bind image URLs when assets live under `src/assets`:

```vue
<script setup>
import saudiFlag from '@/assets/dga/saudiFlag.svg'
import linkIcon from '@/assets/dga/link-icon.svg'
import lockIcon from '@/assets/dga/square-lock-password.svg'
import dgaLogo from '@/assets/dga/DGA-logo-icon.svg'
</script>

<template>
  <dga-verify-bar
    :flag-src="saudiFlag"
    :link-icon-src="linkIcon"
    :lock-icon-src="lockIcon"
    :logo-src="dgaLogo"
  />
</template>
```

Use `DGAMenuDropDown` for the navbar when needed. **Do not** also call `new DGAVerifyBar()` — the web component handles the verify bar on its own.

### Assets

Copy SVGs from `node_modules/@waaelg/dga-design-system/dist/` into your app `public/` folder (defaults load from `/`), **or** set `assets-base` / `*-src` attributes.

---

## Plain HTML (alternative)

Use this when you need full control over the markup. Paste the HTML into your layout, then initialize `DGAVerifyBar` once for the expand/collapse toggle.

**Required element IDs:** `dga-verify-bar`, `dga-verifyBtn`, `dga-verify-bar_content`

```html
<div id="dga-verify-bar" class="dga-bg-gray-100 closed">
  <div class="dga-container dga-py-2">
    <div id="dga-verify-bar_bar" class="dga-row">
      <div class="dga-col">
        <div class="dga-d-flex dga-align-items-center dga-gap-2">
          <span><img src="../assets/dga/saudiFlag.svg" alt="" /></span>
          <span class="dga-text-sm">موقع حكومي رسمي تابع لحكومة المملكة العربية السعودية</span>
          <span>
            <button id="dga-verifyBtn" class="dga-btn dga-btn-subtle dga-text-primary-500">
              كيف تتحقق
            </button>
          </span>
        </div>
      </div>
    </div>

    <div id="dga-verify-bar_content" class="dga-row dga-pt-10 dga-pb-8">
      <div class="dga-col-md-6 dga-pb-8">
        <div class="dga-d-flex dga-gap-4">
          <div><img src="../assets/dga/link-icon.svg" alt="" /></div>
          <div class="dga-w-full dga-d-flex dga-flex-col dga-gap-2">
            <h3 class="dga-text-xl dga-fw-bold">
              روابط المواقع الالكترونية الرسمية السعودية تنتهي بـ
              <span class="dga-text-primary-500">.edu.sa</span>
            </h3>
            <p>
              جميع روابط المواقع الرسمية التابعة للجهات الحكومية في المملكة
              العربية السعودية تنتهي بـ .edu.sa
            </p>
          </div>
        </div>
      </div>

      <div class="dga-col-md-6 dga-pb-8">
        <div class="dga-d-flex dga-gap-4">
          <div><img src="../assets/dga/square-lock-password.svg" alt="" /></div>
          <div class="dga-w-full dga-d-flex dga-flex-col dga-gap-2">
            <h3 class="dga-text-xl dga-fw-bold">
              المواقع الالكترونية الحكومية تستخدم بروتوكول
              <span class="dga-text-primary-500">HTTPS</span> للتشفير و الأمان.
            </h3>
            <p>
              المواقع الالكترونية الآمنة في المملكة العربية السعودية تستخدم
              بروتوكول HTTPS للتشفير.
            </p>
          </div>
        </div>
      </div>

      <div class="dga-col-12">
        <div class="dga-d-flex dga-align-items-center dga-gap-3 dga-bg-white dga-text-md dga-rounded-md dga-py-2 dga-px-7">
          <img src="../assets/dga/DGA-logo-icon.svg" alt="" />
          مسجل لدى هيئة الحكومة الرقمية برقم :
          <a
            href="https://raqmi.dga.gov.sa/platforms/platforms/9ebc5e60-9081-4653-bfb9-08dd2a2f8633/platform-license"
            class="dga-link">
            20250105758
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
```

Adjust image `src` paths to where your assets are served from (e.g. `../assets/dga/` in static HTML, `/assets/dga/` from `public/`, or imported URLs in Vue).

<Demo title="Plain HTML preview">

<VerifyBarDemo />

</Demo>

### JavaScript

```js
import { DGAVerifyBar } from '@waaelg/dga-design-system'

const verifyBar = new DGAVerifyBar()
```

Pair with `DGAMenuDropDown` when you also have a navbar:

```js
import { DGAVerifyBar, DGAMenuDropDown } from '@waaelg/dga-design-system'

const menu = new DGAMenuDropDown({ navbar: document.querySelector('.dga-navbar') })
const verifyBar = new DGAVerifyBar({ menu })
menu.verifyBar = verifyBar
```

### Vue / Vite

```vue
<script setup>
import { onMounted, onUnmounted } from 'vue'
import { DGAVerifyBar } from '@waaelg/dga-design-system'

let verifyBar

onMounted(() => {
  verifyBar = new DGAVerifyBar()
})

onUnmounted(() => {
  verifyBar?.destroy()
})
</script>

<template>
  <!-- paste the Plain HTML markup from above -->
</template>
```

Edit the HTML directly to change `.edu.sa`, registration link, registration number, and image paths.

---

## Styling

- Root: `dga-bg-gray-100` + `closed` (collapsed) or `opend` (expanded)
- Toggle: `dga-btn dga-btn-subtle dga-text-primary-500` on `#dga-verifyBtn`
- Panel visibility is controlled by `closed` / `opend` classes in `verifyBar.scss`
- Arabic copy by default

---

## Related

- [Navbar](./navbar.md) — coordinate open/close with mobile menu
- [JavaScript API](../getting-started/javascript-api.md)
- [RTL & Arabic](../getting-started/rtl-arabic.md)
