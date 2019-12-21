<template>
  <div class="dashboard-base">
    <div id="dashboard-nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/dashboard/purchases">Purchases</router-link> |
      <router-link to="/dashboard/items">Items</router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default { name: 'dashboardBase' }
</script>
