<template>
  <div class="recipe-container">
    <div class="list-section">
      <div class="list-container">
        <h2>Meals</h2>
        <ul>
          <li v-for="meal in Meals" :key="meal._id">
            <input type="checkbox" v-model="meal.isSelected" />
            {{ meal.name }} {{ meal.totalKcal }} kcal
          </li>
        </ul>
      </div>
      <button @click="performActionOnSelectedMeals('delete')" class="marg">
        DELETE
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
        return {
          _id: meal._id,
          name: meal.name,
          ingredients: meal.ingredients,
          totalKcal: meal.totalKcal,
          isSelected: meal.isSelected,
        };
      });
    },

    async deleteSelectedMeals() {
      const selectedMealIds = this.Meals.filter((meal) => meal.isSelected).map(
        (meal) => meal._id
      );

      for (let id of selectedMealIds) {
        await recipeService.deleteRecipe(id);
      }
      await this.fetchMeals(); // Refresh the meals after deleting
    },
    performActionOnSelectedMeals(action) {
      if (action === "delete") {
        this.deleteSelectedMeals();
      } else if (action === "favorite") {
        // Handle the favorite logic here
      }
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
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  padding: 20px;
  background: #eaf6f6; /* Light teal background for consistency */
  height: 100vh;
}

.list-section {
  width: 45%; /* Given the larger viewport, adjusted the width */
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

.btn-primary,
.marg {
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background-color: #6f87a6;
  color: #fff;
  transition: background-color 0.3s ease;
  margin-top: 10px;
  text-align: center;
  letter-spacing: 1px;
}

./* Adjust the primary button */
.btn-primary, .marg {
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
</style>
