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
            <div class="fa-icon" v-on:click="toggleShowSettings" ref="'cog'">
              <font-awesome-icon :icon="['fas', 'cog']"/>
            </div>
            <div
              ref="settings-triangle"
              class="settings-triangle"
              v-bind:class="{show: showSettings===true}"
            ></div>
            <ul
              class="settings-list"
              v-bind:class="{show: showSettings===true}"
              v-closable="{exclude: ['settings-triangle', 'cog'], handler: 'toggleShowSettings'}"
            >
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
              <li>Test</li>
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
      showSettings: true
    };
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
    },
    toggleShowSettings() {
      if (this.showSettings) this.showSettings = false;
      else this.showSettings = true;
    }
  }
};

/*import Vue from "vue";

// This variable will hold the reference to
// document's click handler
let handleOutsideClick;

 Vue.directive("closable", {
  bind(el, binding, vnode) {
    // Here's the click/touchstart handler
    // (it is registered below)
    handleOutsideClick = e => {
      e.stopPropagation();
      // Get the handler method name and the exclude array
      // from the object used in v-closable
      const { handler, exclude } = binding.value;

      // This variable indicates if the clicked element is excluded
      let clickedOnExcludedEl = false;
      exclude.forEach(refName => {
        // We only run this code if we haven't detected
        // any excluded element yet
        if (!clickedOnExcludedEl) {
          // Get the element using the reference name
          const excludedEl = vnode.context.$refs[refName];
          // See if this excluded element
          // is the same element the user just clicked on
          clickedOnExcludedEl = excludedEl.contains(e.target);
        }
      });

      // We check to see if the clicked element is not
      // the dialog element and not excluded
      if (!el.contains(e.target) && !clickedOnExcludedEl) {
        // If the clicked element is outside the dialog
        // and not the button, then call the outside-click handler
        // from the same component this directive is used in
        vnode.context[handler]();
      }
    };
    // Register click/touchstart event listeners on the whole page
    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
  },

  unbind() {
    // If the element that has v-closable is removed, then
    // unbind click/touchstart listeners from the whole page
    document.removeEventListener("click", handleOutsideClick);
    document.removeEventListener("touchstart", handleOutsideClick);
  }
}); */
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
  z-index: 2;
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
  display: none;
}

.show {
  display: block;
}

.settings-list li {
  padding: 0.3rem 0.7rem;
  cursor: pointer;
}
.settings-list li:hover {
  background: #f3f3f3;
}

.settings-triangle {
  display: none;
  z-index: 3;
  position: absolute;
  left: 50%;
  top: 102%;
  transform: translateX(-50%);
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid #fff;
}

.settings-triangle.show {
  display: block;
}
</style>
