import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import DashboardBase from '@/views/dashboard/Base.vue'
import Purchases from '@/views/dashboard/Purchases.vue'
import Items from '@/views/dashboard/Items.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  {
    path: '/dashboard',
    component: DashboardBase,
    children: [
      { path: 'purchases', component: Purchases },
      { path: 'items', component: Items }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
