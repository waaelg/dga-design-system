# Link

Styled anchor links for inline navigation.

**Source:** `src/styles/components/link.scss`  
**Demo:** `index.html`  
**JavaScript required:** No

---

## Basic link

```html
<a href="#" class="dga-link">Link</a>
```

Saudi green color (`$dga-sa-600`), underline on hover.

---

## Variants

| Attribute | Effect |
|-----------|--------|
| (default) | No underline until hover |
| `data-variant="inline"` | Always underlined |

```html
<a href="#" class="dga-link" data-variant="inline">Inline link</a>
```

---

## States

- **Hover** — lighter green + underline
- **Active** — darker green + underline
- **Focus** — bottom border accent

---

## Accessibility

- Use descriptive link text (not "click here")
- External links: add `rel="noopener"` and indicate opens in new tab if needed

---

## Related

- [Breadcrumb](./breadcrumb.md)
- [Button](./button.md) — for actions use `<button>`, not links
