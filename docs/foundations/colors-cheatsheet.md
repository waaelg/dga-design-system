# Colors — Quick Reference

Cheatsheet for common DGA color utilities. Full guide: [colors.md](./colors.md) · Swatches: [colors-swatches.md](./colors-swatches.md)

**Source:** `src/styles/utilities/colors.scss`

---

## 🎨 Color Palettes

### Gray (Neutral)
```
25  → #fcfcfd  (Body BG)
50  → #f9fafb  (Light BG)
200 → #e5e7eb  (Borders)
600 → #4d5761  (Muted text)
700 → #384250  (Secondary text)
950 → #0d121c  (Primary text)
```

### Primary (Saudi Green 🇸🇦)
```
500 → #25935f  ⭐ Main brand color
600 → #1b8354  (Hover)
700 → #166a45  (Active)
800 → #14573a  (Brand text)
```

### Gold (Secondary)
```
500 → #f5bd02  ⭐ Secondary color
600 → #dba102  (Hover)
```

### Semantic Colors
```
Error   → #f04438  (Red)
Warning → #f79009  (Orange)
Info    → #2e90fa  (Blue)
Success → #17b26a  (Green)
```

---

## 🎯 Semantic Classes

### Backgrounds
```html
.dga-bg-primary      <!-- Saudi Green -->
.dga-bg-secondary    <!-- Gold -->
.dga-bg-success      <!-- Green -->
.dga-bg-info         <!-- Blue -->
.dga-bg-warning      <!-- Orange -->
.dga-bg-danger       <!-- Red -->
.dga-bg-light        <!-- Light gray -->
.dga-bg-dark         <!-- Dark gray -->
```

### Text Colors
```html
.dga-text-primary    <!-- Main text (gray-950) -->
.dga-text-secondary  <!-- Secondary text (gray-700) -->
.dga-text-muted      <!-- Muted text (gray-600) -->
.dga-text-white      <!-- White -->
.dga-text-black      <!-- Black -->
.dga-text-inverse    <!-- White on dark -->
.dga-text-brand      <!-- Brand text (SA-800) -->
.dga-text-error      <!-- Error text -->
.dga-text-warning    <!-- Warning text -->
.dga-text-success    <!-- Success text -->
.dga-text-info       <!-- Info text -->
```

### Borders
```html
.dga-border-primary
.dga-border-secondary
.dga-border-success
.dga-border-danger
```

---

## 📊 Color Shade Classes

### Pattern
```html
.dga-{property}-{palette}-{shade}
```

### Examples
```html
<!-- Text colors -->
.dga-text-primary-500    <!-- Saudi green text -->
.dga-text-gray-600       <!-- Gray text -->
.dga-text-error-700      <!-- Dark red text -->

<!-- Backgrounds -->
.dga-bg-primary-500      <!-- Saudi green BG -->
.dga-bg-gray-50          <!-- Light gray BG -->
.dga-bg-error-50         <!-- Light red BG -->

<!-- Borders -->
.dga-border-primary-300  <!-- Light green border -->
.dga-border-gray-200     <!-- Gray border -->
```

### All Palettes
- `gray` (25-950)
- `primary` (25-950)
- `gold` (25-950)
- `lavender` (25-950)
- `error` (25-950)
- `warning` (25-950)
- `info` (25-950)
- `success` (25-950)

---

## 🎨 Gradients

```html
.dga-bg-gradient-primary    <!-- Horizontal green -->
.dga-bg-gradient-secondary  <!-- Diagonal green -->
.dga-bg-gradient-dark       <!-- Dark to green -->
.dga-bg-gradient-medium     <!-- Medium green -->
.dga-bg-gradient-subtle     <!-- Subtle green -->
.dga-bg-gradient-deep       <!-- Deep green -->
```

---

## 🖱️ Hover States

```html
<!-- Pattern -->
.dga-{property}-{color}-{shade}-hover

<!-- Examples -->
.dga-bg-primary-600-hover:hover
.dga-text-primary-700-hover:hover
.dga-border-gray-400-hover:hover
```

---

## 🎯 Focus States

```html
.dga-focus-ring              <!-- Default (primary) -->
.dga-focus-ring-primary      <!-- Primary focus -->
.dga-focus-ring-error        <!-- Error focus -->
.dga-focus-ring-warning      <!-- Warning focus -->
.dga-focus-ring-success      <!-- Success focus -->
.dga-focus-ring-info         <!-- Info focus -->
```

---

## 📏 Border Utilities

```html
.dga-border              <!-- Default border (gray-200) -->
.dga-border-light        <!-- Light border (gray-100) -->
.dga-border-top          <!-- Top only -->
.dga-border-right        <!-- Right only -->
.dga-border-bottom       <!-- Bottom only -->
.dga-border-left         <!-- Left only -->
.dga-border-none         <!-- No border -->
```

