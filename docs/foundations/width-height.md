# Width & Height

Fixed, percentage, and viewport sizing utilities (`dga-w-*`, `dga-h-*`).

**Source:** `src/styles/utilities/width.scss`, `src/styles/utilities/height.scss`

---

## Quick start (npm)

```js
import '@waaelg/dga-design-system/style.css'
```

```html
<div class="dga-w-full dga-h-screen dga-d-flex dga-flex-column">
  <header class="dga-h-16">Header</header>
  <main class="dga-flex-1 dga-min-h-0">Content</main>
</div>
```

Common classes: `dga-w-full`, `dga-w-50`, `dga-h-full`, `dga-h-screen`, `dga-min-h-screen`, `dga-max-w-lg`.

---

## Table of Contents

1. [Overview](#overview)
2. [Quick Reference](#quick-reference)
3. [Width Utilities](#width-utilities)
4. [Height Utilities](#height-utilities)
5. [Named Sizes](#named-sizes)
6. [Spacing Scale](#spacing-scale)
7. [Percentage & Fractions](#percentage--fractions)
8. [Max & Min Variants](#max--min-variants)
9. [Examples](#examples)
10. [SCSS Source (Contributors)](#scss-source-contributors)
11. [Troubleshooting](#troubleshooting)

---

## Overview

Width and height utilities follow the same naming pattern:

| Pattern | Width | Height |
|---------|-------|--------|
| Fixed / named | `dga-w-{size}` | `dga-h-{size}` |
| Max | `dga-max-w-{size}` | `dga-max-h-{size}` |
| Min | `dga-min-w-{size}` | `dga-min-h-{size}` |

**Source files:**

- `src/styles/utilities/width.scss`
- `src/styles/utilities/height.scss`
- `src/styles/variables/spacing.scss` — shared size tokens (`$dga-widths`, `$dga-heights`)

---

## Quick Reference

| Goal | Class |
|------|-------|
| Full width of parent | `dga-w-full` or `dga-w-100` |
| Full height of parent | `dga-h-full` or `dga-h-100` |
| Full viewport width | `dga-w-screen` |
| Full viewport height | `dga-h-screen` or `dga-min-h-screen` |
| Half width / height | `dga-w-1-2` / `dga-h-1-2` |
| Auto size | `dga-w-auto` / `dga-h-auto` |
| 16px height (spacing scale) | `dga-h-4` |
| 640px height (named `lg`) | `dga-h-lg` |

---

## Width Utilities

### Utility values

| Class | CSS |
|-------|-----|
| `dga-w-auto` | `width: auto` |
| `dga-w-full` | `width: 100%` |
| `dga-w-screen` | `width: 100vw` |
| `dga-w-min` | `width: min-content` |
| `dga-w-max` | `width: max-content` |
| `dga-w-fit` | `width: fit-content` |

```html
<div class="dga-w-full">Spans parent width</div>
<div class="dga-w-screen">Spans viewport width</div>
<div class="dga-w-fit">Shrinks to content</div>
```

---

## Height Utilities

### Utility values

| Class | CSS |
|-------|-----|
| `dga-h-auto` | `height: auto` |
| `dga-h-full` | `height: 100%` |
| `dga-h-screen` | `height: 100vh` |
| `dga-h-min` | `height: min-content` |
| `dga-h-max` | `height: max-content` |
| `dga-h-fit` | `height: fit-content` |

```html
<!-- Fill parent height (parent must have a defined height) -->
<div class="dga-h-full">Full height</div>

<!-- Full viewport height -->
<section class="dga-min-h-screen">Hero section</section>
```

> **Note:** `dga-w-screen` uses `100vw` while `dga-h-screen` uses `100vh`.

---

## Named Sizes

Both width and height share the same named breakpoint scale:

| Class suffix | Size |
|--------------|------|
| `xxs` | 320px |
| `xs` | 384px |
| `sm` | 480px |
| `md` | 560px |
| `lg` | 640px |
| `xl` | 768px |
| `2xl` | 1024px |
| `3xl` | 1280px |
| `4xl` | 1440px |
| `5xl` | 1600px |
| `6xl` | 1920px |

```html
<div class="dga-w-md dga-h-lg">560px wide, 640px tall</div>
<img class="dga-w-sm dga-h-sm" src="thumb.jpg" alt="">
```

---

## Spacing Scale

Use numeric keys from the 4px spacing scale (`1` = 4px, `4` = 16px, `8` = 32px, etc.):

```html
<div class="dga-w-16">64px wide</div>
<div class="dga-h-10">40px tall</div>
<div class="dga-w-96">384px wide</div>
```

Common spacing keys: `0`, `px`, `0_5`, `1`, `2`, `3`, `4`, `5`, `6`, `8`, `10`, `12`, `16`, `20`, `24`, `32`, `48`, `64`, `96`, `120`, … `480`.

---

## Percentage & Fractions

| Class | Value |
|-------|-------|
| `dga-w-0` / `dga-h-0` | 0% |
| `dga-w-25` / `dga-h-25` | 25% |
| `dga-w-50` / `dga-h-50` | 50% |
| `dga-w-75` / `dga-h-75` | 75% |
| `dga-w-100` / `dga-h-100` | 100% |
| `dga-w-1-2` / `dga-h-1-2` | 50% |
| `dga-w-1-3` / `dga-h-1-3` | 33.333% |
| `dga-w-2-3` / `dga-h-2-3` | 66.667% |
| `dga-w-1-4` / `dga-h-1-4` | 25% |
| `dga-w-3-4` / `dga-h-3-4` | 75% |
| `dga-w-1-12` … `dga-w-12-12` | 12-column fractions |

```html
<div class="dga-row">
  <div class="dga-h-1-2 dga-w-1-2">Half width and height</div>
</div>
```

---

## Max & Min Variants

Same value sets apply to `max-*` and `min-*` prefixes:

```html
<!-- Cap width, allow content to shrink -->
<div class="dga-max-w-3xl dga-w-full">Responsive capped content</div>

<!-- At least viewport tall -->
<main class="dga-min-h-screen">Page body</main>

<!-- Fixed max height with scroll -->
<div class="dga-max-h-lg dga-overflow-auto">Scrollable panel</div>

<!-- Prevent shrinking below content -->
<div class="dga-min-w-min">Won't clip text</div>
```

---

## Examples

### Full-height page layout

```html
<body class="dga-d-flex dga-flex-col dga-min-h-screen">
  <header>Header</header>
  <main class="dga-flex-grow-1">Content</main>
  <footer>Footer</footer>
</body>
```

### Centered hero (no inline height)

```html
<section class="dga-d-flex dga-align-items-center dga-justify-content-center dga-min-h-screen">
  <div class="dga-container">
    <h1>Welcome</h1>
    <p>Your tagline here</p>
  </div>
</section>
```

### Card with fixed image area

```html
<div class="dga-card">
  <div class="dga-w-full dga-h-48 dga-bg-gray-100"></div>
  <div class="dga-p-4">
    <h3>Card title</h3>
    <p>Card body</p>
  </div>
</div>
```

### Sidebar + content

```html
<div class="dga-d-flex dga-min-h-screen">
  <aside class="dga-w-64 dga-h-full">Sidebar</aside>
  <main class="dga-flex-grow-1 dga-w-full">Main</main>
</div>
```

---

## SCSS Source (Contributors)

```scss
@import 'utilities/width';
@import 'utilities/height';

@include generate-all-width-utilities();
@include generate-all-height-utilities();
```

Height tokens reuse the width scale with one override:

```scss
$dga-heights: map.merge(
  $dga-widths,
  (
    "screen": 100vh,
  )
);
```

---

## Troubleshooting

### `dga-h-full` has no effect

**Cause:** Parent has no explicit height.

**Fix:** Set height on the parent chain, or use `dga-min-h-screen` / `dga-h-screen` on a top-level wrapper.

```html
<!-- Parent needs height -->
<div class="dga-min-h-screen">
  <div class="dga-h-full">Now fills parent</div>
</div>
```

### `dga-h-screen` causes scrollbars

**Cause:** `100vh` includes space under mobile browser chrome, or padding/margin adds overflow.

**Fix:** Use `dga-min-h-screen` instead of `dga-h-screen`, or combine with flex layout.

### Width works but height utility missing

**Cause:** Older published package before height utilities were added.

**Fix:** Update `@waaelg/dga-design-system` to the latest version and rebuild.

---

## Related Documentation

- [Grid & Flex](./grid.md) — layout, flexbox, containers
- [README](../README.md) — npm install and usage
