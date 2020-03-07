<template>
  <div>
    <h1 class="page-title">Register Account</h1>
    <form>
      <div class="input-section">
        <label for="email">Email adress</label>
        <br>
        <input v-model="email" type="email" name="email" id="email" autocomplete="off" v-focus>
        <br>
        <p class="error-text" v-if="error.email">{{error.email}}</p>
      </div>
      <div class="input-section">
        <label for="password">Password</label>
        <br>
        <input v-model="password" type="password" name="password" id="password" autocomplete="off">
        <br>
        <p class="error-text" v-if="error.password">{{error.password}}</p>
      </div>
      <div class="input-section">
        <label for="confirmPassword">Confirm password</label>
        <input
          v-model="confirmPassword"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          autocomplete="off"
        >
        <br>
        <p class="error-text" v-if="error.confirmPassword">{{error.confirmPassword}}</p>
      </div>
      <br>
      <p class="error-text" v-if="error.general">{{error.general}}</p>
      <button class="btn btn-outline" v-on:click="register">SIGN UP</button>
      <p class="redirect-text">
        Already have an account?
        <span>
          <router-link to="/login">Log in here</router-link>
        </span>
      </p>
    </form>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      error: {
        email: null,
        password: null,
        confirmPassword: null,
        general: null
      }
    };
  },
  methods: {
    async register(e) {
      e.preventDefault();
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        });
        this.error = {
          email: null,
          password: null,
          confirmPassword: null,
          general: null
        };
        this.email = "";
        this.password = "";
        this.confirmPassword = "";
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
