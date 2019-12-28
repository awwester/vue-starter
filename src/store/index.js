import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import authModule from './auth'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersistence({
  storage: window.localStorage,
  reducer: (state) => ({ auth: { token: state.auth.token } })
})

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    auth: authModule
  },
  plugins: [vuexLocalStorage.plugin]
})
