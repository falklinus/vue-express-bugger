<template>
  <div>
    <h1>Register Page</h1>
    <input v-model="email" type="email" name="email" autocomplete="off">
    <br>
    <input v-model="password" type="password" name="password" autocomplete="off">
    <br>
    <input v-model="confirmPassword" type="password" name="confirmPassword" autocomplete="off">
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
      confirmPassword: ""
    };
  },
  methods: {
    register() {
      AuthenticationService.register({
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      }).then(res => console.log(res.data));
    }
  }
};
</script>

<style>
</style>
