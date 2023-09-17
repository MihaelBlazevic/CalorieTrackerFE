import axios from "axios";
import store from "../store";

export default () => {
  return axios.create({
    baseURL: "https://calorietrackerbe.onrender.com",
    headers: {
      Authorization: `Bearer ${store.getters.isLoggedIn}`,
    },
  });
};
