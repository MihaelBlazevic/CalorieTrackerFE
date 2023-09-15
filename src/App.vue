<template>
  <div>
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <h1>Calorie Tracker</h1>
        </router-link>
        <div class="navbar-options" v-if="this.$store.getters.isLoggedIn">
          <router-link to="/home" class="navbar-item">Home</router-link>
          <router-link to="/calories" class="navbar-item">Calories</router-link>
          <router-link to="/recipe" class="navbar-item">Recipe</router-link>
          <router-link to="/" @click="logout()">Log Out</router-link>
        </div>
      </div>
    </nav>
    <div v-if="$route.path === '/'" class="app-container">
      <p>
        Keep track of your daily calorie intake and maintain a healthy
        lifestyle.
      </p>

      <!-- Login button -->
      <router-link to="/login" class="btn">Login</router-link>

      <!-- Register prompt and link -->
      <p class="register-prompt">
        Don't have an account?
        <router-link to="/register" class="register-link"
          >Register here!</router-link
        >
      </p>
    </div>

    <router-view />
    <!-- This will render the component for the current route -->
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
.app-container {
  background-color: #2a3d45;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: "Raleway", sans-serif;
}

h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
}

p {
  margin-bottom: 20px;
}

.btn {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
}

.register-prompt {
  margin-top: 15px;
}

.register-link {
  color: #e57373;
  cursor: pointer;
  text-decoration: underline;
}

.navbar {
  background-color: #2a3d45;
  color: white;
  padding: 10px 0;
}

.navbar-brand {
  display: flex;
  align-items: center;
  margin-left: 20px;
}

.navbar-item {
  color: white;
  margin-right: 20px;
  text-decoration: none;
  font-size: 1.2em;
}

.navbar-item:hover {
  text-decoration: underline;
}

.navbar-options {
  display: flex;
  align-items: center;
}
</style>
