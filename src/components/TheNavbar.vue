<template>
  <header>
    <nav>
      <ul>
        <li v-for="{ id, link, name } in navItems" :key="id">
          <router-link :to="link">{{ name }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
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
};
</script>
<style scoped>
header {
  display: flex;
  justify-content: center;
  padding: 20px;
}

nav ul {
  padding: 12px 32px;
  display: flex;
  align-items: center;
  gap: 32px;
  background: #202020;
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
}
</style>
