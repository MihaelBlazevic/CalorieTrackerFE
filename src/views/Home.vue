<template>
  <div class="container-fluid home-container">
    <div class="row welcome-section">
      <div class="col">
        <h2>Welcome, {{ user.name }}!</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 offset-md-4 calories-box">
        <h2>Today's Calories</h2>
        <p>{{ dailyCalories }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import dailyCaloriesService from "@/services/dailyCaloriesService.js";
export default {
  name: "Home",
  data() {
    return {
      user: {},
      dailyCalories: 0,
    };
  },
  async created() {
    this.user = this.$store.getters.getUser;
    const dailyCalories = await dailyCaloriesService.getDailyCalories(
      this.user._id
    );
    if (dailyCalories) {
      this.dailyCalories = dailyCalories["data"]["dailyCalories"];
    }
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

.logout {
  margin-top: 150px;
}

.home-container {
  height: 100vh;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  padding: 40px 0;
}

.welcome-section {
  text-align: center;
  margin-bottom: 20px;
}

.calories-box {
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
