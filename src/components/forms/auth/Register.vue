<template>
  <div class="login-form-container">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="login-username"
      >
        <b-form-input
          id="login-username"
          v-model="form.email"
          type="email"
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
      <b-form-group
        id="input-group-1"
        label="Password (Repeat):"
        label-for="login-password"
      >
        <b-form-input
          id="login-password"
          v-model="form.passwordRepeat"
          type="password"
          required
        ></b-form-input>
      </b-form-group>
      <div class="text-center">
        <router-link class="btn-cancel mr-4" to="/">Cancel</router-link>
        <b-button type="submit" variant="primary">Submit</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        passwordRepeat: ''
      },
      show: true
    }
  },
  methods: {
    name: 'RegisterForm',
    onSubmit (evt) {
      evt.preventDefault()
    }
  }
}
</script>
