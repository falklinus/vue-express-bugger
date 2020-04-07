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
          <div class="settings-container">
            <div class="fa-icon outside-click-exclude" v-on:click="toggleShowSettings">
              <font-awesome-icon :icon="['fas', 'cog']" style="pointer-events: none"/>
            </div>
            <div v-if="showSettings" class="settings-triangle outside-click-exclude"></div>
            <ul
              v-if="showSettings"
              class="settings-list"
              id="topNavSettings"
              v-outside-click="{exclude: ['outside-click-exclude'], handler: exitSettings}"
            >
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <div class="horizontal-line"></div>
              <li v-on:click="() => {logout(); exitSettings()}">
                <font-awesome-icon :icon="['fas', 'sign-out-alt']" style="pointer-events: none"/>
                <span class="settings-list-text">Sign out</span>
              </li>
            </ul>
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
    return {
      showSettings: false
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn"])
  },
  methods: {
    async logout() {
      try {
        await this.$store.dispatch("setToken", null);
        await this.$store.dispatch("setUser", null);
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    redirectTo(path) {
      if (this.$route.name !== path.name) this.$router.push(path);
    },
    toggleShowSettings() {
      this.showSettings = !this.showSettings;
    },
    exitSettings() {
      this.showSettings = false;
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
  z-index: 10;
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
  background: #fff;
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
  background: #fff;
  transition: all 0.1s ease;
}

.link-inactive:hover::after {
  opacity: 1;
  transform: translate(-50%, 0%) scale(1);
}

.settings-container {
  position: relative;
}

.settings-list {
  position: fixed;
  left: calc((100vw - 900px) / 2 + 900px - 2rem - 10rem);
  top: calc(3rem);
  width: 20rem;
  background: #fff;
  color: #333;
  border: 1px solid #ddd;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.08);
  border-radius: 0.2rem;
  padding: 0.3rem 0;
  z-index: 9;
}

.settings-list li {
  padding: 0.3rem 0.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
}
.settings-list li:hover {
  background: #f3f3f3;
}

.settings-list li .settings-list-text {
  margin-left: 1rem;
}

.settings-triangle {
  z-index: 10;
  position: absolute;
  left: 50%;
  top: 102%;
  transform: translateX(-50%);
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid #fff;
}

@media (max-width: 1138px) {
  .settings-list {
    left: calc(100vw - 20.5rem);
  }
}
</style>
