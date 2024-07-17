<script setup>
import IconArrowDown from "@/components/icons/IconArrowDown.vue";
</script>

<template>
  <div class="hero__contacts">
    <button class="hero__btn-view-resume">
      View Resume
      <IconArrowDown />
    </button>
    <ul class="hero__social-media">
      <li>Github</li>
      <li>Linkedin</li>
      <li>Medium</li>
      <li>Telegram</li>
    </ul>
  </div>
</template>

<style scoped>
.hero__contacts {
  display: flex;
  align-items: center;
  gap: 24px;
}

.hero__btn-view-resume {
  padding: 8px 16px;
  color: #ffffff;
  background: #1e1e1f;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 200ms ease-in;
  display: flex;
  align-items: center;
  gap: 8px;
}

.hero__btn-view-resume:hover {
  background: #262627;
}

.hero__social-media {
  display: flex;
  gap: 16px;
  font-size: 14px;
}

.hero__social-media li {
  list-style: none;
}
</style>
