# Border Radius

Radius utilities and component rounding patterns.

**Source:** `src/styles/utilities/radius.scss`

---

## Quick start (npm)

```js
import '@waaelg/dga-design-system/style.css'
```

```html
<button class="dga-btn dga-btn-primary dga-rounded-md">Button</button>
<div class="dga-card dga-rounded-lg">Card</div>
<img class="dga-rounded-full" src="avatar.jpg" alt="" />
```

| Class | Radius |
|-------|--------|
| `dga-rounded-sm` | 4px |
| `dga-rounded-md` | 8px (default for inputs/buttons) |
| `dga-rounded-lg` | 16px (cards) |
| `dga-rounded-full` | Pill / circle |

SCSS variables and mixins: [below](#scss-variables) (repo contributors).

---

## Table of Contents

1. [Overview](#overview)
2. [Radius Scale](#radius-scale)
3. [Basic Utilities](#basic-utilities)
4. [Side Utilities](#side-utilities)
5. [Corner Utilities](#corner-utilities)
6. [Component Patterns](#component-patterns)
7. [SCSS Variables](#scss-variables)
8. [SCSS Mixins](#scss-mixins)
9. [Usage Examples](#usage-examples)
10. [Best Practices](#best-practices)

---

## Overview

The DGA Border Radius system provides a consistent, scalable approach to rounded corners across your application. It includes:

- **7 base radius sizes** from sharp to fully rounded
- **3 extended sizes** for larger components
- **Directional utilities** for specific corners
- **Component-specific variables** for common UI patterns
- **SCSS mixins** for custom styling

### Philosophy

Border radius creates visual hierarchy and improves user experience by:
- Softening harsh edges for a friendlier interface
- Drawing attention to interactive elements
- Creating visual separation between components
- Establishing a consistent visual language

---

## Radius Scale

### Base Scale

| Size | Rem Value | Pixel Value | Use Case |
|------|-----------|-------------|----------|
| `none` | `0` | `0px` | Sharp corners, technical UIs |
| `xs` | `0.125rem` | `2px` | Subtle rounding, small elements |
| `sm` | `0.25rem` | `4px` | Tags, small badges |
| `md` | `0.5rem` | `8px` | **Default** - Buttons, inputs |
| `lg` | `1rem` | `16px` | Cards, panels |
| `xl` | `1.5rem` | `24px` | Modals, large cards |
| `full` | `9999px` | `Infinite` | Circles, pills |

### Extended Scale

| Size | Rem Value | Pixel Value | Use Case |
|------|-----------|-------------|----------|
| `2xl` | `2rem` | `32px` | Large modals |
| `3xl` | `2.5rem` | `40px` | Hero sections |
| `4xl` | `3rem` | `48px` | Extra large components |

### Visual Reference

```
none  ┌────────┐  No rounding
      │        │
      └────────┘

xs    ┌────────┐  Very subtle (2px)
      │        │
      └────────┘

sm    ╭────────╮  Subtle (4px)
      │        │
      ╰────────╯

md    ╭────────╮  Standard (8px) ⭐
      │        │
      ╰────────╯

lg    ╭────────╮  Prominent (16px)
      │        │
      ╰────────╯

xl    ╭────────╮  Very round (24px)
      │        │
      ╰────────╯

full  ╭────────╮  Pill/Circle (9999px)
      │        │
      ╰────────╯
```

---

## Basic Utilities

### All Corners

Apply the same radius to all four corners.

```html
<!-- No rounding -->
<div class="dga-rounded-none">Sharp corners</div>

<!-- Extra small (2px) -->
<div class="dga-rounded-xs">Subtle rounding</div>

<!-- Small (4px) -->
<div class="dga-rounded-sm">Small rounding</div>

<!-- Medium (8px) - Default ⭐ -->
<div class="dga-rounded-md">Standard rounding</div>

<!-- Large (16px) -->
<div class="dga-rounded-lg">Large rounding</div>

<!-- Extra large (24px) -->
<div class="dga-rounded-xl">Extra large rounding</div>

<!-- Full (pill/circle) -->
<div class="dga-rounded-full">Fully rounded</div>
```

**Pattern:** `.dga-rounded-{size}`

---

## Side Utilities

### Top Corners

Round only the top-left and top-right corners.

```html
<div class="dga-rounded-t-none">Sharp top</div>
<div class="dga-rounded-t-sm">Small rounded top</div>
<div class="dga-rounded-t-md">Medium rounded top</div>
<div class="dga-rounded-t-lg">Large rounded top</div>
<div class="dga-rounded-t-xl">Extra large rounded top</div>
```

**Pattern:** `.dga-rounded-t-{size}`

**Use Cases:**
- Card headers
- Modal titles
- Dropdown tops
- Accordion items

### Bottom Corners

Round only the bottom-left and bottom-right corners.

```html
<div class="dga-rounded-b-none">Sharp bottom</div>
<div class="dga-rounded-b-sm">Small rounded bottom</div>
<div class="dga-rounded-b-md">Medium rounded bottom</div>
<div class="dga-rounded-b-lg">Large rounded bottom</div>
<div class="dga-rounded-b-xl">Extra large rounded bottom</div>
```

**Pattern:** `.dga-rounded-b-{size}`

**Use Cases:**
- Card footers
- Dropdown bottoms
- Bottom sheets
- Toast notifications

### Left Corners

Round only the top-left and bottom-left corners.

```html
<div class="dga-rounded-l-none">Sharp left</div>
<div class="dga-rounded-l-sm">Small rounded left</div>
<div class="dga-rounded-l-md">Medium rounded left</div>
<div class="dga-rounded-l-lg">Large rounded left</div>
<div class="dga-rounded-l-xl">Extra large rounded left</div>
```

**Pattern:** `.dga-rounded-l-{size}`

**Use Cases:**
- Side panels (RTL layouts)
- Tab groups (left side)
- Split buttons (left part)

### Right Corners

Round only the top-right and bottom-right corners.

```html
<div class="dga-rounded-r-none">Sharp right</div>
<div class="dga-rounded-r-sm">Small rounded right</div>
<div class="dga-rounded-r-md">Medium rounded right</div>
<div class="dga-rounded-r-lg">Large rounded right</div>
<div class="dga-rounded-r-xl">Extra large rounded right</div>
```

**Pattern:** `.dga-rounded-r-{size}`

**Use Cases:**
- Side panels (LTR layouts)
- Tab groups (right side)
- Split buttons (right part)

---

## Corner Utilities

### Individual Corners

Apply radius to a single corner.

#### Top-Left

```html
<div class="dga-rounded-tl-none">Sharp top-left</div>
<div class="dga-rounded-tl-md">Rounded top-left</div>
<div class="dga-rounded-tl-lg">Large top-left</div>
```

**Pattern:** `.dga-rounded-tl-{size}`

#### Top-Right

```html
<div class="dga-rounded-tr-none">Sharp top-right</div>
<div class="dga-rounded-tr-md">Rounded top-right</div>
<div class="dga-rounded-tr-lg">Large top-right</div>
```

**Pattern:** `.dga-rounded-tr-{size}`

#### Bottom-Left

```html
<div class="dga-rounded-bl-none">Sharp bottom-left</div>
<div class="dga-rounded-bl-md">Rounded bottom-left</div>
<div class="dga-rounded-bl-lg">Large bottom-left</div>
```

**Pattern:** `.dga-rounded-bl-{size}`

#### Bottom-Right

```html
<div class="dga-rounded-br-none">Sharp bottom-right</div>
<div class="dga-rounded-br-md">Rounded bottom-right</div>
<div class="dga-rounded-br-lg">Large bottom-right</div>
```

**Pattern:** `.dga-rounded-br-{size}`

### Diagonal Corners

Create unique designs by rounding opposite corners.

```html
<!-- Top-left and bottom-right -->
<div class="dga-rounded-tl-lg dga-rounded-br-lg">
  Diagonal rounded corners
</div>

<!-- Top-right and bottom-left -->
<div class="dga-rounded-tr-lg dga-rounded-bl-lg">
  Opposite diagonal
</div>
```

---

## Component Patterns

### Buttons

```html
<!-- Default button (8px) -->
<button class="dga-rounded-md">Standard Button</button>

<!-- Small button (4px) -->
<button class="dga-rounded-sm">Small Button</button>

<!-- Large button (16px) -->
<button class="dga-rounded-lg">Large Button</button>

<!-- Pill button -->
<button class="dga-rounded-full">Pill Button</button>
```

**SCSS Variables:**
```scss
$dga-radius-button: 8px;      // Default
$dga-radius-button-sm: 4px;   // Small
$dga-radius-button-lg: 16px;  // Large
$dga-radius-button-pill: 9999px; // Pill
```

---

### Cards

```html
<!-- Default card (16px) -->
<div class="dga-rounded-lg dga-border">
  <div class="card-header">Header</div>
  <div class="card-body">Content</div>
</div>

<!-- Small card (8px) -->
<div class="dga-rounded-md dga-border">
  Compact card
</div>

<!-- Large card (24px) -->
<div class="dga-rounded-xl dga-border">
  Premium card
</div>

<!-- Card with header (rounded top only) -->
<div class="dga-border">
  <div class="dga-bg-gray-100 dga-rounded-t-lg">
    Header
  </div>
  <div>
    Body content
  </div>
</div>
```

**SCSS Variables:**
```scss
$dga-radius-card: 16px;    // Default
$dga-radius-card-sm: 8px;  // Small
$dga-radius-card-lg: 24px; // Large
```

---

### Form Inputs

```html
<!-- Default input (8px) -->
<input type="text" class="dga-rounded-md" placeholder="Email">

<!-- Small input (4px) -->
<input type="text" class="dga-rounded-sm dga-input-sm" placeholder="Search">

<!-- Large input (16px) -->
<input type="text" class="dga-rounded-lg dga-input-lg" placeholder="Search">

<!-- Input group -->
<div style="display: flex;">
  <input type="text" class="dga-rounded-l-md" style="border-right: none;">
  <button class="dga-rounded-r-md">Submit</button>
</div>
```

**SCSS Variables:**
```scss
$dga-radius-input: 8px;    // Default
$dga-radius-input-sm: 4px; // Small
$dga-radius-input-lg: 16px; // Large
```

---

### Modals & Dialogs

```html
<!-- Modal (24px) -->
<div class="dga-rounded-xl dga-bg-white" style="width: 500px;">
  <div class="modal-header">
    <h2>Modal Title</h2>
  </div>
  <div class="modal-body">
    Modal content
  </div>
</div>

<!-- Dialog (16px) -->
<div class="dga-rounded-lg dga-bg-white" style="width: 400px;">
  <p>Are you sure you want to continue?</p>
  <div>
    <button class="dga-rounded-md">Cancel</button>
    <button class="dga-rounded-md">Confirm</button>
  </div>
</div>
```

**SCSS Variables:**
```scss
$dga-radius-modal: 24px;   // Modals
$dga-radius-dialog: 16px;  // Dialogs
```

---

### Badges & Tags

```html
<!-- Badge (pill shape) -->
<span class="dga-rounded-full dga-bg-primary-100 dga-text-primary-700" 
      style="padding: 4px 12px; font-size: 14px;">
  Active
</span>

<!-- Tag (4px) -->
<span class="dga-rounded-sm dga-bg-gray-200 dga-text-gray-700" 
      style="padding: 2px 8px; font-size: 12px;">
  Technology
</span>

<!-- Status badge -->
<span class="dga-rounded-full dga-bg-success-500" 
      style="width: 8px; height: 8px; display: inline-block;">
</span>
Online
```

**SCSS Variables:**
```scss
$dga-radius-badge: 9999px; // Pill
$dga-radius-tag: 4px;      // Small
```

---

### Avatars

```html
<!-- Rounded avatar (16px) -->
<img src="avatar.jpg" class="dga-rounded-lg" 
     style="width: 48px; height: 48px;">

<!-- Circular avatar -->
<img src="avatar.jpg" class="dga-rounded-full" 
     style="width: 48px; height: 48px;">

<!-- Avatar with status -->
<div style="position: relative; display: inline-block;">
  <img src="avatar.jpg" class="dga-rounded-full" 
       style="width: 48px; height: 48px;">
  <span class="dga-rounded-full dga-bg-success-500" 
        style="width: 12px; height: 12px; position: absolute; bottom: 0; right: 0; border: 2px solid white;">
  </span>
</div>
```

**SCSS Variables:**
```scss
$dga-radius-avatar-rounded: 16px; // Rounded
$dga-radius-avatar-circle: 9999px; // Circle
```

---

### Dropdowns & Selects

```html
<!-- Dropdown (8px) -->
<div class="dga-rounded-md dga-border dga-bg-white" 
     style="min-width: 200px;">
  <div style="padding: 8px 12px;">Option 1</div>
  <div style="padding: 8px 12px;">Option 2</div>
  <div style="padding: 8px 12px;">Option 3</div>
</div>

<!-- Select input (8px) -->
<select class="dga-rounded-md dga-border">
  <option>Select option</option>
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

**SCSS Variables:**
```scss
$dga-radius-dropdown: 8px; // Dropdowns
$dga-radius-select: 8px;   // Selects
```

---

### Tooltips

```html
<!-- Tooltip (4px) -->
<div class="dga-rounded-sm dga-bg-gray-900 dga-text-white" 
     style="padding: 6px 12px; font-size: 14px;">
  This is a tooltip
</div>
```

**SCSS Variables:**
```scss
$dga-radius-tooltip: 4px;
```

---

### Images & Thumbnails

```html
<!-- Rounded image (16px) -->
<img src="photo.jpg" class="dga-rounded-lg" 
     style="width: 300px; height: 200px; object-fit: cover;">

<!-- Thumbnail (8px) -->
<img src="thumb.jpg" class="dga-rounded-md" 
     style="width: 100px; height: 100px; object-fit: cover;">

<!-- Circular profile image -->
<img src="profile.jpg" class="dga-rounded-full" 
     style="width: 120px; height: 120px; object-fit: cover;">
```

**SCSS Variables:**
```scss
$dga-radius-image: 16px;     // Images
$dga-radius-thumbnail: 8px;  // Thumbnails
```

---

## SCSS Variables

### Direct Access

Use radius variables directly in your SCSS:

```scss
// Import variables
@import 'variables/radius';

// Apply to elements
.my-button {
  border-radius: $dga-radius-md; // 8px
}

.my-card {
  border-radius: $dga-radius-lg; // 16px
}

.my-badge {
  border-radius: $dga-radius-full; // 9999px
}
```

### Available Variables

#### Base Sizes

```scss
$dga-radius-none: 0;
$dga-radius-xs: 0.125rem;   // 2px
$dga-radius-sm: 0.25rem;    // 4px
$dga-radius-md: 0.5rem;     // 8px
$dga-radius-lg: 1rem;       // 16px
$dga-radius-xl: 1.5rem;     // 24px
$dga-radius-full: 9999px;   // Fully rounded
```

#### Extended Sizes

```scss
$dga-radius-2xl: 2rem;      // 32px
$dga-radius-3xl: 2.5rem;    // 40px
$dga-radius-4xl: 3rem;      // 48px
```

#### Component-Specific

```scss
// Buttons
$dga-radius-button: $dga-radius-md;
$dga-radius-button-sm: $dga-radius-sm;
$dga-radius-button-lg: $dga-radius-lg;
$dga-radius-button-pill: $dga-radius-full;

// Cards
$dga-radius-card: $dga-radius-lg;
$dga-radius-card-sm: $dga-radius-md;
$dga-radius-card-lg: $dga-radius-xl;

// Inputs
$dga-radius-input: $dga-radius-md;
$dga-radius-input-sm: $dga-radius-sm;
$dga-radius-input-lg: $dga-radius-lg;

// Modals
$dga-radius-modal: $dga-radius-xl;
$dga-radius-dialog: $dga-radius-lg;

// Badges & Tags
$dga-radius-badge: $dga-radius-full;
$dga-radius-tag: $dga-radius-sm;

// Avatars
$dga-radius-avatar-rounded: $dga-radius-lg;
$dga-radius-avatar-circle: $dga-radius-full;

// Dropdowns
$dga-radius-dropdown: $dga-radius-md;
$dga-radius-select: $dga-radius-md;

// Tooltips
$dga-radius-tooltip: $dga-radius-sm;

// Images
$dga-radius-image: $dga-radius-lg;
$dga-radius-thumbnail: $dga-radius-md;
```

### Helper Function

```scss
// Access radius from map
@function radius($key) {
  @return map-get($dga-radius, $key);
}

// Usage
.my-element {
  border-radius: radius("lg"); // 16px
}
```

---

## SCSS Mixins

### All Corners

```scss
@mixin border-radius($size: "md") {
  border-radius: map-get($dga-radius, $size);
}

// Usage
.my-card {
  @include border-radius("lg");
}
```

### Top Corners

```scss
@mixin border-radius-top($size: "md") {
  border-top-left-radius: map-get($dga-radius, $size);
  border-top-right-radius: map-get($dga-radius, $size);
}

// Usage
.card-header {
  @include border-radius-top("lg");
}
```

### Bottom Corners

```scss
@mixin border-radius-bottom($size: "md") {
  border-bottom-left-radius: map-get($dga-radius, $size);
  border-bottom-right-radius: map-get($dga-radius, $size);
}

// Usage
.card-footer {
  @include border-radius-bottom("lg");
}
```

### Left Corners

```scss
@mixin border-radius-left($size: "md") {
  border-top-left-radius: map-get($dga-radius, $size);
  border-bottom-left-radius: map-get($dga-radius, $size);
}

// Usage
.sidebar {
  @include border-radius-left("md");
}
```

### Right Corners

```scss
@mixin border-radius-right($size: "md") {
  border-top-right-radius: map-get($dga-radius, $size);
  border-bottom-right-radius: map-get($dga-radius, $size);
}

// Usage
.panel {
  @include border-radius-right("md");
}
```

---

## Usage Examples

### Example 1: Card with Rounded Header

```html
<div class="dga-border dga-bg-white">
  <!-- Header with rounded top -->
  <div class="dga-bg-primary-500 dga-text-white dga-rounded-t-lg" 
       style="padding: 20px;">
    <h3 style="margin: 0;">Card Title</h3>
  </div>
  
  <!-- Body -->
  <div style="padding: 20px;">
    <p>Card content goes here</p>
  </div>
  
  <!-- Footer -->
  <div class="dga-bg-gray-50 dga-border-top dga-rounded-b-lg" 
       style="padding: 16px;">
    <button class="dga-rounded-md">Action</button>
  </div>
</div>
```

### Example 2: Input Group

```html
<div style="display: flex;">
  <!-- Left input (rounded left only) -->
  <input type="text" 
         class="dga-rounded-l-md dga-border" 
         placeholder="Search..."
         style="flex: 1; padding: 10px; border-right: none;">
  
  <!-- Right button (rounded right only) -->
  <button class="dga-rounded-r-md dga-bg-primary-500 dga-text-white" 
          style="padding: 10px 20px; border: none;">
    Search
  </button>
</div>
```

### Example 3: Stacked Cards

```html
<div style="display: flex; flex-direction: column; gap: 0;">
  <!-- First card (rounded top) -->
  <div class="dga-rounded-t-lg dga-border" style="padding: 16px;">
    <h4>Card 1</h4>
  </div>
  
  <!-- Middle cards (no rounding) -->
  <div class="dga-border dga-border-t-none" style="padding: 16px;">
    <h4>Card 2</h4>
  </div>
  
  <div class="dga-border dga-border-t-none" style="padding: 16px;">
    <h4>Card 3</h4>
  </div>
  
  <!-- Last card (rounded bottom) -->
  <div class="dga-rounded-b-lg dga-border dga-border-t-none" style="padding: 16px;">
    <h4>Card 4</h4>
  </div>
</div>
```

### Example 4: Button Group

```html
<div style="display: inline-flex;">
  <!-- First button (rounded left) -->
  <button class="dga-rounded-l-md dga-bg-primary-500 dga-text-white" 
          style="padding: 10px 20px; border: none; border-right: 1px solid white;">
    Option 1
  </button>
  
  <!-- Middle button (no rounding) -->
  <button class="dga-bg-primary-500 dga-text-white" 
          style="padding: 10px 20px; border: none; border-right: 1px solid white;">
    Option 2
  </button>
  
  <!-- Last button (rounded right) -->
  <button class="dga-rounded-r-md dga-bg-primary-500 dga-text-white" 
          style="padding: 10px 20px; border: none;">
    Option 3
  </button>
</div>
```

### Example 5: Modal Dialog

```html
<div class="dga-rounded-xl dga-bg-white" 
     style="width: 500px; max-width: 90vw; overflow: hidden;">
  
  <!-- Modal Header -->
  <div class="dga-bg-gradient-primary dga-text-white" 
       style="padding: 24px;">
    <h2 style="margin: 0;">Confirmation</h2>
  </div>
  
  <!-- Modal Body -->
  <div style="padding: 24px;">
    <p>Are you sure you want to proceed with this action?</p>
  </div>
  
  <!-- Modal Footer -->
  <div class="dga-bg-gray-50 dga-border-top" 
       style="padding: 16px; display: flex; gap: 12px; justify-content: flex-end;">
    <button class="dga-rounded-md dga-border dga-border-gray-300" 
            style="padding: 10px 20px;">
      Cancel
    </button>
    <button class="dga-rounded-md dga-bg-primary-500 dga-text-white" 
            style="padding: 10px 20px; border: none;">
      Confirm
    </button>
  </div>
</div>
```

### Example 6: Profile Card

```html
<div class="dga-rounded-lg dga-bg-white dga-border" 
     style="padding: 24px; text-align: center;">
  
  <!-- Avatar -->
  <img src="avatar.jpg" 
       class="dga-rounded-full" 
       style="width: 100px; height: 100px; object-fit: cover; margin: 0 auto;">
  
  <!-- Name -->
  <h3 style="margin: 16px 0 4px;">John Doe</h3>
  <p class="dga-text-secondary" style="margin: 0 0 16px;">Software Engineer</p>
  
  <!-- Status Badge -->
  <span class="dga-rounded-full dga-bg-success-100 dga-text-success-700" 
        style="padding: 4px 12px; font-size: 14px;">
    Available
  </span>
  
  <!-- Actions -->
  <div style="margin-top: 24px; display: flex; gap: 12px; justify-content: center;">
    <button class="dga-rounded-md dga-bg-primary-500 dga-text-white" 
            style="padding: 10px 20px; border: none;">
      Message
    </button>
    <button class="dga-rounded-md dga-border dga-border-gray-300" 
            style="padding: 10px 20px; background: white;">
      Follow
    </button>
  </div>
</div>
```

### Example 7: Notification Toast

```html
<div class="dga-rounded-lg dga-bg-white dga-border dga-border-success-200" 
     style="padding: 16px; display: flex; align-items: start; gap: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
  
  <!-- Icon -->
  <div class="dga-rounded-full dga-bg-success-500" 
       style="width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
    <span style="color: white; font-size: 16px;">✓</span>
  </div>
  
  <!-- Content -->
  <div style="flex: 1;">
    <h4 class="dga-text-success-800" style="margin: 0 0 4px;">Success</h4>
    <p class="dga-text-secondary" style="margin: 0; font-size: 14px;">
      Your changes have been saved successfully.
    </p>
  </div>
  
  <!-- Close button -->
  <button class="dga-rounded-sm" 
          style="background: none; border: none; cursor: pointer; padding: 4px;">
    ✕
  </button>
</div>
```

---

## Best Practices

### 1. Use Consistent Sizes

✅ **Good:**
```html
<!-- All buttons use the same radius -->
<button class="dga-rounded-md">Primary</button>
<button class="dga-rounded-md">Secondary</button>
<button class="dga-rounded-md">Tertiary</button>
```

❌ **Avoid:**
```html
<!-- Inconsistent radius sizes -->
<button class="dga-rounded-sm">Primary</button>
<button class="dga-rounded-lg">Secondary</button>
<button class="dga-rounded-xl">Tertiary</button>
```

---

### 2. Match Component Hierarchy

Larger, more important components should have larger radius:

```html
<!-- Modal (xl) > Card (lg) > Button (md) > Tag (sm) -->
<div class="dga-rounded-xl"><!-- Modal --></div>
<div class="dga-rounded-lg"><!-- Card --></div>
<button class="dga-rounded-md">Button</button>
<span class="dga-rounded-sm">Tag</span>
```

---

### 3. Round Interactive Elements

Make interactive elements more inviting:

```html
<!-- Interactive elements benefit from rounding -->
<button class="dga-rounded-md">Click me</button>
<a href="#" class="dga-rounded-md">Link</a>
<input class="dga-rounded-md">
```

---

### 4. Use Full Radius Sparingly

Reserve `full` radius for specific use cases:

✅ **Good uses:**
- Badges and status indicators
- Avatars and profile images
- Pill-shaped buttons (CTAs)
- Icon containers

❌ **Avoid:**
- Large cards
- Form containers
- Navigation menus

---

### 5. Consider Touch Targets

Rounded corners should not reduce touch/click areas:

```html
<!-- Maintain adequate padding with rounded corners -->
<button class="dga-rounded-md" 
        style="padding: 12px 24px; min-height: 44px;">
  Touch-friendly button
</button>
```

---

### 6. Coordinate with Borders

Radius works best with borders:

```html
<!-- Radius + border = defined shape -->
<div class="dga-rounded-lg dga-border dga-border-gray-200">
  Card content
</div>
```

---

### 7. Group Related Elements

Use side-specific radius for grouped elements:

```html
<!-- Button group -->
<div style="display: flex;">
  <button class="dga-rounded-l-md">Left</button>
  <button class="dga-rounded-r-md">Right</button>
</div>

<!-- Accordion -->
<div class="dga-rounded-t-lg dga-border">Item 1</div>
<div class="dga-border dga-border-t-none">Item 2</div>
<div class="dga-rounded-b-lg dga-border dga-border-t-none">Item 3</div>
```

---

### 8. Test Across Devices

Radius may appear different on various screen sizes:

```scss
// Adjust for small screens if needed
@media (max-width: 768px) {
  .my-card {
    border-radius: $dga-radius-md; // Smaller on mobile
  }
}
```

---

### 9. Accessibility Considerations

- Rounded corners don't affect accessibility
- Ensure sufficient contrast at edges
- Maintain focus indicators on rounded elements

```html
<!-- Focus ring on rounded button -->
<button class="dga-rounded-md dga-focus-ring-primary">
  Accessible button
</button>
```

---

### 10. Performance

Border radius is well-optimized, but:
- Avoid animating border-radius (use transform instead)
- Complex shapes with multiple radii are fine
- Don't add radius to elements that don't need it

---

## Common Patterns

### Card Collection

```
┌─────────┐  ┌─────────┐  ┌─────────┐
│ Card 1  │  │ Card 2  │  │ Card 3  │
│ rounded │  │ rounded │  │ rounded │
│   -lg   │  │   -lg   │  │   -lg   │
└─────────┘  └─────────┘  └─────────┘
```

### Button Group

```
┌──────┬──────┬──────┐
│ One  │ Two  │Three │
│  l   │      │  r   │
└──────┴──────┴──────┘
```

### Stacked List

```
╭────────────────╮  ← rounded-t
│ Item 1         │
├────────────────┤
│ Item 2         │
├────────────────┤
│ Item 3         │
╰────────────────╯  ← rounded-b
```

### Modal

```
╭────────────────────╮  ← rounded-xl
│ Modal Title        │
├────────────────────┤
│                    │
│ Modal Content      │
│                    │
├────────────────────┤
│  [Cancel] [Confirm]│
╰────────────────────╯
```

---

## Quick Reference

### All Utilities

| Pattern | Example | Result |
|---------|---------|--------|
| `.dga-rounded-{size}` | `.dga-rounded-lg` | All corners |
| `.dga-rounded-t-{size}` | `.dga-rounded-t-md` | Top corners |
| `.dga-rounded-b-{size}` | `.dga-rounded-b-md` | Bottom corners |
| `.dga-rounded-l-{size}` | `.dga-rounded-l-md` | Left corners |
| `.dga-rounded-r-{size}` | `.dga-rounded-r-md` | Right corners |
| `.dga-rounded-tl-{size}` | `.dga-rounded-tl-lg` | Top-left |
| `.dga-rounded-tr-{size}` | `.dga-rounded-tr-lg` | Top-right |
| `.dga-rounded-bl-{size}` | `.dga-rounded-bl-lg` | Bottom-left |
| `.dga-rounded-br-{size}` | `.dga-rounded-br-lg` | Bottom-right |

### Size Values

| Size | Pixel | Use |
|------|-------|-----|
| `none` | 0px | Sharp |
| `xs` | 2px | Subtle |
| `sm` | 4px | Small |
| `md` | 8px | Default ⭐ |
| `lg` | 16px | Large |
| `xl` | 24px | Extra large |
| `full` | ∞ | Pill/Circle |

---

## Browser Support

All radius utilities support:

- ✅ Chrome (all versions)
- ✅ Firefox (all versions)
- ✅ Safari (all versions)
- ✅ Edge (all versions)
- ✅ IE 9+ (border-radius support)

---

**Version:** 1.0.0  
**Last Updated:** December 2024  
**Maintained by:** DGA Design Team
