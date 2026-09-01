# Colors

Color palettes, semantic utilities, and CSS classes for the DGA design system. Based on the Saudi Arabia Government Platforms Code Design System.

**Source:** `src/styles/utilities/colors.scss`

---

## Quick start (npm)

Import the stylesheet once — all color utilities are included:

```js
import '@waaelg/dga-design-system/style.css'
```

```html
<button class="dga-btn dga-btn-primary">Primary</button>
<p class="dga-text-gray-700">Muted text</p>
<div class="dga-bg-primary-50 dga-p-4">Tinted panel</div>
```

| More | Doc |
|------|-----|
| Cheatsheet | [colors-cheatsheet.md](./colors-cheatsheet.md) |
| Hex swatches | [colors-swatches.md](./colors-swatches.md) |
| SCSS customization | [SCSS Variables](#scss-variables) (repo contributors) |

---

## Table of Contents

1. [Overview](#overview)
2. [Color Palettes](#color-palettes)
3. [Semantic Colors](#semantic-colors)
4. [Text Colors](#text-colors)
5. [Background Colors](#background-colors)
6. [Border Colors](#border-colors)
7. [Gradients](#gradients)
8. [Hover States](#hover-states)
9. [Focus States](#focus-states)
10. [Accessibility](#accessibility)
11. [Usage Examples](#usage-examples)
12. [SCSS Variables](#scss-variables)
13. [CSS Custom Properties](#css-custom-properties)
14. [Best Practices](#best-practices)

---

## Overview

The DGA Color System provides a comprehensive, accessible color palette inspired by the Saudi Arabian identity with Saudi Green as the primary color. The system includes:

- **8 Color Palettes** with 12 shades each (25-950)
- **Semantic Colors** for common UI states
- **Text Hierarchy** for typography
- **Gradients** based on Saudi Green
- **Auto-generated Utilities** for rapid development
- **Accessibility Helpers** for contrast checking

### Color Scale

All color palettes follow a consistent scale from lightest to darkest:

| Shade | Use Case |
|-------|----------|
| 25 | Subtle backgrounds |
| 50 | Light backgrounds |
| 100 | Hover states (light) |
| 200 | Borders (light) |
| 300 | Disabled states |
| 400 | Placeholder text |
| 500 | **Primary/Default** |
| 600 | Hover states |
| 700 | Active states |
| 800 | Text on light backgrounds |
| 900 | Headers, emphasis |
| 950 | Maximum contrast |

---

## Color Palettes

### 1. Gray (Neutral)

The neutral palette for text, backgrounds, and borders.

| Shade | Hex | Usage |
|-------|-----|-------|
| 25 | `#fcfcfd` | Body background |
| 50 | `#f9fafb` | Light background |
| 100 | `#f3f4f6` | Hover states |
| 200 | `#e5e7eb` | **Borders** |
| 300 | `#d2d6db` | Dividers |
| 400 | `#9da4ae` | Placeholder text |
| 500 | `#6c737f` | Icon color |
| 600 | `#4d5761` | **Muted text** |
| 700 | `#384250` | **Secondary text** |
| 800 | `#1f2a37` | Emphasis |
| 900 | `#111927` | Dark backgrounds |
| 950 | `#0d121c` | **Primary text** |

<ColorPalette palette="gray" />

**Classes:**
```html
<div class="dga-text-gray-950">Primary text</div>
<div class="dga-bg-gray-50">Light background</div>
<div class="dga-border-gray-200">Gray border</div>
```

---

### 2. Primary (Saudi Green) 🇸🇦

The primary brand color representing Saudi Arabia.

| Shade | Hex | Usage |
|-------|-----|-------|
| 25 | `#f7fdf9` | Subtle green tint |
| 50 | `#f3fcf6` | Light green background |
| 100 | `#dff6e7` | Success messages background |
| 200 | `#b8eacb` | Hover states |
| 300 | `#88d8ad` | Active states |
| 400 | `#54c08a` | Decorative |
| 500 | `#25935f` | **Main Saudi Green** ⭐ |
| 600 | `#1b8354` | Hover on primary |
| 700 | `#166a45` | Active on primary |
| 800 | `#14573a` | **Brand text** |
| 900 | `#104631` | Dark accent |
| 950 | `#092a1e` | Maximum contrast |

<ColorPalette palette="primary" />

**Classes:**
```html
<button class="dga-bg-primary-500 dga-text-white">Primary Button</button>
<a class="dga-text-primary-600">Link</a>
<div class="dga-border-primary-500">Bordered element</div>
```

**Semantic Mapping:**
- `.dga-bg-primary` = `#25935f` (Saudi Green 500)
- `.dga-text-primary` = `#0d121c` (Gray 950 for text hierarchy)
- `.dga-border-primary` = `#25935f`

---

### 3. Gold (Secondary)

Complementary color representing Saudi gold and luxury.

| Shade | Hex | Usage |
|-------|-----|-------|
| 25 | `#fffef7` | Subtle gold tint |
| 50 | `#fffef2` | Light gold background |
| 100 | `#fffce6` | Highlight |
| 200 | `#fcf3bd` | Soft accent |
| 300 | `#fae996` | Decorative |
| 400 | `#f7d54d` | Vibrant accent |
| 500 | `#f5bd02` | **Main Gold** ⭐ |
| 600 | `#dba102` | Hover |
| 700 | `#b87b02` | Active |
| 800 | `#945c01` | Text |
| 900 | `#6e3c00` | Dark accent |
| 950 | `#472400` | Maximum contrast |

<ColorPalette palette="gold" />

**Classes:**
```html
<div class="dga-bg-gold-500">Gold background</div>
<span class="dga-text-gold-700">Gold text</span>
<button class="dga-bg-secondary">Secondary Button</button>
```

---

### 4. Lavender (Accent)

Elegant accent color for special highlights.

| Shade | Hex | Usage |
|-------|-----|-------|
| 25 | `#fefcff` | Subtle lavender |
| 50 | `#f9f5fa` | Light background |
| 100 | `#f2e9f5` | Soft accent |
| 200 | `#e1cce8` | Decorative |
| 300 | `#ccadd9` | Hover |
| 400 | `#a57bba` | Active |
| 500 | `#80519f` | **Main Lavender** ⭐ |
| 600 | `#6d428f` | Emphasis |
| 700 | `#532d75` | Strong accent |
| 800 | `#3d1d5e` | Text |
| 900 | `#281047` | Dark |
| 950 | `#16072e` | Maximum contrast |

<ColorPalette palette="lavender" />

**Classes:**
```html
<div class="dga-bg-lavender-100">Lavender background</div>
<span class="dga-text-lavender-600">Lavender text</span>
```

---

### 5. Error/Danger (Red)

For errors, alerts, and destructive actions.

| Shade | Hex | Usage |
|-------|-----|-------|
| 25 | `#fffbfa` | Subtle error tint |
| 50 | `#fef3f2` | Error background |
| 100 | `#fee4e2` | Alert background |
| 200 | `#fecdca` | Light error |
| 300 | `#fda29b` | Hover |
| 400 | `#f97066` | Active |
| 500 | `#f04438` | **Main Error** ⭐ |
| 600 | `#d92d20` | **Error text** |
| 700 | `#b42318` | Strong error |
| 800 | `#912018` | Dark error |
| 900 | `#7a271a` | Maximum error |
| 950 | `#55160c` | Error text on light |

<ColorPalette palette="error" />

**Classes:**
```html
<div class="dga-bg-error-50 dga-text-error-700">Error message</div>
<button class="dga-bg-danger dga-text-white">Delete</button>
<span class="dga-text-error">Error text</span>
```

---

### 6. Warning (Orange)

For warnings and cautionary messages.

| Shade | Hex | Usage |
|-------|-----|-------|
| 25 | `#fffcf5` | Subtle warning |
| 50 | `#fffaeb` | Warning background |
| 100 | `#fef0c7` | Alert background |
| 200 | `#fedf89` | Light warning |
| 300 | `#fec84b` | Hover |
| 400 | `#fdb022` | Active |
| 500 | `#f79009` | **Main Warning** ⭐ |
| 600 | `#dc6803` | **Warning text** |
| 700 | `#b54708` | Strong warning |
| 800 | `#93370d` | Dark warning |
| 900 | `#7a2e0e` | Maximum warning |
| 950 | `#4e1d09` | Deep contrast |

<ColorPalette palette="warning" />

**Classes:**
```html
<div class="dga-bg-warning-50 dga-text-warning-700">Warning</div>
<span class="dga-text-warning">Warning text</span>
```

---

### 7. Info (Blue)

For informational messages and neutral highlights.

| Shade | Hex | Usage |
|-------|-----|-------|
| 25 | `#f5faff` | Subtle info |
| 50 | `#ecfdf3` | Info background |
| 100 | `#d1e9ff` | Light info |
| 200 | `#b2ddff` | Soft accent |
| 300 | `#84caff` | Hover |
| 400 | `#53b1fd` | Active |
| 500 | `#2e90fa` | **Main Info** ⭐ |
| 600 | `#1570ef` | **Info text** |
| 700 | `#175cd3` | Strong info |
| 800 | `#1849a9` | Dark info |
| 900 | `#194185` | Maximum info |
| 950 | `#102a56` | Deep contrast |

<ColorPalette palette="info" />

**Classes:**
```html
<div class="dga-bg-info-50 dga-text-info-700">Info message</div>
<span class="dga-text-info">Info text</span>
```

---

### 8. Success (Green)

For success messages and positive actions.

| Shade | Hex | Usage |
|-------|-----|-------|
| 25 | `#f6fef9` | Subtle success |
| 50 | `#ecfdf3` | Success background |
| 100 | `#dcfae6` | Light success |
| 200 | `#abefc6` | Soft accent |
| 300 | `#75e0a7` | Hover |
| 400 | `#47cd89` | Active |
| 500 | `#17b26a` | **Main Success** ⭐ |
| 600 | `#079455` | **Success text** |
| 700 | `#067647` | Strong success |
| 800 | `#085d3a` | Dark success |
| 900 | `#074d31` | Maximum success |
| 950 | `#053321` | Deep contrast |

<ColorPalette palette="success" />

**Classes:**
```html
<div class="dga-bg-success-50 dga-text-success-700">Success!</div>
<button class="dga-bg-success dga-text-white">Confirm</button>
```

---

## Semantic Colors

Simplified semantic classes for common use cases.

### Semantic Background Colors

```html
<div class="dga-bg-primary">Saudi Green background</div>
<div class="dga-bg-secondary">Gold background</div>
<div class="dga-bg-success">Success background</div>
<div class="dga-bg-info">Info background</div>
<div class="dga-bg-warning">Warning background</div>
<div class="dga-bg-danger">Danger background</div>
<div class="dga-bg-light">Light gray background</div>
<div class="dga-bg-dark">Dark gray background</div>
```

### Semantic Border Colors

```html
<div class="dga-border-primary">Primary border</div>
<div class="dga-border-secondary">Secondary border</div>
<div class="dga-border-success">Success border</div>
<div class="dga-border-danger">Danger border</div>
```

### Semantic Mapping

| Class | Maps To | Hex Value |
|-------|---------|-----------|
| `primary` | Saudi Green 500 | `#25935f` |
| `secondary` | Gold 500 | `#f5bd02` |
| `success` | Success 500 | `#17b26a` |
| `info` | Info 500 | `#2e90fa` |
| `warning` | Warning 500 | `#f79009` |
| `danger` | Error 500 | `#f04438` |
| `light` | Gray 50 | `#f9fafb` |
| `dark` | Gray 900 | `#111927` |

---

## Text Colors

### Text Hierarchy

For optimal readability on light backgrounds:

```html
<!-- Primary text (main content) -->
<p class="dga-text-primary">Main body text</p>
<!-- Gray 950: #0d121c -->

<!-- Secondary text (supporting content) -->
<p class="dga-text-secondary">Secondary text</p>
<!-- Gray 700: #384250 -->

<!-- Muted text (less important) -->
<p class="dga-text-muted">Muted text</p>
<!-- Gray 600: #4d5761 -->
```

### Basic Colors

```html
<span class="dga-text-white">White text</span>
<span class="dga-text-black">Black text</span>
```

### Text for Dark Backgrounds

```html
<div class="dga-bg-dark">
  <p class="dga-text-inverse">White text on dark</p>
  <p class="dga-text-inverse-muted">Muted white (70% opacity)</p>
</div>
```

### Brand Text Colors

```html
<h1 class="dga-text-brand">Brand heading</h1>
<!-- SA 800: #14573a -->

<p class="dga-text-brand-secondary">Brand secondary</p>
<!-- SA 600: #1b8354 -->
```

### Semantic Text Colors

```html
<span class="dga-text-error">Error message</span>
<span class="dga-text-warning">Warning message</span>
<span class="dga-text-success">Success message</span>
<span class="dga-text-info">Info message</span>
<span class="dga-text-danger">Danger (same as error)</span>
<span class="dga-text-light">Light text</span>
<span class="dga-text-dark">Dark text</span>
```

### Color Shade Text

Access any shade directly:

```html
<span class="dga-text-primary-500">Saudi Green text</span>
<span class="dga-text-gray-600">Gray 600 text</span>
<span class="dga-text-gold-700">Gold 700 text</span>
```

**Pattern:** `.dga-text-{palette}-{shade}`

---

## Background Colors

### Semantic Backgrounds

```html
<div class="dga-bg-primary dga-text-white">Primary</div>
<div class="dga-bg-secondary dga-text-black">Secondary</div>
<div class="dga-bg-success dga-text-white">Success</div>
<div class="dga-bg-danger dga-text-white">Danger</div>
<div class="dga-bg-light">Light</div>
<div class="dga-bg-dark dga-text-white">Dark</div>
```

### Color Shade Backgrounds

```html
<div class="dga-bg-primary-50">Light green background</div>
<div class="dga-bg-primary-500">Main green background</div>
<div class="dga-bg-gray-100">Light gray background</div>
<div class="dga-bg-error-50">Error background</div>
```

**Pattern:** `.dga-bg-{palette}-{shade}`

### Alert Backgrounds

```html
<!-- Error alert -->
<div class="dga-bg-error-50 dga-border dga-border-error-200 dga-text-error-700">
  <strong>Error:</strong> Something went wrong
</div>

<!-- Warning alert -->
<div class="dga-bg-warning-50 dga-border dga-border-warning-200 dga-text-warning-700">
  <strong>Warning:</strong> Please be careful
</div>

<!-- Success alert -->
<div class="dga-bg-success-50 dga-border dga-border-success-200 dga-text-success-700">
  <strong>Success:</strong> Action completed
</div>

<!-- Info alert -->
<div class="dga-bg-info-50 dga-border dga-border-info-200 dga-text-info-700">
  <strong>Info:</strong> Did you know?
</div>
```

---

## Border Colors

### Basic Borders

```html
<!-- Default border (gray-200) -->
<div class="dga-border">Default border</div>

<!-- Light border (gray-100) -->
<div class="dga-border-light">Light border</div>

<!-- Directional borders -->
<div class="dga-border-top">Top border only</div>
<div class="dga-border-right">Right border only</div>
<div class="dga-border-bottom">Bottom border only</div>
<div class="dga-border-left">Left border only</div>

<!-- No border -->
<div class="dga-border-none">No border</div>
```

### Semantic Border Colors

```html
<div class="dga-border dga-border-primary">Primary border</div>
<div class="dga-border dga-border-success">Success border</div>
<div class="dga-border dga-border-danger">Danger border</div>
```

### Color Shade Borders

```html
<div class="dga-border dga-border-primary-300">Light green border</div>
<div class="dga-border dga-border-gray-300">Gray border</div>
<div class="dga-border dga-border-error-500">Error border</div>
```

**Pattern:** `.dga-border-{palette}-{shade}`

**Note:** Border utilities only set `border-color`. Use `.dga-border` to add the actual border.

---

## Gradients

Saudi Green gradients for hero sections, cards, and backgrounds.

```html
<!-- Primary gradient (horizontal) -->
<div class="dga-bg-gradient-primary">
  <!-- linear-gradient(90deg, #1b8354, #25935f) -->
</div>

<!-- Secondary gradient (diagonal) -->
<div class="dga-bg-gradient-secondary">
  <!-- linear-gradient(45deg, #166a45, #1b8354) -->
</div>

<!-- Dark gradient -->
<div class="dga-bg-gradient-dark">
  <!-- linear-gradient(45deg, #092a1e, #1b8354) -->
</div>

<!-- Medium gradient -->
<div class="dga-bg-gradient-medium">
  <!-- linear-gradient(90deg, #14573a, #1b8354) -->
</div>

<!-- Subtle gradient -->
<div class="dga-bg-gradient-subtle">
  <!-- linear-gradient(26.5deg, #14573a, #166a45) -->
</div>

<!-- Deep gradient -->
<div class="dga-bg-gradient-deep">
  <!-- linear-gradient(45deg, #104631, #1b8354) -->
</div>
```

### Gradient Use Cases

```html
<!-- Hero section -->
<section class="dga-bg-gradient-primary dga-text-white">
  <h1>Welcome to DGA</h1>
  <p>Government Digital Platform</p>
</section>

<!-- Card header -->
<div class="card">
  <div class="dga-bg-gradient-subtle dga-text-white">
    <h3>Card Title</h3>
  </div>
  <div class="card-body">Content</div>
</div>

<!-- Button gradient -->
<button class="dga-bg-gradient-primary dga-text-white">
  Get Started
</button>
```

---

## Hover States

Apply colors on hover.

```html
<!-- Background hover -->
<button class="dga-bg-primary-500-hover">
  Hover me for green background
</button>

<!-- Text hover -->
<a href="#" class="dga-text-primary-600-hover">
  Link with hover
</a>

<!-- Border hover -->
<div class="dga-border dga-border-gray-300-hover">
  Hover for gray border
</div>
```

**Pattern:** `.dga-{property}-{palette}-{shade}-hover:hover`

### Interactive Button Example

```html
<button class="dga-bg-primary-500 dga-bg-primary-600-hover dga-text-white">
  Primary Button (changes shade on hover)
</button>
```

---

## Focus States

Custom focus ring styles for interactive elements.

```html
<!-- Default focus ring (primary color) -->
<input type="text" class="dga-focus-ring">

<!-- Primary focus -->
<input type="text" class="dga-focus-ring-primary">

<!-- Error focus -->
<input type="text" class="dga-focus-ring-error">

<!-- Warning focus -->
<input type="text" class="dga-focus-ring-warning">

<!-- Success focus -->
<input type="text" class="dga-focus-ring-success">

<!-- Info focus -->
<input type="text" class="dga-focus-ring-info">
```

All focus rings:
- Remove default outline
- Add colored box-shadow with 25% opacity
- Ring size: 0.2rem (3.2px)

---

## Accessibility

### Contrast Checking

The system includes helper functions for accessibility:

```scss
// SCSS Function - checks if color is light or dark
@function dga-color-contrast($color) {
  @if (lightness($color) > 50) {
    @return $dga-text-primary; // Dark text for light backgrounds
  } @else {
    @return $dga-text-inverse; // Light text for dark backgrounds
  }
}

// Get accessible text color for any background
@function dga-text-color($bg-color) {
  @return dga-color-contrast($bg-color);
}
```

**Usage in SCSS:**
```scss
.my-component {
  background-color: $dga-primary-500;
  color: dga-text-color($dga-primary-500); // Auto-selects white
}
```

### Accessible Color Combinations

✅ **Good Contrast** (WCAG AA compliant):

```html
<!-- Light backgrounds -->
<div class="dga-bg-white dga-text-primary">Primary text on white</div>
<div class="dga-bg-gray-50 dga-text-secondary">Secondary text</div>

<!-- Dark backgrounds -->
<div class="dga-bg-primary-500 dga-text-white">White on Saudi Green</div>
<div class="dga-bg-dark dga-text-inverse">White on dark</div>

<!-- Semantic colors -->
<div class="dga-bg-error-50 dga-text-error-700">Error message</div>
<div class="dga-bg-success-50 dga-text-success-700">Success message</div>
```

❌ **Poor Contrast** (avoid):

```html
<!-- Don't use light text on light backgrounds -->
<div class="dga-bg-gray-100 dga-text-gray-300">❌ Poor contrast</div>

<!-- Don't use dark text on dark backgrounds -->
<div class="dga-bg-primary-900 dga-text-primary-800">❌ Poor contrast</div>
```

### Recommended Text-on-Background Combinations

| Background | Recommended Text Colors |
|------------|------------------------|
| `bg-white` | `text-primary`, `text-secondary`, `text-muted` |
| `bg-gray-50` | `text-primary`, `text-secondary` |
| `bg-primary-500` | `text-white`, `text-inverse` |
| `bg-dark` | `text-white`, `text-inverse` |
| `bg-error-50` | `text-error-700`, `text-error-800` |
| `bg-success-50` | `text-success-700` |

---

## Usage Examples

### Example 1: Alert Components

```html
<!-- Error Alert -->
<div class="dga-bg-error-50 dga-border dga-border-error-200 dga-text-error-700" 
     style="padding: 16px; border-radius: 8px; margin-bottom: 16px;">
  <div style="display: flex; align-items: start; gap: 12px;">
    <svg width="20" height="20" class="dga-text-error-500">
      <!-- Error icon -->
    </svg>
    <div>
      <h4 class="dga-text-error-800" style="margin: 0 0 4px;">Error</h4>
      <p style="margin: 0;">Something went wrong. Please try again.</p>
    </div>
  </div>
</div>

<!-- Success Alert -->
<div class="dga-bg-success-50 dga-border dga-border-success-200 dga-text-success-700" 
     style="padding: 16px; border-radius: 8px;">
  <div style="display: flex; align-items: start; gap: 12px;">
    <svg width="20" height="20" class="dga-text-success-500">
      <!-- Success icon -->
    </svg>
    <div>
      <h4 class="dga-text-success-800" style="margin: 0 0 4px;">Success</h4>
      <p style="margin: 0;">Your changes have been saved successfully.</p>
    </div>
  </div>
</div>
```

### Example 2: Button Variants

```html
<!-- Primary button -->
<button class="dga-bg-primary-500 dga-bg-primary-600-hover dga-text-white dga-focus-ring-primary"
        style="padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer;">
  Primary Action
</button>

<!-- Secondary button -->
<button class="dga-bg-white dga-border dga-border-primary-500 dga-text-primary-600 dga-bg-primary-50-hover"
        style="padding: 12px 24px; border-radius: 8px; cursor: pointer;">
  Secondary Action
</button>

<!-- Danger button -->
<button class="dga-bg-error-500 dga-bg-error-600-hover dga-text-white dga-focus-ring-error"
        style="padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer;">
  Delete
</button>

<!-- Ghost button -->
<button class="dga-bg-transparent dga-text-primary-600 dga-text-primary-700-hover"
        style="padding: 12px 24px; border: none; background: transparent; cursor: pointer;">
  Ghost Button
</button>
```

### Example 3: Card with Gradient Header

```html
<div class="dga-bg-white dga-border dga-border-gray-200" 
     style="border-radius: 12px; overflow: hidden;">
  <!-- Gradient header -->
  <div class="dga-bg-gradient-primary dga-text-white" 
       style="padding: 24px;">
    <h3 style="margin: 0 0 8px;">Government Services</h3>
    <p style="margin: 0; opacity: 0.9;">Access digital platforms</p>
  </div>
  
  <!-- Card body -->
  <div style="padding: 24px;">
    <p class="dga-text-secondary">
      Access all government digital services in one place.
    </p>
    <button class="dga-bg-primary-500 dga-text-white" 
            style="padding: 8px 16px; border: none; border-radius: 6px; margin-top: 16px;">
      Learn More
    </button>
  </div>
</div>
```

### Example 4: Form Input with States

```html
<!-- Normal state -->
<input type="text" 
       class="dga-border dga-border-gray-300 dga-focus-ring-primary"
       placeholder="Enter your name"
       style="width: 100%; padding: 12px; border-radius: 8px;">

<!-- Error state -->
<input type="email" 
       class="dga-border dga-border-error-500 dga-bg-error-50 dga-focus-ring-error"
       placeholder="Email"
       style="width: 100%; padding: 12px; border-radius: 8px;">
<p class="dga-text-error-600" style="margin: 4px 0 0; font-size: 14px;">
  Please enter a valid email
</p>

<!-- Success state -->
<input type="text" 
       class="dga-border dga-border-success-500 dga-bg-success-50"
       value="john@example.com"
       style="width: 100%; padding: 12px; border-radius: 8px;">
<p class="dga-text-success-600" style="margin: 4px 0 0; font-size: 14px;">
  ✓ Email verified
</p>
```

### Example 5: Badge Collection

```html
<span class="dga-bg-primary-100 dga-text-primary-700" 
      style="padding: 4px 12px; border-radius: 16px; font-size: 14px;">
  Active
</span>

<span class="dga-bg-success-100 dga-text-success-700" 
      style="padding: 4px 12px; border-radius: 16px; font-size: 14px;">
  Completed
</span>

<span class="dga-bg-warning-100 dga-text-warning-700" 
      style="padding: 4px 12px; border-radius: 16px; font-size: 14px;">
  Pending
</span>

<span class="dga-bg-error-100 dga-text-error-700" 
      style="padding: 4px 12px; border-radius: 16px; font-size: 14px;">
  Failed
</span>

<span class="dga-bg-gray-100 dga-text-gray-700" 
      style="padding: 4px 12px; border-radius: 16px; font-size: 14px;">
  Draft
</span>
```

### Example 6: Hero Section

```html
<section class="dga-bg-gradient-primary dga-text-white" 
         style="padding: 80px 20px; text-align: center;">
  <div style="max-width: 800px; margin: 0 auto;">
    <h1 style="font-size: 48px; margin: 0 0 16px;">
      Saudi Digital Government
    </h1>
    <p style="font-size: 20px; margin: 0 0 32px; opacity: 0.95;">
      Transforming government services through digital innovation
    </p>
    <div style="display: flex; gap: 16px; justify-content: center;">
      <button class="dga-bg-white dga-text-primary-600" 
              style="padding: 16px 32px; border: none; border-radius: 8px; font-size: 16px; font-weight: 600;">
        Get Started
      </button>
      <button class="dga-bg-transparent dga-border dga-border-white dga-text-white" 
              style="padding: 16px 32px; border-radius: 8px; font-size: 16px; font-weight: 600; background: transparent;">
        Learn More
      </button>
    </div>
  </div>
</section>
```

### Example 7: Status Indicators

```html
<div style="display: flex; gap: 16px; align-items: center;">
  <!-- Online -->
  <div style="display: flex; align-items: center; gap: 8px;">
    <div class="dga-bg-success-500" 
         style="width: 8px; height: 8px; border-radius: 50%;"></div>
    <span class="dga-text-secondary">Online</span>
  </div>
  
  <!-- Away -->
  <div style="display: flex; align-items: center; gap: 8px;">
    <div class="dga-bg-warning-500" 
         style="width: 8px; height: 8px; border-radius: 50%;"></div>
    <span class="dga-text-secondary">Away</span>
  </div>
  
  <!-- Offline -->
  <div style="display: flex; align-items: center; gap: 8px;">
    <div class="dga-bg-gray-400" 
         style="width: 8px; height: 8px; border-radius: 50%;"></div>
    <span class="dga-text-secondary">Offline</span>
  </div>
</div>
```

---

## SCSS Variables

### Using Color Variables in SCSS

```scss
// Import colors
@import 'variables/colors';

// Use color variables
.my-component {
  background-color: $dga-primary-500;
  color: $dga-text-white;
  border: 1px solid $dga-primary-600;
  
  &:hover {
    background-color: $dga-primary-600;
  }
}

// Use semantic colors
.button-primary {
  background-color: $dga-semantic-primary;
  color: white;
}

// Use gradients
.hero {
  background: $dga-gradient-sa-primary;
}

// Use text colors
.heading {
  color: $dga-text-primary;
}

.subheading {
  color: $dga-text-secondary;
}
```

### Available SCSS Variables

**Gray Palette:**
```scss
$dga-gray-25 through $dga-gray-950
```

**Primary (Saudi Green):**
```scss
$dga-sa-25 through $dga-sa-950
// Or use: $dga-primary map
```

**Secondary Palettes:**
```scss
$dga-gold-25 through $dga-gold-950
$dga-lavender-25 through $dga-lavender-950
```

**Semantic Colors:**
```scss
$dga-error-25 through $dga-error-950
$dga-warning-25 through $dga-warning-950
$dga-info-25 through $dga-info-950
$dga-success-25 through $dga-success-950
```

**Semantic Mappings:**
```scss
$dga-semantic-primary      // Saudi Green 500
$dga-semantic-secondary    // Gold 500
$dga-semantic-success      // Success 500
$dga-semantic-info         // Info 500
$dga-semantic-warning      // Warning 500
$dga-semantic-danger       // Error 500
$dga-semantic-light        // Gray 50
$dga-semantic-dark         // Gray 900
```

**Text Colors:**
```scss
$dga-text-white
$dga-text-black
$dga-text-primary          // Gray 950
$dga-text-secondary        // Gray 700
$dga-text-muted            // Gray 600
$dga-text-inverse          // White
$dga-text-inverse-muted    // White 70%
$dga-text-brand            // SA 800
$dga-text-brand-secondary  // SA 600
$dga-text-error            // Error 600
$dga-text-warning          // Warning 600
$dga-text-success          // Success 600
$dga-text-info             // Info 600
```

**Component Defaults:**
```scss
$dga-body-bg               // Gray 25
$dga-body-color            // Text primary
$dga-link-color            // Saudi Green
$dga-link-hover-color      // Saudi Green 600
$dga-border-color          // Gray 200
$dga-border-color-light    // Gray 100
$dga-component-bg          // White
$dga-focus-ring-color      // Primary 25% opacity
```

---

## CSS Custom Properties

All colors are available as CSS custom properties (CSS variables) for JavaScript access.

### Using CSS Variables

```css
/* Access colors in CSS */
.my-element {
  background-color: var(--dga-primary-500);
  color: var(--dga-gray-950);
  border-color: var(--dga-primary-300);
}

/* Dynamic theming */
:root {
  --my-brand-color: var(--dga-primary-500);
}

.branded-element {
  background: var(--my-brand-color);
}
```

### JavaScript Access

```javascript
// Get color value
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--dga-primary-500');

console.log(primaryColor); // #25935f

// Set color dynamically
document.documentElement.style
  .setProperty('--dga-primary-500', '#ff0000');
```

### Available CSS Variables

**Format:** `--dga-{palette}-{shade}`

Examples:
```css
--dga-gray-50
--dga-gray-950
--dga-primary-500
--dga-gold-500
--dga-lavender-500
--dga-error-500
--dga-warning-500
--dga-info-500
--dga-success-500
```

---

## Best Practices

### 1. Use Semantic Colors for UI States

✅ **Good:**
```html
<button class="dga-bg-primary">Primary Action</button>
<button class="dga-bg-danger">Delete</button>
<div class="dga-bg-success-50 dga-text-success">Success message</div>
```

❌ **Avoid:**
```html
<button class="dga-bg-primary-500">Primary Action</button>
<button class="dga-bg-error-500">Delete</button>
```

**Why:** Semantic classes are easier to maintain and understand.

---

### 2. Follow Text Hierarchy

✅ **Good:**
```html
<h1 class="dga-text-primary">Main Heading</h1>
<p class="dga-text-secondary">Supporting text</p>
<small class="dga-text-muted">Additional info</small>
```

❌ **Avoid:**
```html
<h1 class="dga-text-gray-950">Main Heading</h1>
<p class="dga-text-gray-700">Supporting text</p>
```

---

### 3. Ensure Sufficient Contrast

✅ **Good:**
```html
<div class="dga-bg-white dga-text-primary">High contrast</div>
<div class="dga-bg-primary-500 dga-text-white">Good contrast</div>
```

❌ **Avoid:**
```html
<div class="dga-bg-gray-100 dga-text-gray-300">Poor contrast</div>
```

**Use:** WCAG AA standard (4.5:1 for normal text)

---

### 4. Use Light Backgrounds for Alerts

✅ **Good:**
```html
<div class="dga-bg-error-50 dga-text-error-700">Error message</div>
```

❌ **Avoid:**
```html
<div class="dga-bg-error-500 dga-text-white">Error message</div>
```

**Why:** Light backgrounds are less alarming and more readable.

---

### 5. Consistent Focus States

Always add focus states to interactive elements:

```html
<input class="dga-focus-ring-primary">
<button class="dga-focus-ring">Click me</button>
<a href="#" class="dga-focus-ring">Link</a>
```

---

### 6. Use Gradients Sparingly

✅ **Good uses:**
- Hero sections
- Card headers
- Call-to-action backgrounds

❌ **Avoid:**
- Body text backgrounds
- Form inputs
- Small UI elements

---

### 7. Maintain Brand Consistency

Always use Saudi Green (`primary-500`) as the primary brand color:

```html
<button class="dga-bg-primary-500">Primary Button</button>
<a class="dga-text-primary-600">Link</a>
```

---

### 8. Use Gold as Accent

Gold should complement, not dominate:

```html
<!-- Good: Gold as accent -->
<div class="dga-bg-white">
  <h2 class="dga-text-primary-700">Title</h2>
  <span class="dga-bg-gold-100 dga-text-gold-700">Premium</span>
</div>
```

---

## Color Utility Reference

### Quick Reference Table

| Utility Type | Pattern | Example |
|--------------|---------|---------|
| Text color | `.dga-text-{color}-{shade}` | `.dga-text-primary-500` |
| Background | `.dga-bg-{color}-{shade}` | `.dga-bg-gray-50` |
| Border color | `.dga-border-{color}-{shade}` | `.dga-border-primary-300` |
| Gradient | `.dga-bg-gradient-{name}` | `.dga-bg-gradient-primary` |
| Hover | `.dga-{property}-{color}-{shade}-hover` | `.dga-bg-primary-600-hover` |
| Focus | `.dga-focus-ring-{semantic}` | `.dga-focus-ring-primary` |
| Semantic | `.dga-{property}-{semantic}` | `.dga-bg-success` |
| Text hierarchy | `.dga-text-{type}` | `.dga-text-primary` |

---

## Migration & Customization

### Customizing Colors

To customize the color system, override variables before importing:

```scss
// Custom primary color (if not using Saudi Green)
$dga-sa-500: #custom-color;

// Custom secondary color
$dga-gold-500: #custom-gold;

// Then import
@import 'variables/colors';
@import 'utilities/colors';
```

### Extending the Palette

Add custom color shades:

```scss
// Add custom color
$my-brand-500: #ff6b6b;

$dga-custom: (
  "500": $my-brand-500,
);

// Generate utilities
@include generate-color-utilities((
  "custom-color": (
    "prefix": "custom",
    "property": "color",
    "colors": (
      "brand": $dga-custom
    )
  )
));
```

---

## Browser Support

All color utilities support:

- ✅ Chrome (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (all versions)
- ✅ Edge (all versions)
- ✅ IE 11 (with CSS custom property fallbacks)

---

## Resources

- **Design System:** Based on Saudi Arabia Platforms Code
- **Primary Color:** Saudi Green (#25935f)
- **Color Palettes:** 8 palettes × 12 shades = 96 colors
- **Utility Classes:** 1000+ generated classes

---

**Version:** 1.0.0  
**Last Updated:** December 2024  
**Maintained by:** DGA Design Team  
**License:** © 2024 DGA Design System. All rights reserved.
