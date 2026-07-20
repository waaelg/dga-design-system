---
name: dga-vue-component
description: Generate Vue 3 components styled with the DGA (Saudi Digital Government Authority) design system package (@waaelg/dga-design-system). This skill is OPT-IN ONLY — only use it when the user explicitly mentions "DGA", the design system package, or explicitly asks to use this skill/generator for the component. Do NOT use it for generic Vue component requests that don't reference DGA styling.
---

# DGA Vue Component Generator

Generates Vue 3 Single File Components (SFCs) styled with the `@waaelg/dga-design-system` npm package. Only trigger this skill when the request explicitly references DGA, the design system, or this skill by name.

This skill's class/variant lists are verified against this repo's `docs/` (the source of truth). If a class isn't listed here, check the matching file in `docs/components/` or `docs/foundations/` before inventing one — don't guess at variant names.

## Conventions

**File naming**
- PascalCase filenames matching the component name: `UserCard.vue`, `InnovationStatusBadge.vue`

**Language**
- Plain JavaScript. Do NOT add `lang="ts"` or TypeScript syntax unless explicitly requested for that specific component.

**Block order** (always in this order)
1. `<template>`
2. `<script setup>`
3. `<style scoped>` — only if needed (see Styling below; many DGA components need no custom style block at all)

**Script setup conventions**
- Use `<script setup>` (Composition API), never Options API and never the plain `setup()` function form.
- Order of statements inside `<script setup>`:
  1. imports (Vue core first, then external libs, then local composables/components)
  2. `defineProps` (with `withDefaults` if any prop needs a default)
  3. `defineEmits`
  4. reactive state (`ref` / `reactive`)
  5. `computed`
  6. functions/handlers
  7. lifecycle hooks (`onMounted`, etc.)
  8. `watch`/`watchEffect` last
- Props: define with the object syntax so each prop has an explicit `type`.
- Emits: declare explicitly, e.g. `defineEmits(['update:modelValue', 'close'])`.
- Event handler functions are named `handleX` (e.g. `handleSubmit`, `handleClose`).
- Composable logic (anything reusable or stateful beyond simple local UI state) goes in a `composables/useXxx.js` file, not inline in the component.

## Styling — DGA Design System First

The package is a utility-class system (similar in spirit to Tailwind), not a component-scoped SCSS system. **Prefer DGA utility classes directly in the template** over writing custom CSS/SCSS. Only fall back to a `<style scoped>` block for layout/behavior the utility classes genuinely don't cover — and even then, pull values from DGA's SCSS variables or CSS custom properties instead of hardcoding colors, spacing, or radii.

### Reference: class patterns

**Colors** — pattern `.dga-{property}-{palette}-{shade}`
```
dga-bg-primary-500       dga-text-gray-700       dga-border-error-200
```
Prefer semantic classes over raw shades when a semantic one exists:
```
dga-bg-primary   dga-bg-danger   dga-text-success   dga-border-primary
```
Palettes: `gray`, `primary` (Saudi Green), `gold`, `lavender`, `error`, `warning`, `info`, `success`. Shades: 25→950, with 500 as the main/default shade. Full reference: `docs/foundations/colors.md`, `docs/foundations/colors-cheatsheet.md`.

**Typography**
```
dga-display-{2xl|xl|lg|md|sm|xs}   /* headings/hero */
dga-text-{xl|lg|md|sm|xs|2xs}      /* body text sizes */
dga-fw-{regular|medium|semibold|bold}
dga-text-{start|end|center}        /* prefer over left/right for RTL */
```

**Buttons**
```
dga-btn dga-btn-{variant} dga-btn-{size}
```
Variants (verified against `docs/components/button.md` — this is the full list, do not add others): `primary`, `primary-outline`, `neutral`, `secondary-solid`, `secondary-outline`, `subtle`, `ghost`, `link`, `transparent`, `destructive`, `destructive-outline`.

