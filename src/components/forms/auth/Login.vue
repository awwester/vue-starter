<template>
  <div class="login-form-container">
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="login-email"
      >
        <b-form-input
          id="login-email"
          v-model="form.email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Password:"
        label-for="login-password"
      >
        <b-form-input
          id="login-password"
          v-model="form.password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>
      <div class="text-center">
        <b-alert variant="danger" show v-if="error.length">{{ error }}</b-alert>
        <router-link class="btn-cancel mr-4" to="/">Cancel</router-link>
        <b-button type="submit" variant="primary">Submit</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    error () {
      return this.$store.state.auth.error
    }
  },
  methods: {
    async onSubmit (evt) {
      evt.preventDefault()
      const payload = {
        username: this.form.email,
        password: this.form.password
      }
      const response = await this.$store.dispatch('auth/login', payload)
      if (response === 'failure') {
        this.error = 'Could not login with these credentials'
      }
    }
  }
}
</script>
