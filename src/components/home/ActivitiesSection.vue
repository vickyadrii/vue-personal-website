<script setup>
import { ref } from "vue";

import TitleSection from "@/components/common/TitleSection.vue";
import IconBearmentor from "../icons/IconBearmentor.vue";
import IconHammercode from "../icons/IconHammercode.vue";
import IconProgrammingTadulako from "../icons/IconProgrammingTadulako.vue";
import IconBangkit from "../icons/IconBangkit.vue";

const workItems = ref([
  {
    id: 0,
    logo: IconBearmentor,
    companyName: "Bearmentor",
    title: "Frontend Mentor",
    period: "Jun 2024 - Present",
    techStacks: ["HTML5", "CSS3", "Git", "Figma", "Tailwind"],
  },
  {
    id: 1,
    logo: IconHammercode,
    companyName: "HammerCode",
    title: "Frontend Mentor",
    period: "May 2023 - Present",
    techStacks: ["JavaScript", "TypeScript", "React", "NextJS", "HTML5", "CSS3", "Tailwind", "Git"],
  },
  {
    id: 2,
    logo: IconBangkit,
    companyName: "Bangkit Academy",
    title: "Cloud Computing Path",
    period: "Feb 2022 - Jul 2022",
    techStacks: ["Google Cloud Platform", "Web Development", "Soft-skills", "English Class"],
  },
  {
    id: 3,
    logo: IconProgrammingTadulako,
    companyName: "Kodingna",
    title: "Web Basic Mentor",
    period: "Aug 2022 - Dec 2022",
    techStacks: ["JavaScript", "React", "HTML5", "CSS3", "Git"],
  },
]);
</script>

<template>
  <div id="activities" class="activities">
    <TitleSection
      title="Activities"
      description="Lorem ipsum dolor sit amet consectetur. Phasellus eros ante vitae et. Tortor in sed ut ipsum proin amet nisl dictum. Sit auctor sem eget lorem lectus amet nunc. Mauris aliquam amet enim "
    />

    <div class="activities__content">
      <div
        class="activities__lists"
        v-for="{ id, logo, companyName, title, period, techStacks } in workItems"
        :key="id"
      >
        <!-- Header -->
        <div class="header">
          <div class="header__left">
            <component :is="logo" />
            <div>
              <h3 class="header__company-name">{{ companyName }}</h3>
              <p class="header__title">{{ title }}</p>
            </div>
          </div>
          <p>{{ period }}</p>
        </div>
        <!-- List -->
        <ul class="techstack-lists">
          <li class="techstack-lists__item" v-for="(item, index) in techStacks" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.activities {
  padding: 16px 0;
}

.activities__lists {
  border-bottom: 1px solid #4d4d4d;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.header__company-name {
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
}

ul {
  padding: 0;
}

.techstack-lists {
  display: flex;
  gap: 8px;
}

.techstack-lists__item {
  font-size: 12px;
  color: #ffffff;
  padding: 4px 12px;
  background: #1e1e1f;
  border: 1px solid #4d4d4d;
  border-radius: 24px;
}
</style>
