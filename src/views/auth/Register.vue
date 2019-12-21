<template>
  <b-container class="auth-login" fluid>
    <b-row>
      <b-col>
        <h2 class="auth-header">Register</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col md=4 offset-md=4>
        <RegisterForm />
      </b-col>
    </b-row>
    <b-row>
      <b-col md=4 offset-md=4 class="auth-footer">
        Already have account?<router-link class="ml-2" to="/auth/login">Login</router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RegisterForm from '@/components/forms/auth/Register.vue'

export default {
  name: 'AuthRegister',
  components: {
    RegisterForm
  }
}
</script>
