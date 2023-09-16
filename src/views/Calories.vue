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
      console.log(res);
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
.recipe-container {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
  height: 100vh;
}

.list-section {
  width: 30%; /* Adjust as needed */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.list-container {
  width: 100%; /* Taking the full width of the .list-section */
  background-color: #f7f9fc;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 20px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
  max-height: 250px;
  overflow-y: auto;
}

li {
  margin-bottom: 10px;
  padding: 5px 10px;
  background-color: #e9ecf1;
  border: 1px solid #d1d4da;
  border-radius: 15px;
  transition: all 0.3s ease;
}

li:hover {
  background-color: #cfd5df;
}

.btn-primary {
  display: block;
  margin-top: 10px;
  text-align: center;
  width: 100%;
}
</style>
