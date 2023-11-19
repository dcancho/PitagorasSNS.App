// router.js
import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from './components/MainLayout.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Post from './components/Post.vue';

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: Post },
    ],
    meta: { requiresAuth: true }
  },
  { path: '/register', component: Register, meta: { requiresGuest: true } },
  { path: '/login', component: Login, meta: { requiresGuest: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresGuest = to.matched.some(record => record.meta.requiresGuest);
  const userCode = localStorage.getItem('userCode');

  if (requiresAuth && !userCode) {
    next('/login');
  } else if (requiresGuest && userCode) {
    next('/');
  } else {
    next();
  }
});

export default router;