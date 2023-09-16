<template>
  <div class="recipe-container">
    <div class="list-section">
      <div class="list-container">
        <h2>Meals</h2>
        <ul>
          <li v-for="meal in Meals" :key="meal.id">
            <input type="checkbox" v-model="meal.isSelected" />
            {{ meal.name }} {{ meal.totalKcal }} kcal
          </li>
        </ul>
      </div>
      <button @click="performActionOnSelectedMeals" class="marg">Delete</button>

      <button @click="performActionOnSelectedMeals" class="marg">
        Favorite
      </button>
    </div>
  </div>
</template>

<script>
import recipeService from "@/services/recipeService";

export default {
  data() {
    return {
      Meals: [],
    };
  },
  methods: {
    async fetchMeals() {
      let meals = await recipeService.getRecipes();
      this.Meals = meals.map((meal) => {
        meal.isSelected = false;
        return meal;
      });
    },
  },
  async created() {
    await this.fetchMeals();
  },
};
</script>

<style scoped>
/* Removed .right-list CSS */
.marg {
  margin-top: 25px;
  margin-bottom: 25px;
}

.recipe-container {
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
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