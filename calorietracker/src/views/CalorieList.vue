<template>
  <div class="item-list-page">
    <router-link to="/home">
      <button @click="goToHomePage" class="home-button">Back to Home</button>
    </router-link>
    <div class="squares-container">
      <div class="square left-square">
        <h2>Item List</h2>
        <ul>
          <li v-for="(item, index) in items" :key="index">{{ item }}</li>
        </ul>
      </div>
      <div class="square right-square">
        <h2>Ingredient List</h2>
        <ul>
          <li v-for="(ingredient, index) in ingredients" :key="index">
            {{ ingredient.name }} - {{ ingredient.calories }} calories/100g
          </li>
        </ul>
      </div>
    </div>
    <div class="save-button-container">
      <button @click="saveData" class="save-button">Save</button>
    </div>
  </div>
</template>

<script>
// ... (your script remains unchanged)
</script>

<style>
body {
  font-family: Arial, sans-serif;
}

.item-list-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f7f7f7;
}

.squares-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 40px;
  width: 100%;
  max-width: 1200px;
}

.square {
  flex: 1;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 30px;
  margin: 0 10px;
}

.left-square {
  background-color: #cce7ff;
}

.right-square {
  background-color: #d9ffd8;
}

.home-button,
.save-button {
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s all ease-out;
}

.home-button {
  background-color: #666;
  color: #fff;
  align-self: flex-start;
  margin-top: 20px;
}

.home-button:hover {
  background-color: #555;
}

.save-button {
  background-color: #007bff;
  color: #fff;
}

.save-button:hover {
  background-color: #0056b3;
}

.save-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 100%;
}

h2 {
  font-size: 24px;
  margin-bottom: 25px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 8px 0;
}
</style>