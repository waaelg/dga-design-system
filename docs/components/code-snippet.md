# Code Snippet

Inline and multi-line code blocks with copy button.

**Source:** `src/styles/components/code-snippet.scss`, `src/scripts/codeSnippet.js`, `src/scripts/dga-code-snippet.js`  
**Demo:** `index.html`  
**JavaScript:** Optional — web component or `DGACodeSnippet` class

---

## Option 1: Web component (recommended)

### Inline

```html
<dga-code-snippet code="npm install @waaelg/dga-design-system"></dga-code-snippet>
```

<Demo title="Preview" client>

<dga-code-snippet code="npm install @waaelg/dga-design-system"></dga-code-snippet>

</Demo>

Or with text content:

```html
<dga-code-snippet>npm install @waaelg/dga-design-system</dga-code-snippet>
```

### Multiline

```html
<dga-code-snippet multiline code="const app = createApp(App)
app.mount('#app')"></dga-code-snippet>
```

<Demo title="Preview" client>

<dga-code-snippet multiline code="const app = createApp(App)
app.mount('#app')"></dga-code-snippet>

</Demo>

### Attributes

| Attribute | Description |
|-----------|-------------|
| `code` | Code text to display and copy |
| `multiline` | Present = multi-line block layout |

Copy fires `dga-code-copy` on success. No `new DGACodeSnippet()` required.

> Tabbed multi-line snippets (Java / Python tabs) are **legacy markup only** — implement tab switching in your app.

---

## Option 2: Legacy markup + DGACodeSnippet

### Inline snippet

```html
<div class="dga-code-snippet-inline">
  <div class="dga-code-snippet-inline__content">npm install @waaelg/dga-design-system</div>
  <button type="button" class="dga-code-snippet-inline__copy"
          aria-label="Copy code" data-copied="false">
    <!-- copy icon SVG -->
  </button>
</div>
```

<Demo title="Preview">

<div class="dga-code-snippet-inline">
  <div class="dga-code-snippet-inline__content">npm install @waaelg/dga-design-system</div>
  <button type="button" class="dga-code-snippet-inline__copy" aria-label="Copy code" data-copied="false">
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" stroke-width="1.75"></rect>
      <path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"></path>
    </svg>
  </button>
</div>

</Demo>

```js
import { DGACodeSnippet } from '@waaelg/dga-design-system'
new DGACodeSnippet()
```

### Multi-line snippet (with tabs)

```html
<div class="dga-code-snippet-multiline">
  <div class="dga-code-snippet-multiline__tabs" dir="ltr">
    <button type="button" class="dga-code-snippet-multiline__tab" data-active="true">Java</button>
    <button type="button" class="dga-code-snippet-multiline__tab">Python</button>
  </div>

  <div class="dga-code-snippet-multiline__body">
    <ol class="dga-code-snippet-multiline__lines">
      <li></li><li></li><li></li>
    </ol>
    <pre class="dga-code-snippet-multiline__code"><code>// Your code here</code></pre>
    <button type="button" class="dga-code-snippet-multiline__copy"
            aria-label="Copy code" data-copied="false"></button>
  </div>

  <div class="dga-code-snippet-multiline__footer" dir="ltr">Show More</div>
</div>
```

Tab switching is not wired in JS by default — implement in your app or extend `DGACodeSnippet`.

---

## Copy behavior

- Web component: built-in copy on button click
- Legacy: `DGACodeSnippet` listens for clicks on `.dga-code-snippet-inline__copy` and `.dga-code-snippet-multiline__copy`
- Sets `data-copied="true"` briefly after successful copy

---

## Styling notes

- Inline content uses `direction: ltr` for code
- Monospace font stack built in
- Copy button shows success state (green) when `data-copied="true"`

---

## Related

- [Web Components](../getting-started/web-components.md)
- [JavaScript API](../getting-started/javascript-api.md)
- [Installation](../getting-started/installation.md)
