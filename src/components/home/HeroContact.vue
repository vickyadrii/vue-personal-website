<script setup>
import { ref } from "vue";

import IconArrowDown from "@/components/icons/IconArrowDown.vue";
import IconGithub from "@/components/icons/IconGithub.vue";
import IconLinkedin from "@/components/icons/IconLinkedin.vue";
import IconMedium from "@/components/icons/IconMedium.vue";
import IconTelegram from "@/components/icons/IconTelegram.vue";

const socialMediaItems = ref([
  { id: 0, component: IconGithub, link: "https://github.com/vickyadrii" },
  { id: 1, component: IconLinkedin, link: "https://linkedin.com/in/vickyadrii" },
  { id: 2, component: IconMedium, link: "https://medium.com/@vickyadri29" },
  { id: 3, component: IconTelegram, link: "https://t.me/vickyadrii" },
]);
</script>

<template>
  <div class="hero__contacts">
    <button class="hero__btn-view-resume">
      View Resume
      <IconArrowDown />
    </button>
    <ul class="hero__social-media">
      <li v-for="{ id, component, link } in socialMediaItems" :key="id">
        <a :href="link"><component :is="component" /></a>
      </li>
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
  padding: 0;
}

.hero__social-media li {
  list-style: none;
}
</style>
