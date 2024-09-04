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
    name: 'tracker',
    component: () => import('@/views/TrackerView.vue')
  },
  {
    path: '/linkedin',
    name: 'linkedin',
    component: () => import('@/views/LinkedinView.vue')
  },
  {
    path: '/youtube',
    name: 'youtube',
    component: () => import('@/views/YoutubeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
