import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/index.html',
      redirect: '/'
    },
    {
      path: '/popup.html',
      redirect: '/'
    },
    {
      path: '/metrics',
      name: 'Metrics',
      component: () => import('@/views/MetricsView.vue')
    },
    {
      path: '/linkedin',
      name: 'LinkedIn',
      component: () => import('@/views/LinkedinView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    // {
    //   path: '/login',
    //   name: 'Login',
    //   component: () => import('@/views/LoginView.vue')
    // },
  ]
});

export default router;
