<template>
  <div class="landing-container">
    <div class="content-box">
      <h1>Welcome to Calorie Tracker</h1>
      <p>Track your daily caloric intake and monitor your health efficiently.</p>
      <router-link to="/login" class="btn btn-primary">Login</router-link>
      <p class="register-prompt">Don't have an account? <router-link to="/register" class="register-link">Register here!</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
.landing-container {
  height: 100vh;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Arial', sans-serif;
}

.content-box {
  background-color: white;
  padding: 40px 50px;
  border-radius: 20px;
  box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
  text-align: center;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

.btn {
  border-radius: 20px;
  font-size: 16px;
  padding: 10px 20px;
  margin: 10px 0;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background-color: #007BFF;
  color: white;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.register-prompt {
  margin-top: 20px;
}

.register-link {
  color: #007BFF;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.3s ease;
}

.register-link:hover {
  color: #0056b3;
}
</style>

