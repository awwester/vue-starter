import DashboardBase from '@/views/dashboard/Base.vue'
import Purchases from '@/views/dashboard/Purchases.vue'
import Items from '@/views/dashboard/Items.vue'

export default {
  path: '/dashboard',
  component: DashboardBase,
  children: [
    { path: 'purchases', component: Purchases },
    { path: 'items', component: Items }
  ]
}
