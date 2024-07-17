<script setup>
import TheNavbar from "@/components/TheNavbar.vue";
</script>

<template>
  <TheNavbar />

  <main class="container">
    <router-view />
  </main>
</template>

<style scoped>
.container {
  padding: 20px;
}
</style>
