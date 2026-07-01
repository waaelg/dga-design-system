# Typography

Font utilities for the DGA design system. Default font: **IBM Plex Sans Arabic**.

**Source:** `src/styles/utilities/typography.scss`

---

## Display sizes

For headings and hero text. Responsive sizes apply below 768px and 375px.

| Class | Desktop size | Line height |
|-------|--------------|-------------|
| `dga-display-2xl` | 72px | 90px |
| `dga-display-xl` | 60px | 72px |
| `dga-display-lg` | 48px | 60px |
| `dga-display-md` | 36px | 44px |
| `dga-display-sm` | 30px | 38px |
| `dga-display-xs` | 24px | 32px |

```html
<h1 class="dga-display-md dga-fw-bold">عنوان الصفحة</h1>
```

---

## Text sizes

| Class | Size | Line height |
|-------|------|-------------|
| `dga-text-xl` | 20px | 30px |
| `dga-text-lg` | 18px | 28px |
| `dga-text-md` | 16px | 24px |
| `dga-text-sm` | 14px | 20px |
| `dga-text-xs` | 12px | 18px |
| `dga-text-2xs` | 10px | 14px |

```html
<p class="dga-text-md">نص أساسي</p>
<p class="dga-text-sm dga-text-gray-600">نص ثانوي</p>
```

---

## Font weight

| Class | Weight |
|-------|--------|
| `dga-fw-regular` | 400 |
| `dga-fw-medium` | 500 |
| `dga-fw-semibold` | 600 |
| `dga-fw-bold` | 700 |

```html
<h2 class="dga-text-xl dga-fw-bold">عنوان فرعي</h2>
```

---

## Text alignment

| Class | Effect |
|-------|--------|
| `dga-text-start` | Logical start (right in RTL) |
| `dga-text-end` | Logical end (left in RTL) |
| `dga-text-center` | Center |
| `dga-text-left` | Physical left |
| `dga-text-right` | Physical right |

**Responsive:** `dga-text-md-center`, `dga-text-sm-start`, etc.

Prefer `start` / `end` for RTL. See [RTL & Arabic](../getting-started/rtl-arabic.md).

---

## Text colors

Combine with color utilities:

```html
<p class="dga-text-primary-500">نص بلون العلامة</p>
<p class="dga-text-gray-700">نص محايد</p>
```

See [Colors](./colors.md).

---

## Common patterns

```html
<!-- Page title -->
<h1 class="dga-display-md dga-fw-bold dga-text-gray-950">لوحة التحكم</h1>

<!-- Section heading -->
<h2 class="dga-text-xl dga-fw-semibold">الإعدادات</h2>

<!-- Body -->
<p class="dga-text-md dga-text-gray-700">وصف القسم هنا.</p>

<!-- Caption -->
<span class="dga-text-xs dga-text-gray-500">آخر تحديث: اليوم</span>
```

---

## Related

- [Colors](./colors.md)
- [RTL & Arabic](../getting-started/rtl-arabic.md)
