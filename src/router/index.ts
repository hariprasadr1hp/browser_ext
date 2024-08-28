import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
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
    path: '/tracker',
    name: 'Tracker',
    component: () => import('@/views/TrackerView.vue')
  },
  {
    path: '/linkedin',
    name: 'LinkedIn',
    component: () => import('@/views/LinkedinView.vue')
  },
  {
    path: '/youtube',
    name: 'YouTube',
    component: () => import('@/views/YoutubeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
