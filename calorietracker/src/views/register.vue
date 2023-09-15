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
.register-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
}

.register-form {
  max-width: 380px;
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
  margin-right: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

.form-control {
  border-radius: 20px;
  background-color: rgba(143, 211, 244, 0.1);
  border: 1px solid rgba(143, 211, 244, 0.3);
  transition: all 0.3s ease;
  font-size: 16px;
  padding: 12px 20px;
  width: 100%;
}

.form-control:focus {
  box-shadow: 0 0 5px rgba(143, 211, 244, 0.5);
  border-color: rgba(143, 211, 244, 0.5);
}

.btn-primary {
  border-radius: 20px;
  background-color: #007bff;
  border: none;
  font-size: 16px;
  padding: 12px 20px;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
