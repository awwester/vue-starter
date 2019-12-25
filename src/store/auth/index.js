import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    user: {},
    error: '',
    token: ''
  },
  mutations: {
    setUserData (state, data) {
      // Store the data about the user.
      state.user = data
    },
    setLoginError (state) {
      // Show an error for the login action.
      state.error = 'Could not login with these credentials'
    },
    setUserToken (state, data) {
      // After the user authenticates, save the token.
      state.token = data.key
      state.error = ''
    }
  },
  actions: {
    async login ({ commit }, payload) {
      try {
        const response = await axios.post('http://localhost:8000/v1/auth/login/', payload)
        commit('setUserToken', response.data)
      } catch {
        commit('setLoginError')
      }
    }
  },
  getters: { }
}
