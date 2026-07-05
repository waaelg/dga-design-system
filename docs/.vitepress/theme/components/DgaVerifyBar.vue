<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const host = ref<HTMLElement | null>(null);
let bar: HTMLElement | null = null;

onMounted(async () => {
  await import("@ds/index.js");
  if (!host.value) return;

  bar = document.createElement("dga-verify-bar");
  host.value.appendChild(bar);
});

onBeforeUnmount(() => {
  bar?.remove();
});
</script>

<template>
  <div ref="host" class="dga-verify-bar-demo" />
</template>
