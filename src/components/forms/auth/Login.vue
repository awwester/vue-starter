<template>
  <div class="login-form-container">
    <b-form @submit="onSubmit" class="login-form">
      <b-form-group
        id="input-group-1"
        label="Username:"
        label-for="login-username"
      >
        <b-form-input
          id="login-username"
          v-model="form.username"
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
        username: '',
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
        username: this.form.username,
        password: this.form.password
      }
      try {
        await this.$store.dispatch('auth/login', payload)
      } catch {
        this.error = 'Could not login with these credentials'
      }

      try {
        await this.$store.dispatch('auth/fetchMe')
        this.$router.push('/dashboard')
      } catch {
        this.error = 'Could not fetch user data'
      }
    }
  }
}
</script>
