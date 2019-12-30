<template>
  <b-row no-gutters class="dashboard-base-view">
    <div class="vertical-navbar-container col-sm-2">
      <b-nav vertical class="vertical-navbar">
        <div class="nav-links">
          <b-link to="/">Home</b-link>
          <b-link to="/dashboard/purchases">Purchases</b-link>
          <b-link to="/dashboard/items">Items</b-link>
        </div>
      </b-nav>
    </div>
    <div class="dashboard-content p-4 col-sm-10">
      <router-view/>
    </div>
  </b-row>
</template>

<script>
export default { name: 'dashboardBase' }
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
    font-weight: bold;
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
