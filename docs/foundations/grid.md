# Grid & Flex

Responsive 12-column grid, flexbox utilities, display, gap, and layout helpers.

**Source:** `src/styles/utilities/grid.scss`, `src/styles/variables/grid.scss`

---

## Table of Contents

1. [Overview](#overview)
2. [Quick start (npm)](#quick-start-npm)
3. [For contributors (SCSS)](#for-contributors-scss)
4. [Getting Started](#getting-started)
5. [Grid Basics](#grid-basics)
6. [Containers](#containers)
7. [Rows](#rows)
8. [Columns](#columns)
9. [Responsive Design](#responsive-design)
10. [Flexbox Utilities](#flexbox-utilities)
11. [Width & Height Utilities](#width--height-utilities)
12. [Spacing & Gaps](#spacing--gaps)
13. [Display Utilities](#display-utilities)
14. [Position Utilities](#position-utilities)
15. [Aspect Ratios](#aspect-ratios)
16. [Configuration](#configuration)
17. [Examples](#examples)
18. [Best Practices](#best-practices)
19. [Troubleshooting](#troubleshooting)

---

## Overview

The DGA Grid System is a powerful, flexible, mobile-first grid framework built with SCSS. It provides:

- **12-column responsive grid** based on flexbox
- **6 responsive breakpoints** (xs, sm, md, lg, xl, xxl)
- **Configurable gutters** that adapt to screen size
- **Comprehensive utilities** for layout, spacing, sizing, and alignment
- **Dynamic generation** - easily customizable through SCSS variables

### Key Features

✅ Mobile-first responsive design  
✅ Flexbox-based for modern browser support  
✅ Consistent 12-column system across all breakpoints  
✅ Dynamic gutter system (16px mobile, 32px desktop)  
✅ Extensive flexbox utilities  
✅ Width and height utility classes (`dga-w-*`, `dga-h-*`, `dga-min-h-screen`, etc.)  
✅ Modern gap properties support  
✅ Aspect ratio utilities  
✅ Position and z-index utilities  

---

## Quick start (npm)

Import the stylesheet once, then use layout classes in HTML:

```js
import '@waaelg/dga-design-on-sass/style.css'
```

```html
<div class="dga-container">
  <div class="dga-row">
    <div class="dga-col-12 dga-col-md-6">Column A</div>
    <div class="dga-col-12 dga-col-md-6">Column B</div>
  </div>
</div>

<div class="dga-d-flex dga-flex-column dga-gap-4">
  <button class="dga-btn dga-btn-primary">Action</button>
</div>
```

| Related | Doc |
|---------|-----|
| Spacing & padding | [spacing.md](./spacing.md) |
| Width & height | [width-height.md](./width-height.md) |
| SCSS customization | [Configuration](#configuration) (repo contributors) |

---

## For contributors (SCSS)

### 1. Include the SCSS Files

```scss
// Import variables first
@import 'path/to/variables/spacing';
@import 'path/to/variables/grid';

// Then import utilities
@import 'path/to/utilities/width';
@import 'path/to/utilities/height';
@import 'path/to/utilities/grid';

// Generate utilities
@include generate-all-width-utilities();
@include generate-all-height-utilities();
@include generate-all-grid-utilities();
```

### 2. Or Generate Selectively

```scss
// Only generate what you need
@include generate-container-utilities();
@include generate-row-utilities();
@include generate-column-utilities();
@include generate-responsive-columns();
@include generate-flex-utilities();
@include generate-all-width-utilities();
@include generate-all-height-utilities();
```

---

## Getting Started

### Basic Grid Structure

```html
<div class="dga-container">
  <div class="dga-row">
    <div class="dga-col-12 dga-col-md-6 dga-col-lg-4">
      Column 1
    </div>
    <div class="dga-col-12 dga-col-md-6 dga-col-lg-4">
      Column 2
    </div>
    <div class="dga-col-12 dga-col-md-6 dga-col-lg-4">
      Column 3
    </div>
  </div>
</div>
```

### How It Works

1. **Container** - Centers and constrains your content
2. **Row** - Creates a flex container with negative margins for gutters
3. **Columns** - Flex items that respond to different screen sizes

---

## Grid Basics

### The 12-Column System

The grid divides horizontal space into 12 equal columns:

```
┌──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┬──┐
│ 1│ 2│ 3│ 4│ 5│ 6│ 7│ 8│ 9│10│11│12│
└──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┘
```

- `.dga-col-6` = 6/12 = 50% width
- `.dga-col-4` = 4/12 = 33.33% width
- `.dga-col-3` = 3/12 = 25% width

### Breakpoints

| Breakpoint | Class Infix | Dimensions | Device |
|------------|-------------|------------|--------|
| Extra small | (none) | <576px | Mobile portrait |
| Small | `sm` | ≥576px | Mobile landscape |
| Medium | `md` | ≥768px | Tablets |
| Large | `lg` | ≥992px | Desktops |
| Extra large | `xl` | ≥1200px | Large desktops |
| Extra extra large | `xxl` | ≥1280px | Larger desktops |

### Gutter System

Gutters (spacing between columns) adapt to screen size:

| Breakpoint | Gutter Size | Per Side |
|------------|-------------|----------|
| xs | 16px | 8px |
| sm | 16px | 8px |
| md+ | 32px | 16px |

---

## Containers

Containers center and constrain your content with responsive padding.

### Standard Container

```html
<div class="dga-container">
  <!-- Content constrained to max-width with padding -->
</div>
```

**Behavior:**
- Max-width at xxl: 1280px
- Responsive padding: 16px (mobile) → 32px (desktop)
- Centered with `margin: 0 auto`

### Fluid Container

```html
<div class="dga-container-fluid">
  <!-- Full-width with padding, no max-width -->
</div>
```

### Device-Specific Containers

```html
<!-- Desktop optimized (1280px max) -->
<div class="dga-container-desktop">
  ...
</div>

<!-- Tablet optimized (768px max) -->
<div class="dga-container-tablet">
  ...
</div>

<!-- Mobile optimized (375px max) -->
<div class="dga-container-mobile">
  ...
</div>
```

### Breakpoint Containers

```html
<!-- Max-width applied at specific breakpoint -->
<div class="dga-container-md">
  <!-- Max-width: 720px at md+ -->
</div>

<div class="dga-container-lg">
  <!-- Max-width: 960px at lg+ -->
</div>
```

---

## Rows

Rows are flex containers that hold columns.

### Basic Row

```html
<div class="dga-row">
  <div class="dga-col">Column</div>
  <div class="dga-col">Column</div>
</div>
```

### No Gutters

```html
<div class="dga-row dga-no-gutters">
  <!-- Columns with no spacing between them -->
</div>
```

### Custom Gutter Sizes

```html
<!-- Small gutters -->
<div class="dga-row-gap-sm">
  <div class="dga-col">Column</div>
</div>

<!-- Large gutters -->
<div class="dga-row-gap-lg">
  <div class="dga-col">Column</div>
</div>

<!-- Extra large gutters -->
<div class="dga-row-gap-xl">
  <div class="dga-col">Column</div>
</div>
```

---

## Columns

### Equal Width Columns

```html
<div class="dga-row">
  <div class="dga-col">1 of 3</div>
  <div class="dga-col">2 of 3</div>
  <div class="dga-col">3 of 3</div>
</div>
```

All columns share equal space.

### Fixed Width Columns

```html
<div class="dga-row">
  <div class="dga-col-6">50% width</div>
  <div class="dga-col-3">25% width</div>
  <div class="dga-col-3">25% width</div>
</div>
```

Available classes: `.dga-col-1` through `.dga-col-12`

### Auto Width Columns

```html
<div class="dga-row">
  <div class="dga-col">Flexible</div>
  <div class="dga-col-auto">Fits content</div>
  <div class="dga-col">Flexible</div>
</div>
```

### Column Offsets

```html
<!-- Offset by 2 columns (push right) -->
<div class="dga-col-6 dga-offset-3">
  Centered with offset
</div>

<!-- Offset by 4 columns -->
<div class="dga-col-4 dga-offset-4">
  Offset 4 columns
</div>
```

Available: `.dga-offset-0` through `.dga-offset-11`

---

## Responsive Design

### Mobile-First Approach

Classes apply to screen sizes equal to or larger than the breakpoint.

```html
<!-- Stack on mobile, 2 columns on tablet, 4 columns on desktop -->
<div class="dga-row">
  <div class="dga-col-12 dga-col-md-6 dga-col-lg-3">
    Card 1
  </div>
  <div class="dga-col-12 dga-col-md-6 dga-col-lg-3">
    Card 2
  </div>
  <div class="dga-col-12 dga-col-md-6 dga-col-lg-3">
    Card 3
  </div>
  <div class="dga-col-12 dga-col-md-6 dga-col-lg-3">
    Card 4
  </div>
</div>
```

**Behavior:**
- **Mobile (<768px):** All cards stack (100% width each)
- **Tablet (≥768px):** 2 cards per row (50% width each)
- **Desktop (≥992px):** 4 cards per row (25% width each)

### Responsive Column Classes

All breakpoint column classes available:

```html
<!-- Base (mobile first) -->
.dga-col-{1-12}

<!-- Small and up -->
.dga-col-sm-{1-12}

<!-- Medium and up -->
.dga-col-md-{1-12}

<!-- Large and up -->
.dga-col-lg-{1-12}

<!-- Extra large and up -->
.dga-col-xl-{1-12}

<!-- Extra extra large and up -->
.dga-col-xxl-{1-12}
```

### Responsive Offsets

```html
<!-- Center on tablet and up -->
<div class="dga-col-12 dga-col-md-6 dga-offset-md-3">
  Centered on tablet+
</div>

<!-- Different offsets at different sizes -->
<div class="dga-col-6 dga-offset-3 dga-offset-lg-2">
  Offset changes at large screens
</div>
```

### Responsive Auto Width

```html
<div class="dga-row">
  <div class="dga-col-12 dga-col-md-auto">
    Auto width on tablet+
  </div>
  <div class="dga-col-12 dga-col-md">
    Fills remaining space
  </div>
</div>
```

---

## Flexbox Utilities

Powerful utilities for controlling flex layouts.

### Flex Direction

| Class | CSS |
|-------|-----|
| `dga-flex-row` | `flex-direction: row` |
| `dga-flex-row-reverse` | `flex-direction: row-reverse` |
| `dga-flex-col` or `dga-flex-column` | `flex-direction: column` |
| `dga-flex-col-reverse` or `dga-flex-column-reverse` | `flex-direction: column-reverse` |

```html
<!-- Row (horizontal) -->
<div class="dga-d-flex dga-flex-row">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Column (vertical) -->
<div class="dga-d-flex dga-flex-column">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Reverse direction -->
<div class="dga-d-flex dga-flex-row-reverse">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

**Responsive:**
```html
<!-- Column on mobile, row on desktop -->
<div class="dga-d-flex dga-flex-column dga-flex-lg-row">
  ...
</div>
```

### Justify Content (Horizontal Alignment)

| Class | CSS value |
|-------|-----------|
| `dga-justify-content-start` | `flex-start` |
| `dga-justify-content-end` | `flex-end` |
| `dga-justify-content-center` | `center` |
| `dga-justify-content-between` | `space-between` |
| `dga-justify-content-around` | `space-around` |
| `dga-justify-content-evenly` | `space-evenly` |

> `stretch` is **not** valid for `justify-content`. Use `dga-align-items-stretch` for cross-axis stretching.

```html
<!-- Start (default) -->
<div class="dga-d-flex dga-justify-content-start">...</div>

<!-- End -->
<div class="dga-d-flex dga-justify-content-end">...</div>

<!-- Center -->
<div class="dga-d-flex dga-justify-content-center">...</div>

<!-- Space between -->
<div class="dga-d-flex dga-justify-content-between">...</div>

<!-- Space around -->
<div class="dga-d-flex dga-justify-content-around">...</div>

<!-- Space evenly -->
<div class="dga-d-flex dga-justify-content-evenly">...</div>
```

**Responsive:**
```html
<div class="dga-d-flex dga-justify-content-start dga-justify-content-md-center">
  Start on mobile, center on tablet+
</div>
```

### Align Items (Vertical Alignment)

```html
<!-- Start (top) -->
<div class="dga-d-flex dga-align-items-start">...</div>

<!-- End (bottom) -->
<div class="dga-d-flex dga-align-items-end">...</div>

<!-- Center (middle) -->
<div class="dga-d-flex dga-align-items-center">...</div>

<!-- Baseline -->
<div class="dga-d-flex dga-align-items-baseline">...</div>

<!-- Stretch (default) -->
<div class="dga-d-flex dga-align-items-stretch">...</div>
```

### Align Self (Individual Item Alignment)

```html
<div class="dga-d-flex">
  <div class="dga-align-self-start">Aligned to top</div>
  <div class="dga-align-self-center">Aligned to middle</div>
  <div class="dga-align-self-end">Aligned to bottom</div>
</div>
```

### Flex Wrap

```html
<!-- Allow wrapping -->
<div class="dga-d-flex dga-flex-wrap">...</div>

<!-- Prevent wrapping -->
<div class="dga-d-flex dga-flex-nowrap">...</div>

<!-- Reverse wrap -->
<div class="dga-d-flex dga-flex-wrap-reverse">...</div>
```

**Responsive:**
```html
<div class="dga-d-flex dga-flex-nowrap dga-flex-md-wrap">
  No wrap on mobile, wrap on tablet+
</div>
```

### Flex Grow & Shrink

```html
<!-- Fill available space -->
<div class="dga-flex-fill">Grows to fill</div>

<!-- Control growing -->
<div class="dga-flex-grow-0">Won't grow</div>
<div class="dga-flex-grow-1">Will grow</div>

<!-- Control shrinking -->
<div class="dga-flex-shrink-0">Won't shrink</div>
<div class="dga-flex-shrink-1">Will shrink</div>
```

### Centering Content

```html
<!-- Horizontally and vertically centered -->
<div class="dga-d-flex dga-justify-content-center dga-align-items-center dga-min-h-screen">
  <div>Perfectly centered content</div>
</div>
```

---

## Width & Height Utilities

Fixed, percentage, and viewport sizing utilities complement the grid and flexbox system.

### Quick reference

| Goal | Class |
|------|-------|
| Full width | `dga-w-full` or `dga-w-100` |
| Full height | `dga-h-full` or `dga-h-100` |
| Viewport width | `dga-w-screen` (`100vw`) |
| Viewport height | `dga-h-screen` or `dga-min-h-screen` (`100vh`) |
| Named size | `dga-w-lg`, `dga-h-md`, etc. |
| Spacing scale | `dga-w-4`, `dga-h-16` (4px base) |
| Max / min | `dga-max-w-3xl`, `dga-min-h-screen` |

```html
<!-- Full viewport hero -->
<section class="dga-d-flex dga-align-items-center dga-justify-content-center dga-min-h-screen">
  <h1>Welcome</h1>
</section>

<!-- Card with fixed image height -->
<div class="dga-w-full dga-h-48 dga-bg-gray-100"></div>
```

See **[Width & Height](./width-height.md)** for the complete class list, named sizes, fractions, and troubleshooting.

---

## Spacing & Gaps

Modern gap utilities for spacing between flex/grid children.

### Gap (All Directions)

```html
<!-- Gap based on named sizes -->
<div class="dga-d-flex dga-gap-xs">Small gap</div>
<div class="dga-d-flex dga-gap-sm">Small-medium gap</div>
<div class="dga-d-flex dga-gap-md">Medium gap</div>
<div class="dga-d-flex dga-gap-lg">Large gap</div>
<div class="dga-d-flex dga-gap-xl">Extra large gap</div>

<!-- Gap based on numeric values -->
<div class="dga-d-flex dga-gap-4">Gap of 16px</div>
<div class="dga-d-flex dga-gap-8">Gap of 32px</div>
<div class="dga-d-flex dga-gap-12">Gap of 48px</div>
```

### Column Gap (Horizontal)

```html
<div class="dga-d-flex dga-gap-x-md">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Row Gap (Vertical)

```html
<div class="dga-d-flex dga-flex-column dga-gap-y-lg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Responsive Gaps

```html
<!-- Small gap on mobile, large on desktop -->
<div class="dga-d-flex dga-gap-sm dga-gap-lg-lg">
  Responsive spacing
</div>

<!-- Different horizontal and vertical gaps -->
<div class="dga-d-flex dga-gap-x-sm dga-gap-y-md">
  Custom spacing
</div>
```

---

## Display Utilities

Control the display property of elements.

### Basic Display

```html
<!-- Hide element -->
<div class="dga-d-none">Hidden</div>

<!-- Block display -->
<div class="dga-d-block">Block element</div>

<!-- Inline display -->
<span class="dga-d-inline">Inline element</span>

<!-- Inline-block display -->
<div class="dga-d-inline-block">Inline-block</div>

<!-- Flex display -->
<div class="dga-d-flex">Flex container</div>

<!-- Inline flex -->
<div class="dga-d-inline-flex">Inline flex</div>

<!-- Grid display -->
<div class="dga-d-grid">Grid container</div>
```

### Responsive Display

```html
<!-- Hide on mobile, show on tablet -->
<div class="dga-d-none dga-d-md-block">
  Visible on tablet and up
</div>

<!-- Show on mobile, hide on desktop -->
<div class="dga-d-block dga-d-lg-none">
  Visible only on mobile and tablet
</div>

<!-- Different displays at different sizes -->
<div class="dga-d-block dga-d-md-flex dga-d-lg-grid">
  Block → Flex → Grid
</div>
```

### Print Display

```html
<!-- Hide when printing -->
<div class="dga-d-print-none">
  Won't appear in print
</div>

<!-- Show only when printing -->
<div class="dga-d-none dga-d-print-block">
  Only visible in print
</div>
```

---

## Position Utilities

Control element positioning.

### Position Values

```html
<!-- Static (default) -->
<div class="dga-position-static">...</div>

<!-- Relative -->
<div class="dga-position-relative">...</div>

<!-- Absolute -->
<div class="dga-position-absolute">...</div>

<!-- Fixed -->
<div class="dga-position-fixed">...</div>

<!-- Sticky -->
<div class="dga-position-sticky">...</div>
```

### Responsive Position

```html
<!-- Relative on mobile, absolute on desktop -->
<div class="dga-position-relative dga-position-lg-absolute">
  Responsive positioning
</div>
```

### Positioning Coordinates

```html
<!-- Top-left corner -->
<div class="dga-position-absolute dga-top-0 dga-left-0">
  Top-left
</div>

<!-- Center -->
<div class="dga-position-absolute dga-top-50 dga-left-50">
  50% from top and left
</div>

<!-- Bottom-right corner -->
<div class="dga-position-absolute dga-bottom-0 dga-right-0">
  Bottom-right
</div>
```

### Transform Utilities (Centering)

```html
<!-- Perfect center with transform -->
<div class="dga-position-absolute dga-top-50 dga-left-50 dga-translate-middle">
  Perfectly centered
</div>

<!-- Center horizontally only -->
<div class="dga-position-absolute dga-left-50 dga-translate-middle-x">
  Horizontally centered
</div>

<!-- Center vertically only -->
<div class="dga-position-absolute dga-top-50 dga-translate-middle-y">
  Vertically centered
</div>
```

### Z-Index Layers

```html
<!-- Predefined z-index layers -->
<div class="dga-z-dropdown">Dropdown layer (1000)</div>
<div class="dga-z-sticky">Sticky layer (1020)</div>
<div class="dga-z-fixed">Fixed layer (1030)</div>
<div class="dga-z-modal-backdrop">Modal backdrop (1040)</div>
<div class="dga-z-modal">Modal layer (1050)</div>
<div class="dga-z-popover">Popover layer (1060)</div>
<div class="dga-z-tooltip">Tooltip layer (1070)</div>
<div class="dga-z-toast">Toast layer (1080)</div>
```

---

## Aspect Ratios

Maintain consistent aspect ratios for responsive media.

### Available Ratios

```html
<!-- Square (1:1) -->
<div class="dga-ratio-1x1">
  <img src="image.jpg" alt="Square image">
</div>

<!-- 16:9 (Video) -->
<div class="dga-ratio-16x9">
  <iframe src="video.mp4"></iframe>
</div>

<!-- 4:3 -->
<div class="dga-ratio-4x3">
  <img src="photo.jpg" alt="4:3 photo">
</div>

<!-- 3:2 -->
<div class="dga-ratio-3x2">
  <img src="photo.jpg" alt="3:2 photo">
</div>

<!-- 21:9 (Ultra-wide) -->
<div class="dga-ratio-21x9">
  <video src="movie.mp4"></video>
</div>
```

### With Embedded Content

```html
<!-- YouTube video -->
<div class="dga-ratio-16x9">
  <iframe 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    frameborder="0" 
    allowfullscreen>
  </iframe>
</div>

<!-- Responsive image -->
<div class="dga-ratio-4x3">
  <img 
    src="image.jpg" 
    alt="Description"
    style="object-fit: cover;">
</div>
```

---

## Configuration

### SCSS Variables

Customize the grid system by overriding these variables before importing:

```scss
// Grid columns
$dga-grid-columns: 12 !default;

// Breakpoints
$dga-grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1280px
) !default;

// Container max-widths
$dga-container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px,
  xxl: 1280px
) !default;

// Gutters
$dga-grid-gutters: (
  xs: 16px,
  sm: 16px,
  md: 32px,
  lg: 32px,
  xl: 32px,
  xxl: 32px
) !default;

// Enable/disable features
$dga-enable-container-classes: true !default;
$dga-enable-row-classes: true !default;
$dga-enable-col-classes: true !default;
$dga-enable-responsive-columns: true !default;
$dga-enable-flex-utilities: true !default;
$dga-enable-gap-utilities: true !default;
$dga-enable-display-utilities: true !default;
$dga-enable-position-utilities: true !default;
```

### Custom Breakpoint Example

```scss
// Add a custom breakpoint
$dga-grid-breakpoints: dga-add-breakpoint(
  $dga-grid-breakpoints,
  'xxxl',
  1600px
);
```

### Custom Container Width

```scss
// Add custom container max-width
$dga-container-max-widths: dga-add-container-width(
  $dga-container-max-widths,
  'xxxl',
  1400px
);
```

---

## Examples

### Example 1: Blog Layout

```html
<div class="dga-container">
  <!-- Header -->
  <header class="dga-row dga-align-items-center dga-justify-content-between">
    <div class="dga-col-auto">
      <h1>My Blog</h1>
    </div>
    <nav class="dga-col-auto">
      <ul class="dga-d-flex dga-gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </header>

  <!-- Main content with sidebar -->
  <main class="dga-row dga-gap-8">
    <!-- Sidebar -->
    <aside class="dga-col-12 dga-col-lg-3">
      <h2>Categories</h2>
      <ul>
        <li>Technology</li>
        <li>Design</li>
        <li>Business</li>
      </ul>
    </aside>

    <!-- Content -->
    <article class="dga-col-12 dga-col-lg-9">
      <h2>Article Title</h2>
      <p>Article content...</p>
    </article>
  </main>
</div>
```

### Example 2: Card Grid

```html
<div class="dga-container">
  <div class="dga-row dga-gap-6">
    <!-- 1 col mobile, 2 cols tablet, 3 cols desktop -->
    <div class="dga-col-12 dga-col-md-6 dga-col-lg-4">
      <div class="dga-ratio-16x9">
        <img src="card1.jpg" alt="Card 1">
      </div>
      <h3>Card Title 1</h3>
      <p>Card description</p>
    </div>

    <div class="dga-col-12 dga-col-md-6 dga-col-lg-4">
      <div class="dga-ratio-16x9">
        <img src="card2.jpg" alt="Card 2">
      </div>
      <h3>Card Title 2</h3>
      <p>Card description</p>
    </div>

    <div class="dga-col-12 dga-col-md-6 dga-col-lg-4">
      <div class="dga-ratio-16x9">
        <img src="card3.jpg" alt="Card 3">
      </div>
      <h3>Card Title 3</h3>
      <p>Card description</p>
    </div>
  </div>
</div>
```

### Example 3: Hero Section

```html
<section class="dga-d-flex dga-align-items-center dga-justify-content-center dga-min-h-screen"
         style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
  <div class="dga-container">
    <div class="dga-row dga-justify-content-center">
      <div class="dga-col-12 dga-col-md-8 dga-col-lg-6">
        <h1 class="dga-d-flex dga-justify-content-center">Welcome</h1>
        <p class="dga-d-flex dga-justify-content-center">Your tagline here</p>
        <div class="dga-d-flex dga-justify-content-center dga-gap-4">
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Example 4: Dashboard Layout

```html
<div class="dga-container-fluid">
  <div class="dga-row dga-no-gutters">
    <!-- Sidebar -->
    <nav class="dga-col-12 dga-col-md-3 dga-col-lg-2 dga-d-flex dga-flex-column">
      <h2>Dashboard</h2>
      <ul class="dga-d-flex dga-flex-column dga-gap-2">
        <li>Overview</li>
        <li>Analytics</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
    </nav>

    <!-- Main content -->
    <main class="dga-col-12 dga-col-md-9 dga-col-lg-10">
      <div class="dga-row dga-gap-6">
        <!-- Stats cards -->
        <div class="dga-col-12 dga-col-sm-6 dga-col-xl-3">
          <div class="card">
            <h3>Users</h3>
            <p class="stat">1,234</p>
          </div>
        </div>

        <div class="dga-col-12 dga-col-sm-6 dga-col-xl-3">
          <div class="card">
            <h3>Revenue</h3>
            <p class="stat">$45,678</p>
          </div>
        </div>

        <div class="dga-col-12 dga-col-sm-6 dga-col-xl-3">
          <div class="card">
            <h3>Orders</h3>
            <p class="stat">567</p>
          </div>
        </div>

        <div class="dga-col-12 dga-col-sm-6 dga-col-xl-3">
          <div class="card">
            <h3>Growth</h3>
            <p class="stat">+12%</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</div>
```

### Example 5: Pricing Table

```html
<div class="dga-container">
  <div class="dga-row dga-gap-6 dga-justify-content-center">
    <!-- Pricing card 1 -->
    <div class="dga-col-12 dga-col-md-6 dga-col-lg-4">
      <div class="pricing-card">
        <h3>Starter</h3>
        <p class="price">$9/month</p>
        <ul>
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
        <button>Choose Plan</button>
      </div>
    </div>

    <!-- Pricing card 2 (featured) -->
    <div class="dga-col-12 dga-col-md-6 dga-col-lg-4">
      <div class="pricing-card featured">
        <h3>Professional</h3>
        <p class="price">$29/month</p>
        <ul>
          <li>Everything in Starter</li>
          <li>Feature 4</li>
          <li>Feature 5</li>
        </ul>
        <button>Choose Plan</button>
      </div>
    </div>

    <!-- Pricing card 3 -->
    <div class="dga-col-12 dga-col-md-6 dga-col-lg-4">
      <div class="pricing-card">
        <h3>Enterprise</h3>
        <p class="price">$99/month</p>
        <ul>
          <li>Everything in Pro</li>
          <li>Feature 6</li>
          <li>Feature 7</li>
        </ul>
        <button>Choose Plan</button>
      </div>
    </div>
  </div>
</div>
```

---

## Best Practices

### 1. Always Use Container → Row → Column Structure

✅ **Correct:**
```html
<div class="dga-container">
  <div class="dga-row">
    <div class="dga-col-6">Content</div>
  </div>
</div>
```

❌ **Incorrect:**
```html
<div class="dga-container">
  <div class="dga-col-6">Content</div> <!-- Missing row -->
</div>
```

### 2. Mobile-First Responsive Design

Start with mobile layout, then enhance for larger screens:

```html
<!-- Mobile: stack, Tablet: 2 cols, Desktop: 3 cols -->
<div class="dga-col-12 dga-col-md-6 dga-col-lg-4">
  Content
</div>
```

### 3. Use Semantic HTML

Combine grid classes with semantic HTML elements:

```html
<header class="dga-row">...</header>
<main class="dga-row">...</main>
<aside class="dga-col-lg-3">...</aside>
<article class="dga-col-lg-9">...</article>
```

### 4. Leverage Flexbox Utilities

Use flexbox utilities for complex alignments:

```html
<div class="dga-row dga-align-items-center dga-justify-content-between">
  <div class="dga-col-auto">Logo</div>
  <nav class="dga-col-auto">Menu</nav>
</div>
```

### 5. Use Gap Utilities for Modern Spacing

Prefer gap utilities over margin hacks:

```html
<!-- Modern approach -->
<div class="dga-d-flex dga-gap-4">
  <button>Button 1</button>
  <button>Button 2</button>
</div>
```

### 6. Optimize for Performance

Only generate utilities you need:

```scss
// Disable unused utilities
$dga-enable-position-utilities: false;
$dga-enable-aspect-ratio-utilities: false;
```

### 7. Consistent Column Counts

Ensure rows total 12 columns:

✅ **Correct:**
```html
<div class="dga-row">
  <div class="dga-col-8">Main</div>
  <div class="dga-col-4">Sidebar</div> <!-- 8 + 4 = 12 -->
</div>
```

### 8. Use No-Gutters Sparingly

Only remove gutters when you have a specific design need:

```html
<!-- Edge-to-edge images -->
<div class="dga-row dga-no-gutters">
  <div class="dga-col-4">
    <img src="image1.jpg" class="dga-width-full">
  </div>
  <!-- More images -->
</div>
```

---

## Troubleshooting

### Columns Not Sitting Side-by-Side

**Problem:** Columns stack vertically instead of horizontally.

**Solution:**
1. Ensure columns are inside a `.dga-row`
2. Check that column widths don't exceed 12
3. Verify you're viewing at the correct breakpoint

```html
<!-- Correct -->
<div class="dga-row">
  <div class="dga-col-md-6">Column 1</div>
  <div class="dga-col-md-6">Column 2</div>
</div>
```

### Columns Have No Spacing

**Problem:** Columns touch each other with no gaps.

**Solution:**
1. Remove `.dga-no-gutters` if present
2. Ensure columns have padding (check compiled CSS)
3. Verify row has negative margins

### Content Overflowing Container

**Problem:** Content extends beyond container bounds.

**Solution:**
1. Use `.dga-container` instead of `.dga-container-fluid`
2. Check for `width` or `min-width` on children
3. Add `overflow: hidden` if needed

### Responsive Classes Not Working

**Problem:** Responsive breakpoints not triggering.

**Solution:**
1. Verify `<meta name="viewport">` tag in HTML:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1">
   ```
2. Check browser viewport width
3. Inspect compiled CSS for media queries

### Flexbox Alignment Not Working

**Problem:** `align-items` or `justify-content` has no effect.

**Solution:**
1. Ensure parent has `.dga-d-flex`
2. Check for `flex-direction` conflicts
3. Verify sufficient height for vertical alignment — use `dga-min-h-screen` or `dga-h-full` on the flex container (see [Width & Height](./width-height.md))

### Grid Not Compiling

**Problem:** SCSS compilation errors.

**Solution:**
1. Ensure variables are imported before utilities
2. Check for missing functions (percentage, map-get)
3. Verify SCSS syntax is correct

### Performance Issues

**Problem:** Large CSS file size.

**Solution:**
1. Disable unused utilities in variables
2. Use selective generation:
   ```scss
   @include generate-responsive-columns();
   // Don't generate all utilities
   ```
3. Purge unused CSS in production

---

## Browser Support

The DGA Grid System supports:

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)
- ⚠️ IE 11 (partial support - no gap utilities)

### Fallbacks for Older Browsers

For IE 11 support, use margin-based spacing instead of gap:

```html
<!-- Modern browsers -->
<div class="dga-d-flex dga-gap-4">
  <button>Button</button>
</div>

<!-- IE 11 fallback -->
<div class="dga-d-flex">
  <button style="margin-right: 16px;">Button</button>
</div>
```

---

## Migration Guide

### From Bootstrap to DGA Grid

| Bootstrap | DGA Grid | Notes |
|-----------|----------|-------|
| `.container` | `.dga-container` | Same behavior |
| `.row` | `.dga-row` | Same behavior |
| `.col-6` | `.dga-col-6` | Same behavior |
| `.col-md-4` | `.dga-col-md-4` | Same behavior |
| `.d-flex` | `.dga-d-flex` | Same behavior |
| `.flex-column` | `.dga-flex-col` or `.dga-flex-column` | Both column class names work |
| `.w-100` | `.dga-w-full` or `.dga-w-100` | Same behavior |
| `.h-100` | `.dga-h-full` or `.dga-h-100` | Same behavior |
| `.min-vh-100` | `.dga-min-h-screen` | Viewport height |
| `.justify-content-center` | `.dga-justify-content-center` | Same behavior |
| `.g-3` | `.dga-gap-3` | Uses different scale |
| `.offset-2` | `.dga-offset-2` | Same behavior |

### Key Differences

1. **Prefix:** All classes use `dga-` prefix
2. **Gap scale:** Uses DGA spacing system (4px base)
3. **Gutters:** 16px mobile, 32px desktop (vs Bootstrap's 24px)
4. **Breakpoints:** xxl at 1280px (vs Bootstrap's 1400px)

---

## Resources

- **Width & Height:** [width-height.md](./width-height.md)
- **npm Usage:** [README.md](../README.md)
- **Source Code:** [GitHub Repository](https://github.com/waaelg/personal_fe_dga-sass)
- **Design System:** [DGA Design Guidelines](#)
- **Support:** [Issues & Questions](#)
- **Changelog:** [Version History](#)

---

## License

© 2024 DGA Design System. All rights reserved.

---

**Version:** 1.1.0  
**Last Updated:** June 2025  
**Maintained by:** DGA Design Team
