# Colors — Swatches

Visual hex reference for all DGA palettes. Full guide: [colors.md](./colors.md) · Cheatsheet: [colors-cheatsheet.md](./colors-cheatsheet.md)

---

## 🎨 Color Palettes Overview

The DGA Design System includes **8 color palettes** with **12 shades each** (25-950), totaling **96 colors**.

---

## Gray (Neutral Palette)

<ColorPalette palette="gray" />

**Primary Uses:** Text hierarchy, backgrounds, borders

---

## Primary - Saudi Green 🇸🇦 (Brand Palette)

<ColorPalette palette="primary" />

**Main Color:** `#25935f` (500 shade)  
**Primary Uses:** Buttons, links, brand elements, CTAs

---

## Gold (Secondary Palette)

<ColorPalette palette="gold" />

**Main Color:** `#f5bd02` (500 shade)  
**Primary Uses:** Secondary buttons, badges, accents, premium features

---

## Lavender (Accent Palette)

<ColorPalette palette="lavender" />

**Main Color:** `#80519f` (500 shade)  
**Primary Uses:** Special highlights, tertiary elements, decorative accents

---

## Error/Danger (Red Palette)

<ColorPalette palette="error" />

**Main Color:** `#f04438` (500 shade)  
**Text Color:** `#d92d20` (600 shade)  
**Primary Uses:** Error messages, delete buttons, validation errors, alerts

---

## Warning (Orange Palette)

<ColorPalette palette="warning" />

**Main Color:** `#f79009` (500 shade)  
**Text Color:** `#dc6803` (600 shade)  
**Primary Uses:** Warning messages, caution states, pending actions

---

## Info (Blue Palette)

<ColorPalette palette="info" />

**Main Color:** `#2e90fa` (500 shade)  
**Text Color:** `#1570ef` (600 shade)  
**Primary Uses:** Info messages, neutral notifications, help text

---

## Success (Green Palette)

<ColorPalette palette="success" />

**Main Color:** `#17b26a` (500 shade)  
**Text Color:** `#079455` (600 shade)  
**Primary Uses:** Success messages, confirmation, completed states

---

## Color Usage Chart

### By Shade Number

| Shade | Typical Use Case |
|-------|------------------|
| **25** | Subtle tints, barely visible backgrounds |
| **50** | Light backgrounds, cards, panels ⭐ |
| **100** | Hover states on light backgrounds |
| **200** | Borders, dividers, alert backgrounds ⭐ |
| **300** | Strong dividers, disabled states |
| **400** | Placeholder text, decorative elements |
| **500** | **Primary/Default color** ⭐⭐⭐ |
| **600** | Hover states, emphasized text ⭐⭐ |
| **700** | Active states, strong emphasis ⭐⭐ |
| **800** | Text on light backgrounds ⭐ |
| **900** | Dark backgrounds, maximum emphasis |
| **950** | Maximum contrast, primary text |

---

## Semantic Color Mappings

### Primary Colors

| Semantic | Maps To | Hex | Use |
|----------|---------|-----|-----|
| `primary` | Saudi Green 500 | `#25935f` | Main brand color |
| `secondary` | Gold 500 | `#f5bd02` | Secondary brand |

### Status Colors

| Semantic | Maps To | Hex | Use |
|----------|---------|-----|-----|
| `success` | Success 500 | `#17b26a` | Success states |
| `info` | Info 500 | `#2e90fa` | Informational |
| `warning` | Warning 500 | `#f79009` | Warnings |
| `danger` | Error 500 | `#f04438` | Errors, delete |

### Neutral Colors

| Semantic | Maps To | Hex | Use |
|----------|---------|-----|-----|
| `light` | Gray 50 | `#f9fafb` | Light backgrounds |
| `dark` | Gray 900 | `#111927` | Dark backgrounds |

---

## Text Color Hierarchy

For optimal readability on **light backgrounds**:

```
Primary Text   → Gray 950   #0d121c  ⭐⭐⭐
Secondary Text → Gray 700   #384250  ⭐⭐
Muted Text     → Gray 600   #4d5761  ⭐
```

For **dark backgrounds**:

```
Primary Text   → White      #ffffff  ⭐⭐⭐
Muted Text     → White 70%  rgba(255,255,255,0.7)  ⭐
```

For **brand text**:

```
Brand Primary  → SA 800     #14573a  ⭐⭐
Brand Accent   → SA 600     #1b8354  ⭐
```

For **semantic text**:

```
Error Text     → Error 600    #d92d20  ⭐⭐
Warning Text   → Warning 600  #dc6803  ⭐⭐
Success Text   → Success 600  #079455  ⭐⭐
Info Text      → Info 600     #1570ef  ⭐⭐
```

---

## Most Commonly Used Colors

### Top 20 Colors by Usage

