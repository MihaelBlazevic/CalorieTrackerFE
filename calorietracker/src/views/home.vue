<template>
  <div class="home-container">
    <div class="logout">
      <button @click="logout">Log Out</button>
    </div>
    <div class="welcome-section">
      <h2>Welcome, {{ name }}!</h2>
    </div>
    <div class="calories-box">
      <h2>Today's Calories</h2>
      <p>{{ todaysCalories }}</p>
    </div>
    <div class="actions">
      <button @click="addCalories">Add Calories</button>
      <button @click="createMeal">Create a Meal</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      userName: "John Doe", // Placeholder. Replace with actual dynamic data
      todaysCalories: 2000, // Placeholder. Replace with actual dynamic data
    };
  },
  methods: {
    addCalories() {
      // Logic to add calories
    },
    createMeal() {
      // Logic to create a meal
    },
    logout() {
      // Logic to log out the user
      // For example, clear any stored authentication tokens, reset user data, etc.
      // Then route the user to the login page
      console.log("Logged out");
      this.$router.push("/login"); // Replace with the actual path to the login page
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

.home-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  padding: 40px 0;
}

.welcome-section {
  align-self: flex-start;
  margin-left: 20px;
}

.calories-box {
  width: 250px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
}

.calories-box h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.calories-box p {
  font-size: 48px;
  margin-bottom: 20px;
}

.actions {
  display: flex;
  gap: 20px;
}

button {
  border-radius: 25px;
  background-color: #6cd9c3;
  border: none;
  font-size: 16px;
  padding: 15px 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 150px;
  text-align: center;
}

button:hover {
  background-color: #56bfa4;
}
</style>