<template>
  <div>
    <h1>Register Page</h1>
    <input v-model="email" type="email" name="email" autocomplete="off">
    <br>
    <p class="error-text" v-if="error.email">{{error.email}}</p>
    <input v-model="password" type="password" name="password" autocomplete="off">
    <br>
    <p class="error-text" v-if="error.password">{{error.password}}</p>
    <input v-model="confirmPassword" type="password" name="confirmPassword" autocomplete="off">
    <br>
    <p class="error-text" v-if="error.confirmPassword">{{error.confirmPassword}}</p>
    <p class="error-text" v-if="error.general">{{error.general}}</p>
    <br>
    <button v-on:click="register">Sign up</button>
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
    register() {
      AuthenticationService.register({
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      })
        .then(res => {
          console.log(res.data);
          this.error = {
            email: null,
            password: null,
            confirmPassword: null,
            general: null
          };
        })
        .catch(err => {
          this.error = err.response.data;
        });
    }
  }
};
</script>

<style scoped>
.error-text {
  font-size: 10px;
  color: red;
}
</style>
