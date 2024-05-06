import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MhsForm from '../views/Mahasiswa/MhsEntryView.vue'
import DosenForm from '../views/Dosen/DosenEntryView.vue'
import RuanganForm from '../views/Ruangan/RuanganEntryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mahasiswa',
      name: 'mhsEntry',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Mahasiswa/MhsEntryView.vue')
    },
    {
      path: '/dosen',
      name: 'DosenForm',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Dosen/DosenEntryView.vue')
    },
    {
      path: '/ruangan',
      name: 'RuanganForm',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Ruangan/RuanganEntryView.vue')
    }
  ]
})

export default router
