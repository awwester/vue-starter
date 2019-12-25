import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/styles/custom.scss'

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
