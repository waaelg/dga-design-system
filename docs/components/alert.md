# Alert

Feedback messages for success, warning, error, info, and neutral states.

**Source:** `src/styles/components/alert.scss`, `src/scripts/alert.js`, `src/scripts/dga-alert.js`  
**Demo:** `alerts.html`  
**JavaScript:** Optional — web component or `DGAAlert` class

---

## Option 1: Web component (recommended)

Import the package once — registers `<dga-alert>` automatically:

```html
<dga-alert variant="success-color" title="Success" dismissible>
  When successful actions need direct feedback, show it here.
</dga-alert>
```

<Demo title="Preview" client>

<dga-alert variant="success-color" title="Success" dismissible>
  When successful actions need direct feedback, show it here.
</dga-alert>

</Demo>

### Attributes

| Attribute | Default | Description |
|-----------|---------|-------------|
| `variant` | `info-color` | Alert theme (see variants below) |
| `title` | — | Optional heading |
| `dismissible` | — | Present = show close button |

```html
<div class="dga-d-flex dga-flex-col dga-gap-3">
  <dga-alert variant="success-color" title="Success">Operation completed successfully.</dga-alert>
  <dga-alert variant="warning-color" title="Warning">Please review before continuing.</dga-alert>
  <dga-alert variant="destructive-color" title="Error">Something went wrong.</dga-alert>
  <dga-alert variant="info-white">Informational message without dismiss.</dga-alert>
</div>
```

<Demo title="Preview" client>

<div class="dga-d-flex dga-flex-col dga-gap-3">
  <dga-alert variant="success-color" title="Success">Operation completed successfully.</dga-alert>
  <dga-alert variant="warning-color" title="Warning">Please review before continuing.</dga-alert>
  <dga-alert variant="destructive-color" title="Error">Something went wrong.</dga-alert>
  <dga-alert variant="info-white">Informational message without dismiss.</dga-alert>
</div>

</Demo>

Dismiss fires `dga-alert-dismiss` on the element. No `new DGAAlert()` required.

Works in plain HTML, ASP.NET `.cshtml`, and SPA frameworks — see [Web Components](../getting-started/web-components.md).

---

## Option 2: Legacy markup + DGAAlert

Alerts are **HTML + CSS**. Initialize `DGAAlert` once to handle close buttons.

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

<Demo title="Preview">

<div class="dga-alert" data-variant="success-color">
  <span class="dga-alert-icon" aria-hidden="true"></span>
  <div class="dga-alert-content">
    <h4 class="dga-alert-title">Success</h4>
    <div class="dga-alert-body">Operation completed successfully.</div>
  </div>
  <button class="dga-alert-close" type="button" data-alert-close aria-label="Dismiss alert">×</button>
</div>

</Demo>

```js
import { DGAAlert } from '@waaelg/dga-design-system'
new DGAAlert()
```

---

## HTML structure (legacy)

| Element | Class | Required |
|---------|-------|----------|
| Root | `dga-alert` | Yes |
| Icon | `dga-alert-icon` | Recommended |
| Content wrapper | `dga-alert-content` | Yes |
| Title | `dga-alert-title` | Optional |
| Body | `dga-alert-body` | Yes |
| Close button | `dga-alert-close` + `data-alert-close` | Optional |

Set variant on the root: `data-variant="success-color"` (legacy) or `variant="success-color"` (web component).

---

## Variants

Two themes: **color** (filled accent) and **white** (light background).

| Value | Status |
|-------|--------|
| `success-color` | Success (color theme) |
| `success-white` | Success (white theme) |
| `warning-color` | Warning (color) |
| `warning-white` | Warning (white) |
| `destructive-color` | Error / destructive (color) |
| `destructive-white` | Error / destructive (white) |
| `info-color` | Info (color) |
| `info-white` | Info (white) |
| `neutral-color` | Neutral (color) |
| `neutral-white` | Neutral (white) |

Use **color** variants on light pages; **white** variants on dense or colored backgrounds.

---

## JavaScript (legacy)

### Vanilla

```js
import '@waaelg/dga-design-system/style.css'
import { DGAAlert } from '@waaelg/dga-design-system'

const alert = new DGAAlert()
// alert.destroy() when removing listener
```

Listens for clicks on `[data-alert-close]` and hides the parent `.dga-alert`.

For new projects, prefer `<dga-alert>` instead — see [Web Components](../getting-started/web-components.md).

---

## Accessibility

- Close button: `aria-label` (e.g. "Dismiss alert" / "إغلاق")
- Icon: `aria-hidden="true"` (decorative)
- Use clear title + body text
- Do not rely on color alone — title conveys status

---

## Related

- [Web Components](../getting-started/web-components.md)
- [JavaScript API](../getting-started/javascript-api.md)
- [Colors](../foundations/colors.md)
