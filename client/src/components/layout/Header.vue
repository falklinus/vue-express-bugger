<template>
  <nav class="nav-outer">
    <div class="nav-inner">
      <div class="nav-logo">
        <div class="fa-icon" v-if="isUserLoggedIn" v-on:click="redirectTo({name: 'Dashboard'})">
          <font-awesome-icon :icon="['fas', 'bug']"/>
        </div>
        <div class="fa-icon" v-if="!isUserLoggedIn" v-on:click="redirectTo({name: 'Home'})">
          <font-awesome-icon :icon="['fas', 'bug']"/>uMeBugs
        </div>
      </div>
      <ul class="nav-links">
        <li v-if="!isUserLoggedIn">
          <button v-if="$route.name==='Register'" class="link-active">Register</button>
          <button
            v-if="$route.name!=='Register'"
            v-on:click="redirectTo({name:'Register'})"
            class="link-inactive"
          >Register</button>
        </li>
        <li v-if="!isUserLoggedIn">
          <button v-if="$route.name==='Login'" class="link-active">Login</button>
          <button
            v-if="$route.name!=='Login'"
            v-on:click="redirectTo({name:'Login'})"
            class="link-inactive"
          >Login</button>
        </li>
        <li v-if="isUserLoggedIn">
          <div class="fa-icon">
            <font-awesome-icon :icon="['fas', 'cog']"/>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    ...mapState(["isUserLoggedIn"])
  },
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push("/");
    },
    redirectTo(path) {
      if (this.$route.name !== path.name) this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.fa-icon {
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 0.4rem 0.5rem;
  margin: 0 0.5rem;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #fff;
  transition: background 0.1s ease-in-out;
}

.fa-icon:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav-outer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3rem;
  background: #f7f7f7;
  background: #3d3d3d;
  border-bottom: 1px solid #e3e3e3;
  border-bottom: 1px solid #414141;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  color: #fff;
}

.nav-inner {
  display: flex;
  align-items: center;
  width: 900px;
  margin: auto;
}

.nav-inner .nav-links {
  display: flex;
  margin-left: auto;
  align-items: center;
}

button {
  color: var(--primary-color);
  color: #fff;
  position: relative;
  border: none;
  margin-left: 1rem;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.2rem;
  outline: none;
  background: none;
}

.nav-logo {
  cursor: pointer;
  font-size: 18px;
}

.nav-logo button {
  margin: 0;
}

.link-active::after {
  content: "";
  position: absolute;
  width: 15px;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 0%);
  height: 2px;
  background: var(--primary-color);
}

.link-inactive::after {
  content: "";
  position: absolute;
  width: 15px;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -300%) scale(0);
  height: 2px;
  opacity: 0;
  background: var(--primary-color);
  transition: all 0.1s ease;
}

.link-inactive:hover::after {
  opacity: 1;
  transform: translate(-50%, 0%) scale(1);
}
</style>
