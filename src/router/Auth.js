import AuthenticationBase from '@/views/auth/Base.vue'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'

export default {
  path: '/auth',
  component: AuthenticationBase,
  children: [
    { path: 'login', component: Login },
    { path: 'register', component: Register }
  ]
}
