<template>
  <div class="container">
    <form>
      <h1 class="page-title">Register Account</h1>
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
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
      } catch (err) {
        this.error = err.response.data;
      }
    }
  }
};
</script>

<style scoped>
.container {
  width: 400px;
  margin: auto;
  margin-top: 6rem;
}

form {
  width: 100%;
}

@media (max-width: 500px) {
  .container {
    width: 100%;
  }
}

.input-section {
  margin-top: 1rem;
}

input {
  padding: 0.5rem 0.3rem;
  font-size: 1rem;
  border: 1px solid var(--primary-color-light);
  border-radius: 0.25rem;
  outline: none;
  width: 100%;
  transition: all 0.1s ease-in-out;
}

input:focus {
  border: 1px solid var(--primary-color);
}

.error-text {
  font-size: 10px;
  color: var(--secondary-color);
  padding: 0.2rem;
}

.redirect-text {
  font-size: 10px;
  margin-top: 0.3rem;
}

.redirect-text > span {
  color: var(--secondary-color);
}

button:focus {
  border: 1px solid var(--primary-color);
  background: var(--primary-color-faded);
}
</style>
