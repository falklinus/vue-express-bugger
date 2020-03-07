<template>
  <nav class="nav-bar">
    <div class="nav-logo">
      <router-link to="/">
        <button v-on:click="makeActive('home')" class="btn">uMeBugs</button>
      </router-link>
    </div>
    <ul class="nav-links">
      <li>
        <router-link to="/">
          <button v-if="links.home" class="btn link-active">Home</button>
          <button v-if="!links.home" v-on:click="makeActive('home')" class="btn link-inactive">Home</button>
        </router-link>
      </li>
      <li>
        <router-link to="/about">
          <button v-if="links.about" class="btn link-active">About</button>
          <button
            v-if="!links.about"
            v-on:click="makeActive('about')"
            class="btn link-inactive"
          >About</button>
        </router-link>
      </li>
      <li>
        <router-link to="/register">
          <button v-if="links.register" class="btn link-active">Register</button>
          <button
            v-if="!links.register"
            v-on:click="makeActive('register')"
            class="btn link-inactive"
          >Register</button>
        </router-link>
      </li>
      <li>
        <router-link to="/login">
          <button v-if="links.login" class="btn link-active">Login</button>
          <button
            v-if="!links.login"
            v-on:click="makeActive('login')"
            class="btn link-inactive"
          >Login</button>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      links: {
        home: true,
        about: false,
        register: false,
        login: false
      }
    };
  },
  methods: {
    makeActive(link) {
      this.links = {
        home: false,
        about: false,
        register: false,
        login: false
      };
      this.links[link] = true;
    }
  }
};
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
  /* background: #ae0094; */
  border-bottom: 1px solid var(--primary-color);
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

button {
  color: var(--primary-color);
  position: relative;
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
  transition: all 0.2s ease;
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
  transition: all 0.2s ease;
}

.link-inactive:hover::after {
  opacity: 1;
  transform: translate(-50%, 0%) scale(1);
}
</style>
