<template>
  <div>
    <Topnav/>
    <div v-if="$store.state.isUserLoggedIn" class="content-wrapper">
      <div class="sidenav">
        <Sidenav/>
      </div>
      <div class="page-content">
        <router-view></router-view>
      </div>
    </div>
    <div v-if="!$store.state.isUserLoggedIn">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Topnav from "./components/Layout/Topnav";
import Sidenav from "./components/Sidenav/Sidenav";
export default {
  name: "App",
  components: { Topnav, Sidenav },
  async mounted() {
    try {
      await this.$store.dispatch("checkForToken");
      this.$router.push("/app");
    } catch (err) {
      console.log("User is not logged in");
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css?family=Montserrat|PT+Sans+Narrow&display=swap");

:root {
  /* --primary-color: #ae0094; */
  --primary-color: #333;
  --secondary-color: #ae0094;
  --primary-color-light: rgb(171, 171, 171);
  --primary-color-dark: rgb(40, 40, 40);
  --primary-color-faded: rgba(57, 57, 57, 0.03);
  --light-border-color: #f1f1f1;
  --btn-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  --btn-shadow-hover: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  /* font-family: "Poppins", sans-serif; */
  /* font-weight: 400; */
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: #fafafa;
  color: #333;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

p,
label,
input {
  font-size: 1rem;
}

.content-wrapper {
  width: 900px;
  margin: 0 auto;
  display: flex;
  padding-top: 3rem;
}

.sidenav {
  width: 290px;
}

.page-content {
  /* flex: calc(900px - 290px); */
  width: calc(100% - 290px);
  border-right: 1px solid var(--light-border-color);
  background: #fff;
  padding: 2rem 3rem;
}

.btn {
  padding: 0.3rem 0.9rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  outline: none;
  transition: opacity 0.1s ease-in-out;
  background: none;
}

.btn-primary {
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
  color: #f3f3f3;
  box-shadow: var(--btn-shadow);
  transition: all 0.2s ease-in-out;
}

.btn-primary:hover {
  background: #8c2a7d;
  box-shadow: var(--btn-shadow-hover);
}

.btn-on-dark {
  background: var(--primary-color);
  color: #f3f3f3;
  transition: background 0.1s ease-in-out;
  padding: 0.5rem 0.8rem;
}

.btn-on-dark:hover {
  background: #a53194;
  opacity: 1;
}

.btn-outline {
  background: none;
  color: var(--primary-color);
  border: 1px solid var(--primary-color-light);
  transition: all 0.15s ease-in-out;
}

.btn-outline:hover {
  border: 1px solid var(--primary-color);
  background: var(--primary-color-faded);
}

@media (max-width: 900px) {
  .content-wrapper {
    width: 100%;
  }
}
</style>
