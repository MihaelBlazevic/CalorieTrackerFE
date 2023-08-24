import { createRouter, createWebHistory } from 'vue-router';
import Register from '../views/register.vue'; // Note the correct component name
import Login from '../views/login.vue'; // Note the correct component name
import Home from '../views/home.vue'; // Note the correct component name
import CalorieList from '../views/CalorieList.vue'; // Note the correct component name
import CreateMeal from '../views/CreateMeal.vue'; // Note the correct component name


const routes = [
  {
    path: '/register',
    name: 'register',
    component: Register, // Use the imported component directly
  },
  {
    path: '/login',
    name: 'login',
    component: Login, // Use the imported component directly
  },
  {
    path: '/home',
    name: 'home',
    component: Home, // Use the imported component directly
  },
  {
    path: '/calorielist',
    name: 'calorielist',
    component: CalorieList, // Use the imported component directly
  },
  {
    path: '/createmeal',
    name: 'createmeal',
    component: CreateMeal, // Use the imported component directly
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
