<template>
  <div>
    <h2 class="page-title">Sign in to your account</h2>
    <form v-on:submit="login">
      <div class="input-section">
        <label for="email">Email adress</label>
        <br>
        <input v-model="email" type="email" name="email" id="email" autocomplete="off" v-focus>
      </div>
      <div class="input-section">
        <label for="password">Password</label>
        <br>
        <input v-model="password" type="password" name="password" id="password" autocomplete="off">
      </div>
      <br>
      <p class="error-text" v-if="error.general">{{error.general}}</p>
      <button class="btn btn-outline">Sign in</button>
      <p class="redirect-text">
        Don't have an account?
        <span>
          <router-link to="/register">Sign up here</router-link>
        </span>
      </p>
    </form>
  </div>
</template>

<script>
// import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: {
        general: null
      }
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
    }
  }
};
</script>

<style scoped>
form {
  width: 50%;
}

.input-section {
  margin-top: 1rem;
}

input {
  padding: 0.5rem 0.3rem;
  font-size: 14px;
  border: 1px solid #ae00947d;
  border-radius: 0.25rem;
  outline: none;
  width: 100%;
  font-weight: 300;
  transition: all 0.1s ease-in-out;
}

input:focus {
  border: 1px solid var(--primary-color);
  background: #ff62ea0d;
}

.error-text {
  font-size: 10px;
  color: var(--primary-color);
  padding: 0.2rem;
}

.redirect-text {
  font-size: 10px;
  margin-top: 0.3rem;
}

.redirect-text > span {
  color: var(--primary-color);
}
</style>
