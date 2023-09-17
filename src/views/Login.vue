<template>
  <div class="login-container">
    <div class="register-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
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
  margin: 0;
  padding: 0;
  font-family: "Lato", sans-serif; /* Adopting the professional font */
  background: #e8eff5; /* Harmonious background color */
}

.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e8eff5; /* Background matching the main app style */
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
  font-weight: 700; /* Bolder for emphasis */
  letter-spacing: 1px; /* Consistency in letter spacing */
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
  font-weight: 600; /* Bolder labels for clearer indication */
}

.form-control {
  border-radius: 5px;
  background-color: rgba(143, 211, 244, 0.1);
  border: 1px solid rgba(143, 211, 244, 0.3);
  transition: all 0.3s ease;
  font-size: 16px;
  padding: 12px 20px;
  width: 100%;
  color: #333; /* Darker text for better readability */
}

.form-control:focus {
  box-shadow: 0 0 5px rgba(143, 211, 244, 0.5);
  border-color: rgba(143, 211, 244, 0.5);
}

button {
  border: none;
  border-radius: 5px;
  padding: 12px 25px;
  font-size: 18px; /* Bigger font size for emphasis */
  font-weight: 600;
  cursor: pointer;
  background-color: #6f87a6; /* Button color in harmony with the app style */
  color: #fff;
  transition: background-color 0.3s ease;
  letter-spacing: 1px; /* Adding that touch of style */
}

.btn-primary:hover {
  background-color: #5a6f8a; /* Slightly darker shade for the hover state */
}
</style>
