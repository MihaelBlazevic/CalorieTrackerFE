<template>
  <div class="recipe-container">
    <div class="list-section">
      <div class="list-container left-list">
        <h2>Selected Ingredients</h2>
        <ul>
          <li v-for="ingredient in selectedIngredients" :key="ingredient.id">
            {{ ingredient.name }} {{ ingredient.kcal }} kcal
          </li>
        </ul>
      </div>
      <input
        type="text"
        class="text-input"
        placeholder="Insert a meal name...."
        v-model="mealName"
      />
      <button class="btn-primary save-btn" @click="saveRecipe">Save</button>
    </div>

    <div class="list-section">
      <div class="list-container right-list">
        <h2>Available Ingredients</h2>
        <ul>
          <li v-for="ingredient in availableIngredients" :key="ingredient.id">
            <input type="checkbox" v-model="ingredient.isSelected" />
            {{ ingredient.name }} {{ ingredient.kcal }} kcal
          </li>
        </ul>
      </div>
      <button class="btn-primary transfer-btn" @click="transferIngredients">
        Transfer
      </button>
    </div>
  </div>
</template>

<script>
import ingredientService from "@/services/ingredientService.js";
import recipeService from "@/services/recipeService";

export default {
  data() {
    return {
      availableIngredients: [],
      selectedIngredients: [],
      mealName: "",
      totalKcal: "",
    };
  },
  async created() {
    let ingredients = await ingredientService.getIngredients();
    this.availableIngredients = ingredients.map((ingredient) => {
      ingredient.isSelected = false;
      return ingredient;
    });
    console.log(this.availableIngredients);
  },
  methods: {
    transferIngredients() {
      // Get ingredients that are selected
      let toTransfer = this.availableIngredients.filter(
        (ingredient) => ingredient.isSelected
      );

      // Add them to the selectedIngredients array
      this.selectedIngredients.push(...toTransfer);

      // Remove them from the availableIngredients array
      this.availableIngredients = this.availableIngredients.filter(
        (ingredient) => !ingredient.isSelected
      );
    },
    async saveRecipe() {
      // Calculate total calories
      const totalKcal = this.selectedIngredients.reduce(
        (sum, ingredient) => sum + ingredient.kcal,
        0
      );

      // Construct the recipe object as per your schema
      const recipe = {
        name: this.mealName,
        ingredients: this.selectedIngredients.map(
          (ingredient) => ingredient._id
        ), // This will pass only the ids of the ingredients
        totalKcal: totalKcal,
      };

      // Save the recipe using the recipeService
      await recipeService.createRecipe(recipe);

      // Optionally clear the selected ingredients and meal name after saving
      this.selectedIngredients = [];
      this.mealName = "";
      console.log(recipe);
    },
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
.text-input {
  margin-top: 25px;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 10px; /* Space between input and the Save button */
}
.home-button {
  margin: 25px; /* gives space on the left and right side of the button */
}
</style>
