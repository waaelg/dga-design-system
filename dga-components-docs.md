# DGA Design System - Components Documentation

Simple documentation for Button and Card components.

---

## Button Component

### Basic Usage

```html
<button class="dga-btn dga-btn-primary">زر</button>
```

### Variants

```html
<!-- Primary -->
<button class="dga-btn dga-btn-primary">أساسي</button>
<button class="dga-btn dga-btn-primary-outline">أساسي مفرغ</button>

<!-- Secondary -->
<button class="dga-btn dga-btn-secondary-solid">ثانوي مصمت</button>
<button class="dga-btn dga-btn-secondary-outline">ثانوي مفرغ</button>

<!-- Others -->
<button class="dga-btn dga-btn-neutral">محايد</button>
<button class="dga-btn dga-btn-subtle">دقيق</button>
<button class="dga-btn dga-btn-ghost">شبح</button>
<button class="dga-btn dga-btn-link">رابط</button>
<button class="dga-btn dga-btn-transparent">شفاف</button>

<!-- Semantic -->
<button class="dga-btn dga-btn-destructive">حذف</button>
<button class="dga-btn dga-btn-success">نجاح</button>
<button class="dga-btn dga-btn-warning">تحذير</button>
<button class="dga-btn dga-btn-info">معلومات</button>
```

### Sizes

```html
<button class="dga-btn dga-btn-primary dga-btn-2xs">2XS</button>
<button class="dga-btn dga-btn-primary dga-btn-xs">XS</button>
<button class="dga-btn dga-btn-primary dga-btn-small">صغير</button>
<button class="dga-btn dga-btn-primary dga-btn-medium">متوسط</button>
<button class="dga-btn dga-btn-primary dga-btn-large">كبير</button>
<button class="dga-btn dga-btn-primary dga-btn-xl">XL</button>
```

### With Icon

```html
<!-- Icon Left -->
<button class="dga-btn dga-btn-primary dga-btn-icon-left">
  <span class="dga-btn__icon">
    <svg width="16" height="16">...</svg>
  </span>
  <span class="dga-btn__text">نص</span>
</button>

<!-- Icon Right -->
<button class="dga-btn dga-btn-primary dga-btn-icon-right">
  <span class="dga-btn__text">نص</span>
  <span class="dga-btn__icon">
    <svg width="16" height="16">...</svg>
  </span>
</button>

<!-- Icon Only -->
<button class="dga-btn dga-btn-primary dga-btn-icon-only dga-btn-medium">
  <span class="dga-btn__icon">
    <svg width="16" height="16">...</svg>
  </span>
</button>
```

### Modifiers

```html
<!-- Full Width -->
<button class="dga-btn dga-btn-primary dga-btn-block">عرض كامل</button>

<!-- Pill (Rounded) -->
<button class="dga-btn dga-btn-primary dga-btn-pill">دائري</button>

<!-- Disabled -->
<button class="dga-btn dga-btn-primary" disabled>معطل</button>
```

### Button Group

```html
<div class="dga-btn-group">
  <button class="dga-btn dga-btn-secondary-outline">يسار</button>
  <button class="dga-btn dga-btn-secondary-outline">وسط</button>
  <button class="dga-btn dga-btn-secondary-outline">يمين</button>
</div>
```

---

## Card Component

### Basic Card

```html
<div class="dga-card">
  <div class="dga-card-content">
    <h5 class="dga-card-title">العنوان</h5>
    <div class="dga-card-body">
      <p>المحتوى هنا</p>
    </div>
  </div>
</div>
```

### Variants

```html
<!-- Default (with shadow) -->
<div class="dga-card" data-variant="default">...</div>

<!-- No Shadow -->
<div class="dga-card" data-variant="noshadow">...</div>

<!-- Bordered -->
<div class="dga-card" data-variant="stroke">...</div>
```

### Complete Card

```html
<div class="dga-card" data-variant="default">
  <!-- Icon (optional) -->
  <div class="dga-card-icon">
    <svg width="48" height="48">...</svg>
  </div>

  <!-- Content -->
  <div class="dga-card-content">
    <h5 class="dga-card-title">عنوان الكرت</h5>
    <div class="dga-card-body">
      <p>محتوى الكرت</p>
    </div>
  </div>

  <!-- Footer (optional) -->
  <div class="dga-card-footer">
    <p class="footer-text">نص إضافي</p>
    <div class="footer-actions">
      <button class="dga-btn dga-btn-primary dga-btn-small">حفظ</button>
      <button class="dga-btn dga-btn-secondary-outline dga-btn-small">
        إلغاء
      </button>
    </div>
  </div>
</div>
```

### Card Structure

```
.dga-card
├── .dga-card-icon (optional)
├── .dga-card-content
│   ├── .dga-card-title
│   └── .dga-card-body
└── .dga-card-footer (optional)
    ├── .footer-text
    └── .footer-actions
```

---

## RTL Support

Set `dir="rtl"` in your HTML:

```html
<html lang="ar" dir="rtl">
  <body>
    <!-- Components automatically adapt -->
    <button class="dga-btn dga-btn-primary">زر</button>
  </body>
</html>
```

---

## Quick Reference

### Button Classes

| Class                   | Description             |
| ----------------------- | ----------------------- |
| `.dga-btn`              | Base button class       |
| `.dga-btn-primary`      | Primary variant         |
| `.dga-btn-secondary-*`  | Secondary variants      |
| `.dga-btn-2xs` to `xl`  | Size modifiers          |
| `.dga-btn-icon-only`    | Icon only button        |
| `.dga-btn-block`        | Full width              |
| `.dga-btn-pill`         | Rounded corners         |
| `.dga-btn-group`        | Group buttons together  |
| `.dga-btn__icon`        | Icon wrapper            |
| `.dga-btn__text`        | Text wrapper            |

### Card Classes

| Class                | Description           |
| -------------------- | --------------------- |
| `.dga-card`          | Base card class       |
| `data-variant="*"`   | Card variant          |
| `.dga-card-icon`     | Icon section          |
| `.dga-card-content`  | Content section       |
| `.dga-card-title`    | Card title            |
| `.dga-card-body`     | Card body content     |
| `.dga-card-footer`   | Footer section        |
| `.footer-text`       | Footer text           |
| `.footer-actions`    