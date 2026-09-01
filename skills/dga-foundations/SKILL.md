---
name: dga-foundations
description: Quick reference for the DGA (Saudi Digital Government Authority) design system's token-level utility classes — colors, spacing, typography, border radius, grid/flex, and width/height. Use when writing or reviewing any HTML/CSS in a project that uses @waaelg/dga-design-system and the task is "use the right DGA token/class" rather than building a specific component. Use when the user explicitly mentions DGA or the design system package. Do NOT use for generic CSS questions unrelated to this package.
---

# DGA Foundations Reference

Token-level utility classes from `@waaelg/dga-design-system`, for any HTML/CSS work — not just components. Goal: replace hardcoded colors, spacing, font sizes, and radii with the matching DGA class. Verified against `docs/foundations/*.md` and `docs/getting-started/rtl-arabic.md`.

```js
import '@waaelg/dga-design-system/style.css'
```

## Colors

8 palettes × 12 shades (25→950, 500 = main/default): `gray`, `primary` (Saudi Green, `#25935f` at 500), `gold`, `lavender`, `error`, `warning`, `info`, `success`.

**Pattern:** `.dga-{property}-{palette}-{shade}` for `text`, `bg`, `border`:
```
dga-text-primary-500   dga-bg-gray-50   dga-border-error-200
```

**Semantic shortcuts** (map to a fixed shade — prefer these over raw shades for UI states):
```
dga-bg-primary   dga-bg-secondary   dga-bg-success   dga-bg-info   dga-bg-warning   dga-bg-danger   dga-bg-light   dga-bg-dark
dga-text-primary   dga-text-secondary   dga-text-muted   dga-text-white   dga-text-black   dga-text-inverse   dga-text-brand
dga-text-error   dga-text-warning   dga-text-success   dga-text-info   dga-text-danger
dga-border-primary   dga-border-secondary   dga-border-success   dga-border-danger
```
Note: `dga-text-primary` means "primary text color" (gray-950, for body copy hierarchy), not "Saudi Green text" — for the brand color use `dga-text-primary-500` or `dga-text-brand`.

**Borders:** `.dga-border` sets the default border (`gray-200`) — border color utilities only set `border-color`, so pair them: `class="dga-border dga-border-primary-300"`. Directional: `dga-border-top/right/bottom/left`, `dga-border-none`.

**Gradients:** `dga-bg-gradient-{primary|secondary|dark|medium|subtle|deep}` — all Saudi-Green-based. Use sparingly (hero sections, card headers), not on body text or form inputs.

**Hover/focus:**
```
.dga-{property}-{palette}-{shade}-hover:hover     /* e.g. dga-bg-primary-600-hover */
dga-focus-ring-{primary|error|warning|success|info}   /* always add to interactive elements */
```

**Accessibility:** WCAG AA = 4.5:1 contrast. Use light backgrounds (`-50`) with dark text (`-700`) for alerts/badges, not saturated `-500` backgrounds with white text for large text blocks. Full detail: `docs/foundations/colors.md`.

## Spacing

Base unit: **4px** (numeric key `1` = 4px, `4` = 16px, `8` = 32px…).

```
dga-p-4   dga-pt-4   dga-pb-4   dga-pl-4   dga-pr-4   dga-px-4   dga-py-4    /* padding */
dga-m-4   dga-mt-4   dga-mb-4   dga-mx-4   dga-my-4   dga-mx-auto            /* margin */
```

Named scale (semantic): `xxs` 2px, `xs` 4px, `sm` 6px, `md` 8px, `lg` 12px, `xl` 16px, `2xl` 20px, `3xl` 24px, `4xl` 32px … up to `11xl` (160px). Use as `dga-p-lg`, `dga-mb-xl`.

**Gap** (prefer over margin between flex/grid children): `dga-gap-4` (all directions), `dga-gap-x-4` / `dga-gap-y-4`, or named `dga-gap-md` / `dga-gap-lg`.

## Typography

Default font: **IBM Plex Sans Arabic** (loads automatically with the stylesheet).

