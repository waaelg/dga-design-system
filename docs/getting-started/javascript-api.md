# JavaScript API

The package exports **plain JavaScript classes**, not Vue/React components.

```js
import {
  DGAAccordion,
  DGAAlert,
  DGAChart,
  DGACodeSnippet,
  DGAMenuDropDown,
  DGAVerifyBar,
} from '@waaelg/dga-design-on-sass'
```

Importing the main entry also registers these custom elements:

| Element | Legacy class |
|---------|--------------|
| `<dga-alert>` | `DGAAlert` |
| `<dga-accordion>` | `DGAAccordion` |
| `<dga-code-snippet>` | `DGACodeSnippet` |
| `<dga-pie-chart>` | `DGAChart` |
| `<dga-verify-bar>` | `DGAVerifyBar` |

See [Web Components](./web-components.md) for plain HTML, ASP.NET, and framework usage.

---

## Important rules

1. **Use HTML + `dga-*` classes** or **`<dga-*>` web components** — do not use `<DGAAlert />` in Vue/React.
2. **Call `new ClassName()`** after the DOM is ready (legacy markup only).
3. **CSS-only components** (button, card, forms) need no JavaScript.

---

## DGAAccordion

**Web component:** `<dga-accordion>` with `<dga-accordion-item>` — no init required.

**Legacy:** root element with class `dga-acc`

```html
<div class="dga-acc" id="faq">
  <div class="dga-acc-item">
    <button class="dga-acc-header" aria-expanded="false">
      <span>Question</span>
    </button>
    <div class="dga-acc-content">
      <div class="dga-acc-body">Answer</div>
    </div>
  </div>
</div>
```

```js
new DGAAccordion(document.getElementById('faq'))
```

Supports click and keyboard (Enter / Space).

---

## DGAAlert

**Web component:** `<dga-alert variant="info-color" dismissible>` — no init required.

**Legacy:** `.dga-alert` and close button with `[data-alert-close]`

```js
new DGAAlert() // listens on document
```

See [Alert component](../components/alert.md).

---

## DGAChart

**Web component:** `<dga-pie-chart data='[...]'>` — no init required.

**Legacy:** element with class `dga-pie-chart`

```html
<div id="chart" class="dga-pie-chart" data-hole="false"></div>
```

```js
new DGAChart(document.getElementById('chart'), [
  { label: 'Item 1', from: '0%', to: '40%', color: 'var(--dga-primary-100)' },
  { label: 'Item 2', from: '40%', to: '100%', color: 'var(--dga-gray-200)' },
])
```

Set `data-hole="true"` for donut style.

---

## DGACodeSnippet

**Web component:** `<dga-code-snippet code="...">` — no init required.

**Legacy:** initialize once for copy on manual markup:

```js
new DGACodeSnippet()
```

Copy buttons: `.dga-code-snippet-inline__copy` or `.dga-code-snippet-multiline__copy`

---

## DGAMenuDropDown

**Requires:** `.dga-navbar` with `.dga-menu` and `.dga-navbar-toggler`

```js
new DGAMenuDropDown({ navbar: document.querySelector('.dga-navbar') })
```

---

## DGAVerifyBar

**Requires:** legacy IDs: `#dga-verify-bar`, `#dga-verifyBtn`, `#dga-verify-bar_content`

```js
const verifyBar = new DGAVerifyBar()
const menu = new DGAMenuDropDown()
verifyBar.menu = menu
menu.verifyBar = verifyBar
```

**Alternative:** use `<dga-verify-bar>` web component (no manual init).

---

## Web components summary

```html
<dga-alert variant="success-color" title="Done" dismissible>Message</dga-alert>

<dga-accordion>
  <dga-accordion-item title="Question">Answer</dga-accordion-item>
</dga-accordion>

<dga-code-snippet code="npm install @waaelg/dga-design-on-sass"></dga-code-snippet>

<dga-pie-chart data='[{"label":"A","from":"0%","to":"50%","color":"primary-100"}]'></dga-pie-chart>

<dga-verify-bar></dga-verify-bar>
```

Full guide: [Web Components](./web-components.md).

---

## Vue example (legacy)

```vue
<script setup>
import { onMounted, onUnmounted } from 'vue'
import { DGAAlert } from '@waaelg/dga-design-on-sass'

let alertInstance

onMounted(() => {
  alertInstance = new DGAAlert()
})

onUnmounted(() => {
  alertInstance?.destroy()
})
</script>

<template>
  <div class="dga-alert" data-variant="success-color">
    <!-- ... -->
    <button class="dga-alert-close" data-alert-close aria-label="Close">×</button>
  </div>
</template>
```

---

## Vite troubleshooting

If you see `does not provide an export named 'DGAAlert'`:

```bash
rm -rf node_modules/.vite
npm run dev
```

See [Installation](./installation.md#vite--vue).

---

## Related

- [Web Components](./web-components.md)
- [Installation](./installation.md)
- [Components index](../README.md#components)
