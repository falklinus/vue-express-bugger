<template>
  <div>
    <Header/>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
export default {
  name: "App",
  components: { Header }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css?family=Montserrat|PT+Sans+Narrow&display=swap");

:root {
  --primary-color: #ae0094;
  --btn-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  --btn-shadow-hover: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  color: #222;
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
  font-size: 14px;
}

.content-wrapper {
  width: 70%;
  margin: 6rem auto 0 auto;
}

.btn {
  padding: 0.3rem 0.9rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  transition: opacity 0.1s ease-in-out;
}

.btn-primary {
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
  color: #f3f3f3;
  box-shadow: var(--btn-shadow);
  transition: all 0.2s ease-in-out;
}

.btn-primary:hover,
.btn-primary:focus {
  background: #8c2a7d;
  box-shadow: var(--btn-shadow-hover);
}

.btn-on-dark {
  background: var(--primary-color);
  color: #f3f3f3;
  transition: background 0.1s ease-in-out;
  padding: 0.5rem 0.8rem;
}

.btn-on-dark:hover,
.btn-on-dark:focus {
  background: #a53194;
  opacity: 1;
}

.btn-outline {
  background: none;
  color: var(--primary-color);
  border: 1px solid #ae00947d;
  transition: all 0.1s ease-in-out;
}

.btn-outline:hover,
.btn-outline:focus {
  border: 1px solid #ae0094;
  background: #ff62ea0d;
  opacity: 1;
}
</style>
