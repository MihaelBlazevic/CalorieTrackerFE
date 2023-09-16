import api from "@/services/api";

export default {
  getDailyCalories(data) {
    return api()
      .get("/dailycalories", data)
      .then((response) => response.data);
  },

  createDailyCalories(data) {
    return api().post("/dailycalories", data);
  },
};
