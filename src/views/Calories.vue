<template>
    <div class="recipe-container">
      <div class="list-section">
        <div class="list-container left-list">
          <h2>Calories</h2>
          <ul>
            <li v-for="ingredient in availableIngredients" :key="ingredient.id">
              {{ ingredient.name }}
            </li>
          </ul>
        </div>
        <button class="btn-primary save-btn">Save</button>
      </div>
  
      <div class="list-section">
        <div class="list-container right-list">
          <h2>Meals</h2>
          <ul>
            <li v-for="ingredient in selectedIngredients" :key="ingredient.id">
              {{ ingredient.name }}
            </li>
          </ul>
        </div>
        <button class="btn-primary transfer-btn">Select</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        availableIngredients: [],
        selectedIngredients: [],
      };
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
  