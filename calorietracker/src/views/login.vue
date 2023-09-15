<template>
  <div class="login-container">
    <div class="register-form shadow-lg p-4 rounded">
      <h2 class="text-center mb-4">Login</h2>
      <form @submit.prevent="login">
        <div class="form-group mb-3">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="form-control"
            required
          />
        </div>
        <div class="form-group mb-3">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary btn-block">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import authService from "@/services/authService.js";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const response = await authService.login({
          email: this.email,
          password: this.password,
        });

        const { token, user } = response.data;

        this.$store.dispatch("login", { token, user });
        this.$router.push({ name: "Home" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
body,
html {
  margin: 0 !important;
  padding: 0 !important;
  font-family: "Roboto", sans-serif !important;
}

.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

.register-form {
  max-width: 380px !important;
  background-color: #fff;
  padding: 30px 40px !important;
}

.form-group {
  margin-bottom: 10px !important;
}

label {
  display: block;
  margin-bottom: 5px !important;
}

.form-control {
  border-radius: 20px !important;
  background-color: rgba(143, 211, 244, 0.1) !important;
  border: 1px solid rgba(143, 211, 244, 0.3) !important;
  transition: all 0.3s ease !important;
  font-size: 16px !important;
  padding: 12px 20px !important;
  width: 100% !important;
}

.form-control:focus {
  box-shadow: 0 0 5px rgba(143, 211, 244, 0.5) !important;
  border-color: rgba(143, 211, 244, 0.5) !important;
}

button {
  background-color: #007bff !important;
  color: white !important;
  padding: 10px 15px !important;
  border: none !important;
  border-radius: 4px !important;
  cursor: pointer !important;
}

.btn-primary {
  border-radius: 20px !important;
  background-color: #007bff !important;
  border: none !important;
  font-size: 16px !important;
  padding: 12px 20px !important;
}
</style>
