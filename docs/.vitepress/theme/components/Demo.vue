<script setup lang="ts">
import { onMounted, ref } from "vue";

const props = defineProps<{
  title?: string;
  /** Load on client only — use for web components / JS-driven demos */
  client?: boolean;
}>();

const ready = ref(!props.client);

onMounted(async () => {
  if (props.client) {
    await import("@ds/index.js");
  }
  ready.value = true;
});
</script>

<template>
  <div class="dga-demo">
    <p v-if="title" class="dga-demo-title">{{ title }}</p>
    <div v-if="ready" class="dga-demo-preview">
      <slot />
    </div>
  </div>
</template>
