<template>
  <b-row no-gutters class="dashboard-base-view">
    <div class="vertical-navbar-container col-sm-2">
      <b-nav vertical class="vertical-navbar">
        <div class="nav-links">
          <b-link id="vert-nav-purchases" to="/dashboard/purchases"><FontAwesomeIcon icon="dollar-sign" />Purchases</b-link>
          <b-link id="vert-nav-items" to="/dashboard/items"><FontAwesomeIcon icon="burn" />Items</b-link>
          <b-link @click="logout" id="vert-nav-logout"><FontAwesomeIcon icon="lock" />Logout</b-link>
        </div>
      </b-nav>
    </div>
    <div class="dashboard-content p-4 col-sm-10">
      <router-view/>
    </div>
  </b-row>
</template>

<script>
export default {
  name: 'dashboardBase',
  methods: {
    logout (evt) {
      evt.preventDefault()
      this.$store.dispatch('auth/logout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-base-view {
  height: 100%;
}

.vertical-navbar-container {
  background-color: $dark;
  height: 100%;
}

.nav-links a {
  display: block;
  padding: 12px;
  transition: 0.3s background-color ease;

  &:hover {
    text-decoration: none;
    color: white;
    background-color: $secondary;
  }

  svg {
    margin-bottom: 3px;
    margin-right: 10px;
  }
}

.dashboard-content {
  height: 100%;
}

a {
  color: white;
}

.router-link-exact-active{
  background-color: $primary;
}
</style>