**Note:** Add `.dga-border` first, then color class:
```html
<div class="dga-border dga-border-primary-500">
```

---

## 🎯 Common Patterns

### Alert Messages

#### Error
```html
<div class="dga-bg-error-50 dga-border dga-border-error-200 dga-text-error-700">
  Error message
</div>
```

#### Warning
```html
<div class="dga-bg-warning-50 dga-border dga-border-warning-200 dga-text-warning-700">
  Warning message
</div>
```

#### Success
```html
<div class="dga-bg-success-50 dga-border dga-border-success-200 dga-text-success-700">
  Success message
</div>
```

#### Info
```html
<div class="dga-bg-info-50 dga-border dga-border-info-200 dga-text-info-700">
  Info message
</div>
```

---

### Buttons

#### Primary
```html
<button class="dga-bg-primary-500 dga-bg-primary-600-hover dga-text-white dga-focus-ring-primary">
  Primary
</button>
```

#### Secondary
```html
<button class="dga-bg-white dga-border dga-border-primary-500 dga-text-primary-600 dga-bg-primary-50-hover">
  Secondary
</button>
```

#### Danger
```html
<button class="dga-bg-error-500 dga-bg-error-600-hover dga-text-white dga-focus-ring-error">
  Delete
</button>
```

#### Ghost
```html
<button class="dga-bg-transparent dga-text-primary-600 dga-text-primary-700-hover">
  Ghost
</button>
```

---

### Badges

```html
<span class="dga-bg-primary-100 dga-text-primary-700">Active</span>
<span class="dga-bg-success-100 dga-text-success-700">Completed</span>
<span class="dga-bg-warning-100 dga-text-warning-700">Pending</span>
<span class="dga-bg-error-100 dga-text-error-700">Failed</span>
<span class="dga-bg-gray-100 dga-text-gray-700">Draft</span>
```

---

### Form Inputs

#### Normal
```html
<input class="dga-border dga-border-gray-300 dga-focus-ring-primary">
```

#### Error
```html
<input class="dga-border dga-border-error-500 dga-bg-error-50 dga-focus-ring-error">
<p class="dga-text-error-600">Error message</p>
```

#### Success
```html
<input class="dga-border dga-border-success-500 dga-bg-success-50">
<p class="dga-text-success-600">✓ Success message</p>
```

---

### Cards

#### Basic Card
```html
<div class="dga-bg-white dga-border dga-border-gray-200">
  <div class="dga-bg-gray-50">
    Header
  </div>
  <div>
    Content
  </div>
</div>
```

#### Card with Gradient Header
```html
<div class="dga-bg-white dga-border dga-border-gray-200">
  <div class="dga-bg-gradient-primary dga-text-white">
    Header
  </div>
  <div>
    Content
  </div>
</div>
```

---

### Hero Sections

```html
<section class="dga-bg-gradient-primary dga-text-white">
  <h1>Welcome to DGA</h1>
  <p class="dga-text-inverse-muted">Subtitle</p>
  <button class="dga-bg-white dga-text-primary-600">
    Get Started
  </button>
</section>
```

---

### Links

```html
<!-- Default link -->
<a href="#" class="dga-text-primary-600 dga-text-primary-700-hover">
  Link
</a>

<!-- Underlined link -->
<a href="#" class="dga-text-primary-600" 
   style="text-decoration: underline;">
  Link
</a>

<!-- Link on dark background -->
<div class="dga-bg-dark">
  <a href="#" class="dga-text-inverse dga-text-white-hover">
    Link
  </a>
</div>
```

---

## ✅ Accessibility

### Text Contrast

| Background | Use Text Color |
|------------|----------------|
| `bg-white` | `text-primary`, `text-secondary` |
| `bg-gray-50` | `text-primary` |
| `bg-primary-500` | `text-white` |
| `bg-dark` | `text-inverse` |
| `bg-error-50` | `text-error-700` |
| `bg-success-50` | `text-success-700` |

### Good Combinations ✅

```html
<div class="dga-bg-white dga-text-primary">Good</div>
<div class="dga-bg-primary-500 dga-text-white">Good</div>
<div class="dga-bg-error-50 dga-text-error-700">Good</div>
```

### Poor Combinations ❌

```html
<div class="dga-bg-gray-100 dga-text-gray-300">Poor</div>
<div class="dga-bg-primary-900 dga-text-primary-800">Poor</div>
```

---

## 📝 SCSS Variables

### Quick Access

