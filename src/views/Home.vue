<template>
  <div class="home text-center">
    <div class="link-container">
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/auth/login">Login</router-link>
    </div>
    <b-button @click="makeToast()">Show Toast</b-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    makeToast: function () {
      this.$bvToast.toast('hello', {
        title: 'Example toast'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.link-container {
  margin: 20px;
  > a { margin: 20px; }
}
</style>
