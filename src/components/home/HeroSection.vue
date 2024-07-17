<script setup>
import HeroContacts from "./HeroContacts.vue";
</script>

<template>
  <div class="hero">
    <div class="hero__content">
      <h3 class="hero__name">Hi, I'm Vicky!</h3>
      <h1 class="hero__title">Lorem Ipsum Amet</h1>
      <p class="hero__description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem quam pariatur sint nihil hic velit voluptatem
        temporibus laborum animi dolorum iusto placeat deserunt nisi deleniti molestiae cumque, accusamus ullam
        quisquam.
      </p>
      <HeroContacts />
    </div>
  </div>
</template>

<style scoped>
.hero {
  margin: 112px 0;
}

.hero__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.hero__name {
  font-size: 32px;
  font-family: "Caveat", cursive;
  color: #8ddbe0;
}

.hero__title {
  font-size: 48px;
  font-weight: bold;
  background: linear-gradient(to right, #9c9595, #fff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero__description {
  color: #a1a1aa;
  line-height: 32px;
}
</style>