1. **Gray 50** (`#f9fafb`) - Background
2. **Primary 500** (`#25935f`) - Saudi Green (main)
3. **Gray 950** (`#0d121c`) - Primary text
4. **Gray 200** (`#e5e7eb`) - Borders
5. **Primary 600** (`#1b8354`) - Hover states
6. **Gray 700** (`#384250`) - Secondary text
7. **White** (`#ffffff`) - Backgrounds
8. **Error 50** (`#fef3f2`) - Error backgrounds
9. **Error 600** (`#d92d20`) - Error text
10. **Success 50** (`#ecfdf3`) - Success backgrounds
11. **Success 600** (`#079455`) - Success text
12. **Warning 50** (`#fffaeb`) - Warning backgrounds
13. **Warning 600** (`#dc6803`) - Warning text
14. **Info 50** (`#eff8ff`) - Info backgrounds
15. **Info 600** (`#1570ef`) - Info text
16. **Gold 500** (`#f5bd02`) - Secondary color
17. **Primary 800** (`#14573a`) - Brand text
18. **Gray 600** (`#4d5761`) - Muted text
19. **Primary 100** (`#dff6e7`) - Light green tint
20. **Gray 900** (`#111927`) - Dark backgrounds

---

## Color Combinations

### Best Pairs (High Contrast ✅)

```
Background          Text Color
━━━━━━━━━━━━━━━━━━  ━━━━━━━━━━━━━━━
White (#ffffff)  →  Gray 950 (#0d121c)
Gray 50          →  Gray 950
Primary 500      →  White
Dark (Gray 900)  →  White
Error 50         →  Error 700
Success 50       →  Success 700
Warning 50       →  Warning 700
```

### Alert Color Schemes

```
Type     Background    Border         Text
━━━━━━━  ━━━━━━━━━━━━  ━━━━━━━━━━━━━  ━━━━━━━━━━━━━
Error    error-50      error-200      error-700
Warning  warning-50    warning-200    warning-700
Success  success-50    success-200    success-700
Info     info-50       info-200       info-700
```

---

## Gradient Definitions

All gradients are based on Saudi Green:

```scss
Primary    → linear-gradient(90deg, #1b8354, #25935f)
Secondary  → linear-gradient(45deg, #166a45, #1b8354)
Dark       → linear-gradient(45deg, #092a1e, #1b8354)
Medium     → linear-gradient(90deg, #14573a, #1b8354)
Subtle     → linear-gradient(26.5deg, #14573a, #166a45)
Deep       → linear-gradient(45deg, #104631, #1b8354)
```

**Usage:** Hero sections, card headers, CTAs

---

## CSS Variable Reference

All colors available as CSS custom properties:

```css
/* Gray palette */
--dga-gray-25 through --dga-gray-950

/* Primary (Saudi Green) */
--dga-primary-25 through --dga-primary-950

/* Gold */
--dga-gold-25 through --dga-gold-950

/* Lavender */
--dga-lavender-25 through --dga-lavender-950

/* Semantic palettes */
--dga-error-25 through --dga-error-950
--dga-warning-25 through --dga-warning-950
--dga-info-25 through --dga-info-950
--dga-success-25 through --dga-success-950
```

---

## Color Psychology

### Saudi Green (Primary)
- **Represents:** Saudi Arabian identity, nature, growth, prosperity
- **Emotion:** Trust, stability, harmony
- **Use:** Primary actions, brand elements, success

### Gold (Secondary)
- **Represents:** Wealth, prestige, quality, Saudi heritage
- **Emotion:** Luxury, value, importance
- **Use:** Premium features, badges, secondary CTAs

### Red (Error)
- **Represents:** Danger, urgency, errors
- **Emotion:** Alert, stop, attention
- **Use:** Errors, delete actions, critical warnings

### Orange (Warning)
- **Represents:** Caution, warning, in-progress
- **Emotion:** Careful attention, pending
- **Use:** Warnings, pending states, moderate alerts

### Blue (Info)
- **Represents:** Information, calm, trust
- **Emotion:** Reliable, professional, neutral
- **Use:** Info messages, help text, neutral states

### Green (Success)
- **Represents:** Success, completion, positive
- **Emotion:** Accomplishment, safe, go
- **Use:** Success messages, confirmations, completed

---

## Print Reference

### Color Print Table

For printing this reference with color swatches:

| Color Name | Hex | RGB | HSL |
|------------|-----|-----|-----|
| Primary 500 | #25935f | rgb(37, 147, 95) | hsl(152, 60%, 36%) |
| Gray 950 | #0d121c | rgb(13, 18, 28) | hsl(220, 37%, 8%) |
| Gold 500 | #f5bd02 | rgb(245, 189, 2) | hsl(46, 98%, 48%) |
| Error 500 | #f04438 | rgb(240, 68, 56) | hsl(4, 86%, 58%) |
| Warning 500 | #f79009 | rgb(247, 144, 9) | hsl(34, 94%, 50%) |
| Info 500 | #2e90fa | rgb(46, 144, 250) | hsl(211, 95%, 58%) |
| Success 500 | #17b26a | rgb(23, 178, 106) | hsl(152, 77%, 39%) |

---

## Accessibility Notes

- ⭐ **Recommended combinations** meet WCAG AA standards
- Use **shade 600-800** for text on light backgrounds
- Use **shade 50-100** for backgrounds in alerts
- Use **white** for text on 500-950 backgrounds
- Always test with contrast checker tools

---

**Total Colors:** 96 (8 palettes × 12 shades)  
**Primary Brand:** Saudi Green #25935f  
**Secondary Brand:** Gold #f5bd02  

**Version:** 1.0.0  
**DGA Design System Color Palette**
