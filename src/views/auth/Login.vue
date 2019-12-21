<template>
  <b-container class="auth-login" fluid>
    <b-row>
      <b-col>
        <h2 class="auth-header">Login</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col md=4 offset-md=4>
        <LoginForm />
      </b-col>
    </b-row>
    <b-row>
      <b-col md=4 offset-md=4 class="auth-footer">
        Don't have an account yet?<router-link class="ml-2" to="/auth/register">Register</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import LoginForm from '@/components/forms/auth/Login.vue'

export default {
  name: 'AuthLogin',
  components: {
    LoginForm
  }
}
</script>
