import api from "@/services/api";
import store from "../store";

export default {
  getIngredients() {
    return api()
      .get("/ingredients", {
        headers: { Authorization: `Bearer ${store.state.token}` },
      })
      .then((response) => response.data);
  },

  createIngredient(data) {
    return api().post("/ingredients", data);
  },
};
