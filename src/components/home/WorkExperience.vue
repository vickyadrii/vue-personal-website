<script setup>
import { ref } from "vue";

import TitleSection from "@/components/common/TitleSection.vue";

import IconEduqat from "../icons/IconEduqat.vue";
import IconKalla from "../icons/IconKalla.vue";
import IconKodingna from "../icons/IconKodingna.vue";

const workItems = ref([
  {
    id: 0,
    logo: IconEduqat,
    companyName: "Eduqat",
    title: "Frontend Engineer",
    period: "Jan 2023 - Present",
    techStacks: ["JavaScript", "React", "NextJS", "Redux", "GraphQL", "Styled-Components", "Tailwind"],
    responsibilities: [
      "Migrated the platform's styling from the usage of Styled-components and Ant Design to Tailwind.",
      "Built, maintained, and improved Eduqat’s platform, while implementing clean code practices, and agile methodologies.",
      "Developed an assignment feature for educators and students that allowed educators to create assignment materials, publish scores, view attachments from students, and provide feedback to their students.",
      "Developed a drip course feature that enabled educators to manage access to materials for their students. When the drip course was enabled, students could access materials after enrolling in the previous material.",
    ],
  },
  {
    id: 1,
    logo: IconKalla,
    companyName: "Kalla Group",
    title: "Web Developer Intern",
    period: "Aug 2022 - Dec 2022",
    techStacks: ["JavaScript", "React", "NextJS", "NodeJS", "ExpressJS", "MySQL", "Tailwind"],
    responsibilities: [
      "Developed a chatbot feature that allowed automated interaction with customers.",
      "Developed a project that enabled the company to broadcast messages to customers.",
      "Developed reusable components within projects, reduced redundancy, and enhanced feature consistency.",
    ],
  },
  {
    id: 2,
    logo: IconKodingna,
    companyName: "Kodingna",
    title: "Frontend Web Developer Intern",
    period: "Aug 2022 - Dec 2022",
    techStacks: ["JavaScript", "React", "Tailwind", "Figma", "Agile Methodology"],
    responsibilities: [
      "Designed and Developed a company profile website.",
      "Wrote clean and maintainable code following best practices and coding standards.",
    ],
  },
]);
</script>

<template>
  <div class="work-experience">
    <TitleSection
      title="Work Experience"
      description="Lorem ipsum dolor sit amet consectetur. Phasellus eros ante vitae et. Tortor in sed ut ipsum proin amet nisl dictum. Sit auctor sem eget lorem lectus amet nunc. Mauris aliquam amet enim "
    />

    <div class="work-experience__content">
      <div
        class="work-experience__lists"
        v-for="{ id, logo, companyName, title, period, techStacks, responsibilities } in workItems"
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
        <!-- responsibilites -->
        <div class="responsibility-lists">
          <h3>The responsibilites include:</h3>
          <ul>
            <li class="responsibility-lists__item" v-for="(item, index) in responsibilities" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.work-experience {
  padding: 32px 0;
  border-top: 1px solid #4d4d4d;
}

.work-experience__lists {
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

.responsibility-lists {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  color: #a1a1aa;
}

.responsibility-lists ul {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.responsibility-lists .responsibility-lists__item {
  list-style: disc;
  margin-left: 20px;
}
</style>
