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
    setAuthenticationError (state, message) {
      // Show an error for the login action.
      state.error = message
    },
    setUserToken (state, token) {
      // After the user authenticates, save the token.
      state.token = token
      state.error = ''
      axios.defaults.headers.common['Authorization'] = `Token ${token}`
    },
    logoutUser (state) {
      // Clear the user's token
      state.token = ''
      delete axios.defaults.headers.common['Authorization']
    }
  },
  actions: {
    async login ({ commit }, payload) {
      try {
        const response = await axios.post('http://localhost:8000/v1/auth/login/', payload)
        commit('setUserToken', response.data.key)
      } catch {
        commit('setAuthenticationError', 'Could not login with these credentials')
      }
    },
    register ({ commit }, payload) {
      return axios.post('http://localhost:8000/v1/auth/registration/', payload).then((response) => {
        commit('setUserToken', response.data.key)
      }, () => {
        commit('setAuthenticationError', 'Could not register with provided details')
      })
    },
    async fetchMe ({ commit }) {
      const response = await axios.get('http://localhost:8000/v1/users/me/')
      commit('setUserData', response.data)
    },
    logout ({ commit }) {
      commit('logoutUser')
    }
  },
  getters: { }
}
