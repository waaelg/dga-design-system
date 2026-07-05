# Button

Primary action component for the DGA design system.

**Source:** `src/styles/components/button.scss`  
**Demo:** `index.html` (Buttons section)  
**JavaScript required:** No

---

## Overview

Buttons use the base class `dga-btn` plus a variant and optional size modifier.

```html
<button class="dga-btn dga-btn-primary dga-btn-md">Primary action</button>
```

<Demo title="Preview">

<button class="dga-btn dga-btn-primary dga-btn-md">Primary action</button>

</Demo>

---

## Base class

| Class | Required |
|-------|----------|
| `dga-btn` | Yes |

Always use a `<button>` element (or `<a>` styled as button for navigation).

---

## Variants

| Class | Use case |
|-------|----------|
| `dga-btn-primary` | Main action (Saudi green) |
| `dga-btn-primary-outline` | Secondary emphasis, outline |
| `dga-btn-neutral` | Dark neutral action |
| `dga-btn-secondary-solid` | Secondary filled |
| `dga-btn-secondary-outline` | Secondary outline |
| `dga-btn-subtle` | Low emphasis |
| `dga-btn-transparent` | Minimal, on colored backgrounds |
| `dga-btn-ghost` | Ghost style (green text) |
| `dga-btn-destructive` | Delete / dangerous actions |
| `dga-btn-destructive-outline` | Destructive outline |
| `dga-btn-success` | Success action |
| `dga-btn-warning` | Warning action |
| `dga-btn-info` | Info action |

```html
<div class="dga-d-flex dga-flex-wrap dga-gap-3 dga-align-items-center">
  <button class="dga-btn dga-btn-primary dga-btn-md">Primary</button>
  <button class="dga-btn dga-btn-primary-outline dga-btn-md">Primary outline</button>
  <button class="dga-btn dga-btn-neutral dga-btn-md">Neutral</button>
  <button class="dga-btn dga-btn-secondary-solid dga-btn-md">Secondary solid</button>
  <button class="dga-btn dga-btn-secondary-outline dga-btn-md">Secondary outline</button>
  <button class="dga-btn dga-btn-subtle dga-btn-md">Subtle</button>
  <button class="dga-btn dga-btn-ghost dga-btn-md">Ghost</button>
  <button class="dga-btn dga-btn-destructive dga-btn-md">Destructive</button>
  <button class="dga-btn dga-btn-destructive-outline dga-btn-md">Destructive outline</button>
  <button class="dga-btn dga-btn-success dga-btn-md">Success</button>
  <button class="dga-btn dga-btn-warning dga-btn-md">Warning</button>
  <button class="dga-btn dga-btn-info dga-btn-md">Info</button>
</div>
```

<Demo title="Preview">

<div class="dga-d-flex dga-flex-wrap dga-gap-3 dga-align-items-center">
  <button class="dga-btn dga-btn-primary dga-btn-md">Primary</button>
  <button class="dga-btn dga-btn-primary-outline dga-btn-md">Primary outline</button>
  <button class="dga-btn dga-btn-neutral dga-btn-md">Neutral</button>
  <button class="dga-btn dga-btn-secondary-solid dga-btn-md">Secondary solid</button>
  <button class="dga-btn dga-btn-secondary-outline dga-btn-md">Secondary outline</button>
  <button class="dga-btn dga-btn-subtle dga-btn-md">Subtle</button>
  <button class="dga-btn dga-btn-ghost dga-btn-md">Ghost</button>
  <button class="dga-btn dga-btn-destructive dga-btn-md">Destructive</button>
  <button class="dga-btn dga-btn-destructive-outline dga-btn-md">Destructive outline</button>
  <button class="dga-btn dga-btn-success dga-btn-md">Success</button>
  <button class="dga-btn dga-btn-warning dga-btn-md">Warning</button>
  <button class="dga-btn dga-btn-info dga-btn-md">Info</button>
</div>

</Demo>

---

## Sizes

| Class | Height | Font size |
|-------|--------|-----------|
| `dga-btn-sm` | 24px | 12px |
| `dga-btn-md` | 32px | 14px (default) |
| `dga-btn-lg` | 40px | 16px |

If no size class is set, **medium** (`md`) applies.

```html
<div class="dga-d-flex dga-gap-3 dga-align-items-center">
  <button class="dga-btn dga-btn-primary dga-btn-sm">Small</button>
  <button class="dga-btn dga-btn-primary dga-btn-md">Medium</button>
  <button class="dga-btn dga-btn-primary dga-btn-lg">Large</button>
</div>
```

