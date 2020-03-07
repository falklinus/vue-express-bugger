<template>
  <div>
    <h1 class="page-title">Sign in to your account</h1>
    <form>
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
      <button class="btn btn-outline" v-on:click="login">Sign in</button>
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
import AuthenticationService from "@/services/AuthenticationService";

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
    async login(e) {
      e.preventDefault();
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        this.email = "";
        this.password = "";
        this.error.general = null;
      } catch (err) {
        this.error = err.response.data;
      }
    }
  }
};
</script>

<style scoped>
form {
  width: 50%;
}

@media (max-width: 500px) {
  form {
    width: 100%;
  }
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
