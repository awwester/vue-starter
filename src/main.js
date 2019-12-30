import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDollarSign, faBurn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/styles/custom.scss'

library.add(faDollarSign, faBurn)

Vue.component('FontAwesomeIcon', FontAwesomeIcon)
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue, {
  'BToast': {
    'toaster': 'b-toaster-bottom-right',
    'autoHideDelay': 3000,
    'variant': 'primary'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
