<template>
  <div class="auth-base m-5">
    <router-view></router-view>
  </div>
</template>

<script>
export default { name: 'AuthBase' }
</script>

<style lang="scss">
.auth-header {
  text-align: center;
}

.auth-footer {
  text-align: center;
  margin-top: 10px;
}
</style>
