# Spacing

Padding, margin, and gap utilities. Base unit: **4px** (`1` = 4px).

**Source:**
- `src/styles/utilities/padding.scss`
- `src/styles/utilities/margin.scss`
- Grid gap utilities in `src/styles/utilities/grid.scss`

---

## Numeric scale

| Class key | Value |
|-----------|-------|
| `0` | 0 |
| `1` | 4px |
| `2` | 8px |
| `3` | 12px |
| `4` | 16px |
| `6` | 24px |
| `8` | 32px |
| `12` | 48px |
| `16` | 64px |
| `24` | 96px |

Full scale: `0`, `px`, `0_5`, `1` … `480` (see `src/styles/variables/spacing.scss`).

---

## Padding

| Pattern | Example | CSS |
|---------|---------|-----|
| All sides | `dga-p-4` | `padding: 16px` |
| Top | `dga-pt-4` | `padding-top` |
| Bottom | `dga-pb-4` | `padding-bottom` |
| Left | `dga-pl-4` | `padding-left` |
| Right | `dga-pr-4` | `padding-right` |
| Horizontal | `dga-px-4` | left + right |
| Vertical | `dga-py-4` | top + bottom |

```html
<div class="dga-p-4 dga-px-6">Padded box</div>
```

---

## Margin

Same pattern with `m` prefix:

| Pattern | Example |
|---------|---------|
| All sides | `dga-m-4` |
| Top | `dga-mt-4` |
| Bottom | `dga-mb-4` |
| Horizontal | `dga-mx-4` |
| Vertical | `dga-my-4` |
| Auto center | `dga-mx-auto` |

```html
<section class="dga-my-8 dga-mb-4">Section</section>
```

---

## Named spacing

Semantic names from the DGA scale:

| Name | Size |
|------|------|
| `xxs` | 2px |
| `xs` | 4px |
| `sm` | 6px |
| `md` | 8px |
| `lg` | 12px |
| `xl` | 16px |
| `2xl` | 20px |
| `3xl` | 24px |
| `4xl` | 32px |
| … | up to `11xl` (160px) |

```html
<div class="dga-p-lg dga-mb-xl">Named spacing</div>
```

---

## Gap (flex & grid)

Prefer gap over margin for spacing between flex children:

| Class | Description |
|-------|-------------|
| `dga-gap-4` | 16px all directions |
| `dga-gap-x-4` | Horizontal gap |
| `dga-gap-y-4` | Vertical gap |
| `dga-gap-md` | Named gap (8px) |
| `dga-gap-lg` | Named gap (12px) |

```html
<div class="dga-d-flex dga-flex-col dga-gap-3">
  <button class="dga-btn dga-btn-primary">زر 1</button>
  <button class="dga-btn dga-btn-neutral">زر 2</button>
</div>
```

See [Grid — Spacing & Gaps](./grid.md#spacing--gaps).

---

## Examples

```html
<!-- Card padding -->
<div class="dga-card dga-p-4">
  <h3 class="dga-mb-2">Title</h3>
  <p class="dga-mb-0">Content</p>
</div>

<!-- Section spacing -->
<div class="dga-container dga-py-8">
  <div class="dga-row dga-gap-4">...</div>
</div>
```

---

## Related

- [Grid](./grid.md)
- [Width & Height](./width-height.md)
