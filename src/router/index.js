import { createMemoryHistory, createRouter } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const routes = [
  { path: '/', component: HomeView },
  // Add more routes here if needed
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0 };
    }
  },
});

export default router;