```scss
// Primary color
$dga-sa-500           // #25935f (Saudi Green)
$dga-semantic-primary // Same as above

// Text colors
$dga-text-primary     // Gray 950
$dga-text-secondary   // Gray 700
$dga-text-muted       // Gray 600

// Semantic
$dga-semantic-success
$dga-semantic-error
$dga-semantic-warning
$dga-semantic-info

// Gradients
$dga-gradient-sa-primary
$dga-gradient-sa-dark

// Borders
$dga-border-color       // Gray 200
$dga-border-color-light // Gray 100

// Body
$dga-body-bg           // Gray 25
$dga-body-color        // Text primary
```

---

## 🎨 CSS Custom Properties

### Access in CSS

```css
.my-element {
  background: var(--dga-primary-500);
  color: var(--dga-gray-950);
  border: 1px solid var(--dga-primary-300);
}
```

### JavaScript Access

```javascript
// Get color
const green = getComputedStyle(document.documentElement)
  .getPropertyValue('--dga-primary-500');

// Set color
document.documentElement.style
  .setProperty('--dga-primary-500', '#custom');
```

---

## 💡 Best Practices

### Do's ✅

- Use semantic classes for UI states
- Follow text hierarchy (primary → secondary → muted)
- Ensure WCAG AA contrast (4.5:1)
- Use light backgrounds for alerts
- Add focus states to interactive elements
- Use Saudi Green as primary brand color
- Use Gold sparingly as accent

### Don'ts ❌

- Don't use light text on light backgrounds
- Don't use dark text on dark backgrounds
- Don't overuse gradients
- Don't mix too many colors in one UI
- Don't forget accessibility

---

## 🔍 Quick Debug

### Color not working?
- ✓ Class spelled correctly?
- ✓ Using correct pattern?
- ✓ Utilities imported?
- ✓ Using `!important` override?

### Poor contrast?
- ✓ Check background/text combo
- ✓ Use contrast checker
- ✓ Follow recommended combinations

### Hover not working?
- ✓ Added `:hover` pseudo-class?
- ✓ Using `-hover` suffix?
- ✓ Element is interactive?

---

## 📱 All Generated Classes

### Text Colors
```
.dga-text-white
.dga-text-black
.dga-text-primary (gray-950)
.dga-text-secondary (gray-700)
.dga-text-muted (gray-600)
.dga-text-inverse (white)
.dga-text-inverse-muted (white 70%)
.dga-text-brand (SA-800)
.dga-text-brand-secondary (SA-600)
.dga-text-error
.dga-text-warning
.dga-text-success
.dga-text-info
.dga-text-danger
.dga-text-light
.dga-text-dark
.dga-text-{palette}-{shade} (96 colors)
```

### Background Colors
```
.dga-bg-primary
.dga-bg-secondary
.dga-bg-success
.dga-bg-info
.dga-bg-warning
.dga-bg-danger
.dga-bg-light
.dga-bg-dark
.dga-bg-{palette}-{shade} (96 colors)
```

### Border Colors
```
.dga-border
.dga-border-light
.dga-border-top/right/bottom/left
.dga-border-none
.dga-border-primary
.dga-border-secondary
.dga-border-{palette}-{shade} (96 colors)
```

### Gradients
```
.dga-bg-gradient-primary
.dga-bg-gradient-secondary
.dga-bg-gradient-dark
.dga-bg-gradient-medium
.dga-bg-gradient-subtle
.dga-bg-gradient-deep
```

### Hover States
```
.dga-{property}-{palette}-{shade}-hover:hover
```

### Focus States
```
.dga-focus-ring
.dga-focus-ring-primary
.dga-focus-ring-error
.dga-focus-ring-warning
.dga-focus-ring-success
.dga-focus-ring-info
```

---

## 🎯 Color Values Reference

### Saudi Green Shades
```
25  → #f7fdf9
50  → #f3fcf6
100 → #dff6e7
200 → #b8eacb
300 → #88d8ad
400 → #54c08a
500 → #25935f  ⭐ MAIN
600 → #1b8354
700 → #166a45
800 → #14573a
900 → #104631
950 → #092a1e
```

### Semantic Values
```
Primary   → #25935f (SA Green 500)
Secondary → #f5bd02 (Gold 500)
Success   → #17b26a (Success 500)
Info      → #2e90fa (Info 500)
Warning   → #f79009 (Warning 500)
Danger    → #f04438 (Error 500)
Light     → #f9fafb (Gray 50)
Dark      → #111927 (Gray 900)
```

---

## 📖 Resources

- **Full documentation:** [colors.md](./colors.md)
- **Primary Brand:** Saudi Green (#25935f)
- **Total Colors:** 96 shades across 8 palettes
- **Utility Classes:** 1000+ generated

---

**Version:** 1.0.0  
**Quick access to all DGA color utilities**
