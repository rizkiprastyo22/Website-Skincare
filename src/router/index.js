import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Skincare from '../views/Skincare.vue'
import SkincareDetail from '../views/SkincareDetail.vue'
import Kandungan from '../views/Kandungan.vue'
import KandunganDetail from '../views/KandunganDetail.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/skincare',
    name: 'skincare',
    component: Skincare
  },
  {
    path: '/skincare/:id',
    name: 'SkincareDetail',
    component: SkincareDetail
  },
  {
    path: '/kandungan',
    name: 'Kandungan',
    component: Kandungan
  },
  {
    path: '/kandungan/:id',
    name: 'KandunganDetail',
    component: KandunganDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