<Demo title="Preview">

<div class="dga-d-flex dga-gap-3 dga-align-items-center">
  <button class="dga-btn dga-btn-primary dga-btn-sm">Small</button>
  <button class="dga-btn dga-btn-primary dga-btn-md">Medium</button>
  <button class="dga-btn dga-btn-primary dga-btn-lg">Large</button>
</div>

</Demo>

---

## Icons

| Class | Purpose |
|-------|---------|
| `dga-btn__icon` | Icon inside button |
| `dga-btn-icon-only` | Icon-only button (square) |
| `dga-btn-icon-left` | Icon on left (LTR) |
| `dga-btn-icon-right` | Icon on right (LTR) |

```html
<!-- Text + icon -->
<button class="dga-btn dga-btn-primary dga-btn-md">
  Primary action
  <img class="dga-btn__icon" src="arrow.svg" alt="" />
</button>

<!-- Icon only -->
<button class="dga-btn dga-btn-primary dga-btn-md dga-btn-icon-only" aria-label="Next">
  <img class="dga-btn__icon" src="arrow.svg" alt="" />
</button>
```

Always provide `aria-label` on icon-only buttons.

---

## Modifiers

| Class | Effect |
|-------|--------|
| `dga-btn-block` | Full width |
| `dga-btn-pill` | Pill border radius |
| `dga-btn-disabled` | Disabled style |
| `disabled` attribute | Native disabled state |

```html
<div class="dga-d-flex dga-flex-col dga-gap-3">
  <button class="dga-btn dga-btn-primary dga-btn-md dga-btn-block">Full width</button>
  <button class="dga-btn dga-btn-primary dga-btn-md dga-btn-pill">Pill button</button>
  <button class="dga-btn dga-btn-primary dga-btn-md" disabled>Disabled</button>
</div>
```

<Demo title="Preview">

<div class="dga-d-flex dga-flex-col dga-gap-3">
  <button class="dga-btn dga-btn-primary dga-btn-md dga-btn-block">Full width</button>
  <button class="dga-btn dga-btn-primary dga-btn-md dga-btn-pill">Pill button</button>
  <button class="dga-btn dga-btn-primary dga-btn-md" disabled>Disabled</button>
</div>

</Demo>

---

## Button groups

```html
<div class="dga-btn-group">
  <button class="dga-btn dga-btn-secondary-outline dga-btn-md">Left</button>
  <button class="dga-btn dga-btn-secondary-outline dga-btn-md">Right</button>
</div>
```

<Demo title="Preview">

<div class="dga-btn-group">
  <button class="dga-btn dga-btn-secondary-outline dga-btn-md">Left</button>
  <button class="dga-btn dga-btn-secondary-outline dga-btn-md">Right</button>
</div>

</Demo>

---

## Full example

```html
<div class="dga-d-flex dga-flex-col dga-gap-3 dga-align-items-start">
  <button class="dga-btn dga-btn-primary dga-btn-md">Primary action</button>
  <button class="dga-btn dga-btn-neutral dga-btn-md">Neutral</button>
  <button class="dga-btn dga-btn-subtle dga-btn-md">Subtle action</button>
</div>
```

<Demo title="Preview">

<div class="dga-d-flex dga-flex-col dga-gap-3 dga-align-items-start">
  <button class="dga-btn dga-btn-primary dga-btn-md">Primary action</button>
  <button class="dga-btn dga-btn-neutral dga-btn-md">Neutral</button>
  <button class="dga-btn dga-btn-subtle dga-btn-md">Subtle action</button>
</div>

</Demo>

---

## Accessibility

- Use `<button type="button">` for actions, `type="submit"` for forms.
- Icon-only buttons need `aria-label`.
- Disabled buttons: `disabled` attribute or `dga-btn-disabled`.
- Focus styles are built in (`:focus-visible`).

---

## Do / Don't

| Do | Don't |
|----|-------|
| `dga-btn dga-btn-primary dga-btn-md` | `dga-btn-large` (invalid — use `dga-btn-lg`) |
| `<button class="dga-btn">` | `<div class="dga-btn">` |
| `aria-label` on icon-only | Icon-only without label |

---

## Related

- [Colors](../foundations/colors.md)
- [Spacing](../foundations/spacing.md)
