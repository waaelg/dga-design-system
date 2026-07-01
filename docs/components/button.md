# Button

Primary action component for the DGA design system.

**Source:** `src/styles/components/button.scss`  
**Demo:** `index.html` (Buttons section)  
**JavaScript required:** No

---

## Overview

Buttons use the base class `dga-btn` plus a variant and optional size modifier.

```html
<button class="dga-btn dga-btn-primary dga-btn-md">الاجراء الرئيسي</button>
```

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
<button class="dga-btn dga-btn-primary">Primary</button>
<button class="dga-btn dga-btn-secondary-outline">Secondary outline</button>
<button class="dga-btn dga-btn-destructive">Delete</button>
```

---

## Sizes

| Class | Height | Font size |
|-------|--------|-----------|
| `dga-btn-sm` | 24px | 12px |
| `dga-btn-md` | 32px | 14px (default) |
| `dga-btn-lg` | 40px | 16px |

If no size class is set, **medium** (`md`) applies.

```html
<button class="dga-btn dga-btn-primary dga-btn-sm">Small</button>
<button class="dga-btn dga-btn-primary dga-btn-lg">Large</button>
```

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
  الاجراء الرئيسي
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
<button class="dga-btn dga-btn-primary dga-btn-block" disabled>Full width</button>
```

---

## Button groups

```html
<div class="dga-btn-group">
  <button class="dga-btn dga-btn-secondary-outline">Left</button>
  <button class="dga-btn dga-btn-secondary-outline">Right</button>
</div>
```

---

## Full example

```html
<div class="dga-d-flex dga-flex-col dga-gap-3 dga-align-items-start">
  <button class="dga-btn dga-btn-primary dga-btn-md">
    الاجراء الرئيسي
    <img class="dga-btn__icon" src="arrow_left.svg" alt="" />
  </button>
  <button class="dga-btn dga-btn-neutral dga-btn-md">Neutral</button>
  <button class="dga-btn dga-btn-subtle dga-btn-md">اجراء دقيق</button>
</div>
```

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