```
dga-display-{2xl|xl|lg|md|sm|xs}   /* 72→24px, headings/hero (2xl–md carry -2% tracking) */
dga-text-{xl|lg|md|sm|xs|2xs}      /* 20→12px, body text */
dga-fw-{regular|medium|semibold|bold}   /* 400/500/600/700 */
```

Alignment — prefer logical over physical for RTL: `dga-text-start` / `dga-text-end` over `dga-text-left` / `dga-text-right`. `dga-text-center` is direction-neutral. Responsive variants exist: `dga-text-md-center`, `dga-text-sm-start`.

Combine with color utilities for hierarchy:
```html
<h1 class="dga-display-md dga-fw-bold dga-text-gray-950">Dashboard</h1>
<p class="dga-text-md dga-text-gray-700">Section description.</p>
<span class="dga-text-xs dga-text-gray-500">Caption</span>
```

## Border radius

```
dga-rounded-{none|xs|sm|md|lg|xl|full}   /* 0, 2, 4, 8(default), 16, 24, pill/circle */
```
Directional: `dga-rounded-t-*` / `-b-*` / `-l-*` / `-r-*` (side pairs), `dga-rounded-tl-*` / `-tr-*` / `-bl-*` / `-br-*` (single corners).

Component defaults for consistency: buttons/inputs `md` (8px), cards `lg` (16px), modals `xl` (24px), tags `sm` (4px), avatars/badges `full`.

## Shadows & effects

Elevation scale (shadow color `#101828`; larger levels layer two shadows):
```
dga-shadow-{none|xs|sm|md|lg|xl|2xl|3xl}   /* xs/sm subtle → md default (cards) → xl+ floating layers */
dga-backdrop-blur-{sm|md|lg|xl}            /* 8/16/24/40px; frosted overlays — needs a translucent bg */
```
Prefer subtle elevation (`xs`–`md`) for most surfaces; reserve `xl`+ for genuinely floating layers (modals, menus).

## Grid & flex

```html
<div class="dga-container">
  <div class="dga-row">
    <div class="dga-col-12 dga-col-md-6">Column A</div>
    <div class="dga-col-12 dga-col-md-6">Column B</div>
  </div>
</div>
```

12-column, mobile-first. Breakpoints: (none) <576px, `sm` ≥576px, `md` ≥768px, `lg` ≥992px, `xl` ≥1200px, `xxl` ≥1280px. Always nest `dga-col-*` inside a `dga-row` inside a `dga-container` — columns directly in a container won't lay out correctly.

Flex utilities (usable without the grid):
```
dga-d-flex   dga-flex-row / dga-flex-col
dga-justify-content-{start|end|center|between|around|evenly}
dga-align-items-{start|end|center|baseline|stretch}
dga-flex-wrap / dga-flex-nowrap
```

## Width & height

```
dga-w-full / dga-w-100      dga-h-full / dga-h-100
dga-w-screen (100vw)        dga-h-screen / dga-min-h-screen (100vh)
dga-w-{xxs..6xl}             dga-h-{xxs..6xl}     /* named sizes, 320px→1920px */
dga-w-{0,4,8,16..}           dga-h-{...}           /* 4px spacing scale */
dga-w-1-2 / dga-w-1-3 / dga-w-1-4                  /* fractions */
dga-max-w-* / dga-min-w-* / dga-max-h-* / dga-min-h-*
```
`dga-h-full` needs a parent with an explicit height to fill — if it has no visible effect, put `dga-min-h-screen` (or another explicit height) on an ancestor first.

## RTL & Arabic

DGA targets Saudi government sites — assume `dir="rtl"` and Arabic content by default:
```html
<html lang="ar" dir="rtl">
```
Prefer logical utilities (`dga-text-start`/`dga-text-end`) over physical `left`/`right` ones everywhere in this reference — component chevrons/icons (breadcrumb, accordion) flip automatically under `dir="rtl"`, but custom layout code should use the logical classes too rather than hardcoding a direction.

## Related skills

- [`dga-vue-component`](../dga-vue-component/SKILL.md) — generating Vue 3 SFCs that apply these tokens.
- [`dga-web-components`](../dga-web-components/SKILL.md) — using DGA's interactive `<dga-*>` elements and JS classes.
