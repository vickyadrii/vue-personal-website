<template>
  <header>
    <nav>
      <ul>
        <li v-for="{ id, link, name } in navItems" :key="id" :class="{ active: isActive(link) }">
          <router-link :to="link">{{ name }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  data() {
    return {
      navItems: [
        { id: 0, link: '#experiences', name: 'Experiences' },
        { id: 1, link: '#activities', name: 'Activities' },
        { id: 2, link: '#projects', name: 'Projects' },
        { id: 3, link: '#contact', name: 'Contact' },
        { id: 4, link: '#blog', name: 'Blog' },
      ],
    };
  },
  setup() {
    const route = useRoute();
    const isActive = (link) => {
      return route.hash === link;
    };
    return { isActive };
  },
};
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
}

nav {
  display: flex;
  justify-content: center;
  padding: 20px;
}

nav ul {
  padding: 12px 32px;
  display: flex;
  align-items: center;
  gap: 32px;
  background: #202020CC;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border: 1px solid #4d4d4d;
  border-radius: 24px;
}

ul li {
  font-size: 14px;
  font-weight: 600;
  list-style: none;
}

a {
  color: #ffffff;
  text-decoration: none;
  position: relative;
}

a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  display: block;
  margin: auto;
  left: 0;
  right: 0;
  background: #ffffff;
  transition: width 0.3s;
}

a:hover::after {
  width: 100%;
}

.active a::after {
  width: 100%;
}
</style>
