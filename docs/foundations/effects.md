# Effects

Elevation (box-shadow) and backdrop-blur utilities for the DGA design system.

**Source:** `src/styles/utilities/effects.scss` · `src/styles/variables/shadow.scss`

---

## Quick start (npm)

```js
import '@waaelg/dga-design-system/style.css'
```

```html
<div class="dga-card dga-shadow-md">Elevated card</div>
<div class="dga-shadow-xl dga-rounded-lg">Floating panel</div>
<div class="dga-backdrop-blur-md">Frosted overlay</div>
```

---

## Shadow scale

The Platforms Code elevation scale. Shadow color is `#101828`; larger levels layer two shadows for a softer, more natural falloff.

| Class | Elevation | Typical use |
|-------|-----------|-------------|
| `dga-shadow-none` | none | Reset / flatten |
| `dga-shadow-xs` | subtle | Inputs, small buttons |
| `dga-shadow-sm` | low | Buttons, small cards |
| `dga-shadow-md` | medium | **Default** — cards, panels |
| `dga-shadow-lg` | high | Dropdowns, popovers |
| `dga-shadow-xl` | higher | Modals, menus |
| `dga-shadow-2xl` | very high | Large dialogs |
| `dga-shadow-3xl` | max | Full-screen overlays |

```html
<button class="dga-btn dga-btn-primary dga-shadow-sm">Button</button>
<div class="dga-shadow-lg dga-rounded-lg dga-bg-white">Dropdown</div>
```

---

## Backdrop blur

Applies `backdrop-filter: blur(...)` (with a `-webkit-` prefix for Safari) to blur whatever sits behind an element — useful for frosted overlays, sticky bars, and modal scrims.

| Class | Blur |
|-------|------|
| `dga-backdrop-blur-sm` | 8px |
| `dga-backdrop-blur-md` | 16px |
| `dga-backdrop-blur-lg` | 24px |
| `dga-backdrop-blur-xl` | 40px |

```html
<div class="dga-backdrop-blur-md" style="background: rgba(255,255,255,0.6);">
  Frosted panel over content
</div>
```

> **Note:** `backdrop-filter` needs a translucent background to be visible, and is ignored by a few older browsers — always keep the content readable without it.

---

## Elevation guidance

- **Do** — use subtle elevation (`xs`–`md`) for most surfaces; reserve `xl`+ for genuinely floating layers (modals, menus).
- **Avoid** — stacking many heavy shadows, which flattens the hierarchy and adds visual noise.

---

## SCSS (contributors)

Every level is also available as a variable, plus elevation mixins:

```scss
@import 'variables/shadow';

.my-card {
  box-shadow: $dga-shadow-md;      // or @include dga-elevation('md');
}

.modal-scrim {
  backdrop-filter: $dga-backdrop-blur-md;
}
```

Shadow variables: `$dga-shadow-xs … $dga-shadow-3xl`. Backdrop blur: `$dga-backdrop-blur-sm … -xl`.

---

## Related

- [Border radius](./radius.md)
- [Colors](./colors.md)
