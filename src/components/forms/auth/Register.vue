<template>
  <div class="register-form-container">
    <b-form @submit="onSubmit" class="register-form" >
      <b-form-group
        label="Username:"
        label-for="register-username"
      >
        <b-form-input
          id="register-username"
          v-model="form.username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Email address:"
        label-for="register-email"
      >
        <b-form-input
          id="register-email"
          type="email"
          v-model="form.email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Password:"
        label-for="register-password-1"
      >
        <b-form-input
          id="register-password-1"
          v-model="form.password"
          type="password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="Password (Repeat):"
        label-for="register-password-2"
      >
        <b-form-input
          id="register-password-2"
          v-model="form.passwordRepeat"
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
  name: 'RegisterForm',
  data () {
    return {
      form: {
        username: '',
        password: '',
        passwordRepeat: '',
        email: ''
      },
      show: true
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
        password1: this.form.password,
        password2: this.form.passwordRepeat
      }

      await this.$store.dispatch('auth/register', payload)
      if (this.$store.state.auth.token) {
        this.$router.push('/dashboard')
      }
    }
  }
}
</script>
