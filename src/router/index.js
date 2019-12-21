import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import DashboardRoutes from './Dashboard.js'
import AuthRoutes from './Auth.js'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  AuthRoutes,
  DashboardRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
