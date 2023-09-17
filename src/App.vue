<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <h1>Calorie Tracker</h1>
        </router-link>
        <div class="navbar-options" v-if="this.$store.getters.isLoggedIn">
          <router-link to="/home" class="navbar-item">Home</router-link>
          <router-link to="/editor" class="navbar-item"
            >Meal Editor</router-link
          >
          <router-link to="/calories" class="navbar-item">Calories</router-link>
          <router-link to="/recipe" class="navbar-item">Recipe</router-link>
          <router-link to="/" @click="logout()" class="navbar-item"
            >Log Out</router-link
          >
        </div>
      </div>
    </nav>
    <div v-if="$route.path === '/'" class="app-container">
      <p>
        Keep track of your daily calorie intake and maintain a healthy
        lifestyle.
      </p>
      <router-link to="/login" class="btn">Login</router-link>
      <p class="register-prompt">
        Don't have an account?
        <router-link to="/register" class="register-link"
          >Register here!</router-link
        >
      </p>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.navbar {
  background-color: #bdc8d0;
  color: white;
  padding: 10px 0;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.navbar-item {
  color: white;
  margin-left: 20px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2em;
  transition: 0.2s ease;
  letter-spacing: 0.8px;
}

.navbar-item:hover {
  text-decoration: underline;
  color: #e8eff5;
}

.navbar-options {
  display: flex;
  align-items: center;
}

h1 {
  font-weight: 700;
  color: #333;
  letter-spacing: 1px;
}

.app-container {
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  text-align: center;
}

p {
  color: #666;
  max-width: 500px;
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 1.6;
}

.btn {
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

.btn:hover {
  background-color: #5a6f8a;
}

.register-prompt {
  margin-top: 20px;
  color: #666;
}

.register-link {
  color: #007bff;
  cursor: pointer;
  text-decoration: underline;
}
</style>
