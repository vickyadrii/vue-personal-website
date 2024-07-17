<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="title-section">
    <h2 class="title-section__title">{{ title }}</h2>
    <p class="title-section__description">{{ description }}</p>
  </div>
</template>

<style scoped>
.title-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.title-section__title {
    color: #ffffff;
    font-size: 20px;
    font-weight: 800;
}
.title-section__description {
    color: #A1A1AA;
    line-height: 25px;
}
</style>
