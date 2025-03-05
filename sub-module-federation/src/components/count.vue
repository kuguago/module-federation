<template>
  <div>
    {{ count + computedCount }}
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const count = ref(1);
const computedCount = computed(() => count.value + 1);
</script>

<style scoped></style>
