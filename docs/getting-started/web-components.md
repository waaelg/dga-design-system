# Web Components

Web components are **standard HTML** — they work anywhere you can write markup and load a script: static HTML, **ASP.NET Core (`.cshtml`)**, PHP, Blazor (with script import), Vue, React, etc.

Importing `@waaelg/dga-design-system` registers these custom elements:

| Element | Legacy alternative |
|---------|-------------------|
| `<dga-alert>` | `DGAAlert` + HTML markup |
| `<dga-accordion>` + `<dga-accordion-item>` | `DGAAccordion` + HTML markup |
| `<dga-code-snippet>` | `DGACodeSnippet` + HTML markup |
| `<dga-pie-chart>` | `DGAChart` + HTML markup |
| `<dga-verify-bar>` | `DGAVerifyBar` + fixed IDs |

No manual `customElements.define` or `new ClassName()` is required.

---

## Plain HTML

```html
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <link rel="stylesheet" href="./node_modules/@waaelg/dga-design-system/dist/style.css" />
</head>
<body>
  <dga-alert variant="success-color" title="نجاح" dismissible>
    تمت العملية بنجاح
  </dga-alert>

  <script type="module">
    import './node_modules/@waaelg/dga-design-system/dist/index.js'
  </script>
</body>
</html>
```

---

## ASP.NET Core (Razor / `.cshtml`)

Copy `dist/style.css` and `dist/index.js` into `wwwroot/lib/dga/` (or reference them from `node_modules` via LibMan / build step).

**`_Layout.cshtml`**

```html
<link rel="stylesheet" href="~/lib/dga/style.css" asp-append-version="true" />
<script type="module" src="~/lib/dga/index.js" asp-append-version="true"></script>
```

**View (e.g. `Index.cshtml`)**

```html
<dga-alert variant="success-color" title="@Model.Title" dismissible>
  @Model.Message
</dga-alert>

<dga-accordion>
  <dga-accordion-item title="السؤال الأول">
  @Html.Raw(Model.FaqAnswer)
  </dga-accordion-item>
</dga-accordion>
```

Custom element tag names are lowercase in HTML — Razor outputs them like any other markup. No Vue/React setup needed.

For `dga-pie-chart`, pass JSON in the `data` attribute (escape quotes in Razor or build the attribute server-side).

---

## Bundlers (Vite, webpack, etc.)

```js
import '@waaelg/dga-design-system/style.css'
import '@waaelg/dga-design-system'
```

Then use `<dga-alert>`, `<dga-accordion>`, etc. in your templates.

---

## Framework notes (Vue / React)

These are **not** Vue or React components — do not import them as `<DGAAlert />`. Use the HTML tags directly after importing the package.

**Vue 3** — if the compiler warns about unknown tags:

```js
// vite.config.js
export default defineConfig({
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('dga-'),
    },
  },
})
```

**React** — use lowercase tag names in JSX. TypeScript may need `declare global` for `dga-*` intrinsic elements.

Framework-specific examples: [Installation](./installation.md).

---

## Events

| Element | Event | When |
|---------|-------|------|
| `<dga-alert>` | `dga-alert-dismiss` | User clicks dismiss |
| `<dga-code-snippet>` | `dga-code-copy` | Copy succeeds |

```js
document.querySelector('dga-alert')?.addEventListener('dga-alert-dismiss', () => {
  console.log('Alert dismissed')
})
```

---

## When to use legacy classes

- Existing HTML with `dga-*` classes already in place
- Multi-tab code snippets with custom tab logic
- Verify bar integrated with legacy navbar IDs

Component docs describe both options: [Alert](../components/alert.md), [Accordion](../components/accordion.md), [Code snippet](../components/code-snippet.md), [Pie chart](../components/chart.md), [Verify bar](../components/verify-bar.md).

---

## Related

- [Installation](./installation.md)
- [JavaScript API](./javascript-api.md)
