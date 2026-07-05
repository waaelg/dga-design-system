<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const props = withDefaults(
  defineProps<{
    variant?: "pie" | "donut";
  }>(),
  { variant: "pie" },
);

const PIE_DATA = [
  { label: "Item 1", from: "0%", to: "40%", color: "var(--dga-primary-100)" },
  { label: "Item 2", from: "40%", to: "70%", color: "var(--dga-gray-200)" },
  { label: "Item 3", from: "70%", to: "100%", color: "var(--dga-primary-700)" },
];

const DONUT_DATA = [
  { label: "A", from: "0%", to: "35%", color: "var(--dga-primary-100)" },
  { label: "B", from: "35%", to: "65%", color: "var(--dga-gray-200)" },
  { label: "C", from: "65%", to: "100%", color: "var(--dga-primary-700)" },
];

const host = ref<HTMLElement | null>(null);
let chartEl: HTMLDivElement | null = null;

onMounted(async () => {
  const { DGAChart } = await import("@ds/index.js");
  if (!host.value) return;

  const data = props.variant === "donut" ? DONUT_DATA : PIE_DATA;
  const hole = props.variant === "donut";

  chartEl = document.createElement("div");
  chartEl.className = "dga-pie-chart";
  chartEl.setAttribute("data-hole", hole ? "true" : "false");
  host.value.appendChild(chartEl);

  new DGAChart(chartEl, data);
});

onBeforeUnmount(() => {
  chartEl?.remove();
});
</script>

<template>
  <div ref="host" class="dga-pie-chart-demo" />
</template>
