import { createRouter, createWebHistory } from 'vue-router';
import Register from '../views/register.vue'; // Note the correct component name

const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register, // Use the imported component directly
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