**There are no `success`, `warning`, or `info` button variants.** For that kind of feedback use [Alert](#interactive-components-dga--web-components) or the semantic text/background color utilities (`dga-text-success`, `dga-bg-warning-50`, etc.) directly — never invent a `dga-btn-success`-style class.

Sizes: `sm` (24px), `md` (32px, default), `lg` (40px).
Icons: `dga-btn__icon` on the `<img>`, plus `dga-btn-icon-left` / `dga-btn-icon-right` for placement, `dga-btn-icon-only` for icon-only buttons (always pair with `aria-label`).
Modifiers: `dga-btn-block` (full width), `dga-btn-pill`, `dga-btn-disabled` (or the native `disabled` attribute).

**Focus states** (always add to interactive elements)
```
dga-focus-ring-{primary|error|warning|success|info}
```

**When a custom `<style scoped lang="scss">` block is genuinely needed** (layout not covered by utilities), use DGA's SCSS variables instead of hardcoded values:
```scss
.my-component {
  background-color: $dga-primary-500;
  color: $dga-text-white;
  border: 1px solid $dga-border-color;
}
```
Or CSS custom properties if SCSS isn't compiled into that context:
```css
.my-component {
  background-color: var(--dga-primary-500);
}
```
Never hardcode a hex color, font size, or spacing value that has a DGA equivalent.

**Font**: default is IBM Plex Sans Arabic (comes with the package import) — don't override `font-family` unless asked.

**RTL**: prefer logical classes (`dga-text-start`/`dga-text-end`) over physical `left`/`right` ones — DGA targets Saudi government sites, which are Arabic-first. See `docs/getting-started/rtl-arabic.md`.

## DGA's Built-In Components

The package already ships these as documented patterns. Check this list before building something from scratch — if the request matches one of these, use DGA's existing pattern instead of reinventing it. Verified against `docs/components/*.md` and `docs/getting-started/javascript-api.md`.

| Component | Needs JavaScript? |
|---|---|
| Button | No — CSS only |
| Card | No — CSS only |
| Forms (input/select/textarea/label) | No — CSS only |
| Table | No — CSS only |
| Breadcrumb | No — CSS only |
| Link | No — CSS only |
| Tag | No — CSS only |
| Divider | No — CSS only |
| Avatar | No — CSS only, but **not in every published build**: `docs/components/avatar.md` notes it ships "as of the next release." If `dga-avatar` styles don't render, the installed package predates it — fall back to a plain rounded `<img>` with utility classes and mention this to the user. |
| Alert | Optional — `<dga-alert>` web component (recommended) or `DGAAlert` class on legacy markup |
| Accordion | Optional — `<dga-accordion>` + `<dga-accordion-item>` web components (recommended) or `DGAAccordion` class |
| Pie chart | Optional — `<dga-pie-chart>` web component (recommended) or `DGAChart` class |
| Code snippet | Optional — `<dga-code-snippet>` web component (recommended) or `DGACodeSnippet` class |
| Verify bar | Optional — `<dga-verify-bar>` web component (recommended) or `DGAVerifyBar` class + specific markup |
| Navbar | **Yes, always** — plain `.dga-navbar` markup + the `DGAMenuDropDown` JS class. There is **no** `<dga-navbar>` custom element. |

### Interactive components (`<dga-*>` web components)

The **only** custom elements the package registers are `<dga-alert>`, `<dga-accordion>` (+ `<dga-accordion-item>`), `<dga-code-snippet>`, `<dga-pie-chart>`, and `<dga-verify-bar>`. Prefer using these directly in the Vue template — they need no `new DGAX()` call, no `onMounted`/`onUnmounted` wiring, and no legacy markup structure.

```vue
<template>
  <dga-alert variant="success-color" title="نجاح" dismissible>
    تمت العملية بنجاح
  </dga-alert>
</template>
```

Since these aren't real Vue components, the compiler needs to know to treat `dga-*` tags as custom elements (usually already configured at the project level — mention it if it isn't):

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

**Navbar is the exception.** It is not a custom element — build it from the `.dga-navbar` / `.dga-menu` / `.dga-menu-item` markup in `docs/components/navbar.md` and instantiate `DGAMenuDropDown` in `onMounted`:

```vue
<script setup>
import { onMounted } from 'vue'
import { DGAMenuDropDown } from '@waaelg/dga-design-system'

onMounted(() => {
  new DGAMenuDropDown({ navbar: document.querySelector('.dga-navbar') })
})
</script>
```

For exact attributes/events per web component, check the matching file under `docs/components/` (each documents its "Option 1: Web component" attributes table) rather than guessing.

## Workflow

1. Confirm the component name and purpose if not given (ask only if genuinely ambiguous).
2. Identify what props/emits/state the component plausibly needs.
3. Build the `<template>` using DGA utility classes first — reach for `dga-btn`, `dga-bg-*`, `dga-text-*`, spacing/grid utilities, etc. Only add a `<style scoped>` block if something isn't covered by utilities.
4. If the component wraps one of DGA's built-in patterns (see table above), use the actual documented markup/attributes from `docs/components/` — don't approximate class names from memory.
5. Write the `<script setup>` block following the conventions above.
6. If the component needs shared logic (API calls, complex state), scaffold a matching `composables/useXxx.js` alongside it.
7. Briefly note any assumptions made and confirm `@waaelg/dga-design-system` is imported once globally in the project (`import '@waaelg/dga-design-system/style.css'` and `import '@waaelg/dga-design-system'`) — don't re-import it per component.

## Example

Request: "Create a DGA-styled ConfirmDialog component with a title, message, and confirm/cancel buttons."

```vue
<template>
  <div class="dga-bg-white dga-border dga-border-gray-200" style="border-radius: 12px; padding: 24px; max-width: 400px;">
    <h3 class="dga-text-lg dga-fw-semibold dga-text-gray-950">{{ title }}</h3>
    <p class="dga-text-sm dga-text-gray-700" style="margin: 8px 0 20px;">{{ message }}</p>
    <div class="dga-d-flex dga-gap-3 dga-align-items-center">
      <button class="dga-btn dga-btn-secondary-outline dga-btn-md" @click="handleCancel">
        {{ cancelLabel }}
      </button>
      <button class="dga-btn dga-btn-primary dga-btn-md dga-focus-ring-primary" @click="handleConfirm">
        {{ confirmLabel }}
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, required: true },
  message: { type: String, required: true },
  confirmLabel: { type: String, default: 'تأكيد' },
  cancelLabel: { type: String, default: 'إلغاء' }
})

const emit = defineEmits(['confirm', 'cancel'])

function handleConfirm() {
  emit('confirm')
}

function handleCancel() {
  emit('cancel')
}
</script>
```

No `<style scoped>` block needed — everything is covered by DGA utility classes.

## Related skills

- [`dga-web-components`](../dga-web-components/SKILL.md) — using `<dga-*>` elements outside Vue (plain HTML, Razor, PHP), and the full JS class API.
- [`dga-foundations`](../dga-foundations/SKILL.md) — the full color/spacing/typography/radius reference this skill's class patterns are drawn from.
