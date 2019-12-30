<template>
  <div class="home text-center">
    <h2 class="m-3">Welcome!</h2>
    <div class="link-container">
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/auth/login">Login</router-link>
    </div>
    <b-button @click="makeToast()" class="mr-2">Example Toast</b-button>
    <b-button v-b-modal.modal-1>Example modal</b-button>

    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>

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
