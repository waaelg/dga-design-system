<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "default" | "sizes";
  }>(),
  { variant: "default" },
);

const root = ref<HTMLElement | null>(null);
let instance: { destroy?: () => void } | null = null;

onMounted(async () => {
  const { DGAAccordion } = await import("@ds/index.js");
  if (!root.value) return;

  instance = new DGAAccordion(root.value);

  if (props.variant === "sizes") {
    const firstHeader = root.value.querySelector<HTMLElement>(".dga-acc-header");
    if (firstHeader) instance.toggle(firstHeader);
  }
});

onBeforeUnmount(() => {
  instance?.destroy?.();
});
</script>

<template>
  <div ref="root" class="dga-acc">
    <template v-if="variant === 'default'">
      <div class="dga-acc-item">
        <button type="button" class="dga-acc-header" aria-expanded="false">
          <span>What is an accordion?</span>
        </button>
        <div class="dga-acc-content">
          <div class="dga-acc-body">
            An accordion lets users expand and collapse sections of content.
          </div>
        </div>
      </div>
      <div class="dga-acc-item">
        <button type="button" class="dga-acc-header" aria-expanded="false">
          <span>How do I use it?</span>
        </button>
        <div class="dga-acc-content">
          <div class="dga-acc-body">
            Import the package once — no manual JS init required.
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="dga-acc-item">
        <button type="button" class="dga-acc-header" data-size="sm" aria-expanded="false">
          <span>Small (40px)</span>
        </button>
        <div class="dga-acc-content">
          <div class="dga-acc-body">Small header size.</div>
        </div>
      </div>
      <div class="dga-acc-item">
        <button type="button" class="dga-acc-header" data-size="md" aria-expanded="false">
          <span>Medium (48px)</span>
        </button>
        <div class="dga-acc-content">
          <div class="dga-acc-body">Default header size.</div>
        </div>
      </div>
      <div class="dga-acc-item">
        <button type="button" class="dga-acc-header" data-size="lg" aria-expanded="false">
          <span>Large (56px)</span>
        </button>
        <div class="dga-acc-content">
          <div class="dga-acc-body">Large header size.</div>
        </div>
      </div>
    </template>
  </div>
</template>
