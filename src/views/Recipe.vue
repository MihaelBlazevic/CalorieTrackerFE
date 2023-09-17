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
/* Add the import for the font at the start */
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");

/* Use the imported font throughout the component */
.recipe-container,
.list-container,
h2,
ul,
li {
  font-family: "Open Sans", sans-serif;
}

/* Enhancing the list items */
li {
  margin-bottom: 10px;
  padding: 10px 15px; /* Increased padding */
  background-color: #e9ecf1;
  border: 2px solid transparent; /* Add a transparent border to maintain size on hover */
  border-radius: 5px;
  transition: background 0.3s ease, border-color 0.3s ease; /* Transition for the border color too */
  font-weight: 600; /* Make the text slightly bolder */
}

li:hover {
  background-color: #d1d4da;
  border-color: #6f87a6; /* Adding a border color on hover */
}

/* Text enhancement */
h2 {
  font-size: 22px; /* Slightly bigger header */
  margin-bottom: 20px;
  color: #333;
  letter-spacing: 1.5px;
  font-weight: 600; /* Bolder header */
}

.text-input {
  /* ... (rest of the properties) ... */
  font-size: 18px; /* Bigger font for input */
}

.btn-primary {
  /* ... (rest of the properties) ... */
  letter-spacing: 1.5px; /* Slightly increased letter spacing */
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
  font-size: 20px;
  margin-bottom: 20px;
  color: #333;
  letter-spacing: 1px;
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
  border-radius: 5px;
  transition: background 0.3s ease;
}

li:hover {
  background-color: #d1d4da;
  border: 1px solid #c2c7d0;
}

.btn-primary {
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

.btn-primary:hover {
  background-color: #5a6f8a;
}

.text-input {
  margin-top: 20px;
  padding: 8px 12px;
  border: 1px solid #d1d4da;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  background-color: #f7f9fc;
  transition: border 0.3s ease;
}

.text-input:focus {
  border: 1px solid #6f87a6;
  outline: none;
}

.left-list {
  margin-right: 2%;
}

.right-list {
  margin-left: 2%;
}
</style>
