<template>
  <nav class="nav-bar">
    <div class="nav-logo">
      <router-link to="/">
        <button class="btn btn-on-dark">uMeBugs</button>
      </router-link>
    </div>
    <ul class="nav-links">
      <li>
        <router-link to="/register">
          <button class="btn btn-on-dark">About</button>
        </router-link>
      </li>
      <li>
        <router-link to="/register">
          <button class="btn btn-on-dark">Register</button>
        </router-link>
      </li>
      <li>
        <router-link to="/login">
          <button class="btn btn-on-dark">Login</button>
        </router-link>
      </li>
      <!-- <li><router-link to="/register">Login</router-link></li> -->
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3.5rem;
  display: flex;
  align-items: center;
  background: #ae0094;
}

.nav-bar .nav-logo {
  margin-left: 1rem;
}

.nav-bar .nav-links {
  display: flex;
  margin-left: auto;
  margin-right: 1rem;
  align-items: center;
}
</style>
