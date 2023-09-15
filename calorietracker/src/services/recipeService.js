import api from "@/services/api";

export default {
  getRecipes() {
    return api().get("/recipes");
  },

  createRecipe(data) {
    return api().post("/recipes", data);
  },
};
