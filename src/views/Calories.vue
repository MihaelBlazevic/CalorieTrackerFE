<template>
  <div class="recipe-container">
    <div class="list-section">
      <div class="list-container left-list">
        <h2>Calories</h2>
        <ul>
          <li v-for="meal in selectedMeals" :key="meal.id">
            {{ meal.name }} {{ meal.totalKcal }} kcal
          </li>
        </ul>
      </div>
      <button class="btn-primary save-btn" @click="saveDailyCalories">
        Save
      </button>
    </div>

    <div class="list-section">
      <div class="list-container right-list">
        <h2>Meals</h2>
        <ul>
          <li v-for="meal in availableMeals" :key="meal.id">
            <input type="checkbox" v-model="meal.isSelected" />
            {{ meal.name }} {{ meal.totalKcal }} kcal
          </li>
        </ul>
      </div>
      <button class="btn-primary transfer-btn" @click="transferSelectedMeals">
        Select
      </button>
    </div>
  </div>
</template>

<script>
import recipeService from "@/services/recipeService";
import dailyCaloriesService from "@/services/dailyCaloriesService.js";

export default {
  data() {
    return {
      availableMeals: [],
      selectedMeals: [],
    };
  },
  methods: {
    async saveDailyCalories() {
      // Calculate the total calories by summing the totalKcal of selected meals
      const totalCalories = this.selectedMeals.reduce((total, meal) => {
        return total + meal.totalKcal;
      }, 0);

      // Now, you can send the totalCalories in the request
      const res = await dailyCaloriesService.createDailyCalories({
        user: this.$store.getters.getUser._id,
        recipes: this.selectedMeals,
        dailyCalories: totalCalories, // Fill in the total calories here
      });
      this.$router.push({ name: "Home" });
    },

    async fetchMeals() {
      let meals = await recipeService.getRecipes();
      this.availableMeals = meals.map((meal) => {
        meal.isSelected = false;
        return meal;
      });
    },
    transferSelectedMeals() {
      // Filter out the meals that are selected
      const mealsToTransfer = this.availableMeals.filter(
        (meal) => meal.isSelected
      );

      // Add them to the selectedMeals list
      this.selectedMeals.push(...mealsToTransfer);

      // Remove them from the availableMeals list
      this.availableMeals = this.availableMeals.filter(
        (meal) => !meal.isSelected
      );
    },
  },
  async created() {
    await this.fetchMeals();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");

.recipe-container,
.list-container,
h2,
ul,
li {
  font-family: "Open Sans", sans-serif;
}

.recipe-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #eaf6f6; /* Light teal background */
  height: 100vh;
}

.list-section {
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list-container {
  width: 100%;
  background-color: #f7f9fc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 24px; /* Slightly bigger for more emphasis */
  margin-bottom: 20px;
  color: #333;
  letter-spacing: 1.5px;
  font-weight: 600;
}

ul {
  list-style-type: none;
  padding-left: 0;
  max-height: 250px;
  overflow-y: auto;
}

li {
  display: flex; /* Display checkbox and text in line */
  align-items: center; /* Vertically align checkbox and text */
  margin-bottom: 10px;
  padding: 10px 15px;
  background-color: #e9ecf1;
  border: 2px solid transparent; /* Transparent border to keep sizes consistent */
  border-radius: 5px;
  transition: background 0.3s ease, border-color 0.3s ease;
}

li:hover {
  background-color: #d1d4da;
  border-color: #6f87a6;
}

/* Adjust the primary button */
.btn-primary,
.marg {
  display: inline-block; /* To better control spacing and layout */
  border: none;
  border-radius: 25px;
  padding: 12px 24px; /* Slightly bigger for better touch target */
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  background-color: #6f87a6;
  color: #fff;
  transition: background-color 0.3s ease, transform 0.3s ease; /* Added transform */
  text-align: center;
  letter-spacing: 1.5px;
  margin-top: 20px;
  text-transform: uppercase; /* Make text uppercase for visual distinction */
}

.btn-primary:hover,
.marg:hover {
  background-color: #5a6f8a;
  transform: scale(1.05); /* Slight scale on hover for feedback */
}
input[type="checkbox"] {
  margin-right: 10px; /* Add some space between checkbox and label */
}

.left-list {
  margin-right: 2%;
}

.right-list {
  margin-left: 2%;
}
</style>
