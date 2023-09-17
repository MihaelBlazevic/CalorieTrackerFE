<template>
  <div class="register-container">
    <div class="register-form">
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            v-model="name"
            required
            class="form-control"
          />
        </div>

        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            class="form-control"
          />
        </div>
        <button type="submit" class="btn-primary">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import authService from "@/services/authService.js";

export default {
  name: "Register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        await authService.register({
          name: this.name,
          email: this.email,
          password: this.password,
        });

        this.$router.push({ name: "Login" });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  font-family: "Lato", sans-serif;
  background: #e8eff5;
}

.register-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e8eff5;
}

.register-form {
  max-width: 400px;
  background-color: #ffffff;
  padding: 30px 40px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

h2 {
  color: #333;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
  padding-right: 20px;
}

label {
  display: block;
  margin-bottom: 7px;
  color: #555;
  font-weight: 600;
}

.form-control {
  border-radius: 5px;
  background-color: rgba(143, 211, 244, 0.1);
  border: 1px solid rgba(143, 211, 244, 0.3);
  transition: all 0.3s ease;
  font-size: 16px;
  padding: 12px 20px;
  width: 100%;
  color: #333;
}

.form-control:focus {
  box-shadow: 0 0 5px rgba(143, 211, 244, 0.5);
  border-color: rgba(143, 211, 244, 0.5);
}

button.btn-primary {
  border: none;
  border-radius: 5px;
  padding: 12px 25px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  background-color: #6f87a6;
  color: #fff;
  transition: background-color 0.3s ease;
  letter-spacing: 1px;
}

.btn-primary:hover {
  background-color: #5a6f8a;
}
</style>
