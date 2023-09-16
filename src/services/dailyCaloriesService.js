import api from "@/services/api";

export default {
  getDailyCalories(id) {
    return api().get(`/dailycalories/${id}`);
  },

  createDailyCalories(data) {
    return api().post("/dailycalories", data);
  },
};
