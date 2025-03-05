<template>
  <div>
    <h1>子应用</h1>
    <div>
      <count />
    </div>
    <div>
      <h1>Hello App!</h1>
      <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
      <nav>
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/about">Go to About</RouterLink>
      </nav>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>
<script setup lang="ts">
import count from "./components/count.vue";
</script>
<style scoped></style>
