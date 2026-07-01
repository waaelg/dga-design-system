# Avatar

User profile images in circular or square shapes.

**Source:** `src/styles/components/avatar.scss`  
**Demo:** _not in index.html yet_  
**JavaScript required:** No

> **Note:** Avatar is included in the build as of the next release. Rebuild with `npm run build` after pulling latest source.

---

## HTML

```html
<div class="dga-avatar" data-size="md">
  <img src="user.jpg" alt="User name" />
</div>
```

---

## Sizes

| `data-size` | Dimensions |
|-------------|------------|
| `xs` | 24px |
| `sm` | 32px |
| `md` | 40px |
| `lg` | 48px |
| `xl` | 64px |
| `2xl` | 80px |
| `3xl` | 120px |

```html
<div class="dga-avatar" data-size="lg">
  <img src="avatar.png" alt="" />
</div>
```

---

## Shape

| Attribute | Shape |
|-----------|-------|
| (default) / `data-square="false"` | Circle |
| `data-square="true"` | Rounded square (4px radius) |

```html
<div class="dga-avatar" data-size="md" data-square="true">
  <img src="logo.png" alt="Organization" />
</div>
```

---

## Styling

- White 2px border
- `object-fit: cover` on images
- `overflow: hidden`

---

## Enable in build

Avatar is imported in `src/styles/main.scss`. Run `npm run build` to include styles in `dist/style.css`.

---

## Related

- [Card](./card.md)
