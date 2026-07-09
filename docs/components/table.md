# Table

Data tables with optional contained and striped styles.

**Source:** `src/styles/components/table.scss`  
**Demo:** VitePress live preview on this page  
**JavaScript required:** No

---

## Basic table

```html
<table class="dga-table" data-contained="true" data-striped="true">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ahmed</td>
      <td>30</td>
      <td>Riyadh</td>
    </tr>
    <tr>
      <td>Sara</td>
      <td>25</td>
      <td>Jeddah</td>
    </tr>
    <tr>
      <td>Mohammed</td>
      <td>28</td>
      <td>Dammam</td>
    </tr>
  </tbody>
</table>
```

<Demo title="Preview">

<table class="dga-table" data-contained="true" data-striped="true">
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ahmed</td>
      <td>30</td>
      <td>Riyadh</td>
    </tr>
    <tr>
      <td>Sara</td>
      <td>25</td>
      <td>Jeddah</td>
    </tr>
    <tr>
      <td>Mohammed</td>
      <td>28</td>
      <td>Dammam</td>
    </tr>
  </tbody>
</table>

</Demo>

---

## Data attributes

| Attribute | Effect |
|-----------|--------|
| `data-contained="true"` | Rounded border wrapper, internal dividers |
| `data-striped="true"` | Alternating row background |

Both can be combined.

---

## Styling details

- Header: gray background, 48px height, 12px font
- Body rows: 64px height, 14px font
- Row hover: light gray highlight
- Text alignment: `text-align: start` (RTL-aware)

---

## Accessibility

- Use `<thead>`, `<tbody>`, `<th>`, `<td>` semantically
- Add `<caption>` for table description when helpful
- For sortable tables, add ARIA sort attributes in your app logic

---

## Related

- [Grid](../foundations/grid.md)
