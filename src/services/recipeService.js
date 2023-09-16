import api from "@/services/api";

export default {
  getRecipes() {
    return api()
      .get("/recipes")
      .then((response) => response.data);
  },

  createRecipe(data) {
    return api().post("/recipes", data);
  },
  deleteRecipe(_id) {
    return api().delete(`/recipes/${_id}`);
  },
};
