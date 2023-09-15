import api from "@/services/api";

export default {
  getIngredients() {
    return api().get("/ingredients");
  },

  createIngredient(data) {
    return api().post("/ingredients", data);
  },
};
