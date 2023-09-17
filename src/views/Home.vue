<template>
  <div class="home-container">
    <div class="welcome-section">
      <h2>Welcome, {{ user.name }}!</h2>
    </div>
    <div class="calories-box">
      <h2>Today's Calories</h2>
      <p :class="{ 'calories-limit': hasReachedCalorieLimit }">
        {{ dailyCalories }}
      </p>
      <p v-if="hasReachedCalorieLimit" class="calories-message">
        You have reached the appropriate calorie intake for today, Good job!
      </p>
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
    if (dailyCalories && dailyCalories.data) {
      this.dailyCalories = dailyCalories.data.dailyCalories || 0;
    }
  },
  computed: {
    hasReachedCalorieLimit() {
      return this.dailyCalories >= 2000;
    },
  },
};
</script>

<style>
body,
html {
  margin: 0 !important;
  padding: 0 !important;
  font-family: "Lato", sans-serif !important;
  background: #e8eff5;
}

.home-container {
  height: 100vh;
  background: #eaf6f6; /* Light teal background */
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.welcome-section {
  text-align: center;
  margin-bottom: 50px;
  color: #333;
}

.calories-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.calories-box h2 {
  font-size: 22px;
  margin-bottom: 20px;
  color: #6f87a6;
}

.calories-box p {
  font-size: 36px;
  margin-bottom: 25px;
  color: #333;
}

.calories-limit {
  color: #6f87a6;
}

.calories-message {
  font-size: 8px; /* Reduced font size for the calorie message */
  color: #6f87a6; /* Match the color with the scheme */
  text-align: center;
  margin-top: 20px;
}

button {
  border: none;
  border-radius: 5px;
  padding: 12px 25px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  background-color: #6f87a6; /* Button color to match with the scheme */
  color: #fff;
  transition: background-color 0.3s ease;
  letter-spacing: 1px;
}

button:hover {
  background-color: #5a6f8a; /* Slightly darker shade for the hover state */
}
</style>
