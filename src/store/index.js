import { createStore } from "vuex";
import axios from "axios";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    token: "",
    user: {},
  },
  getters: {
    isLoggedIn: (state) => {
      return state.token;
    },
    getUser: (state) => {
      return state.user;
    },
  },
  mutations: {
    setToken: (state, token) => {
      state.token = token;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    reset: (state) => {
      state.token = "";
      state.user = {};
    },
  },
  actions: {
    login({ commit, dispatch }, { token, user }) {
      commit("setToken", token);
      commit("setUser", user);

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    },
    logout({ commit, dispatch }) {
      commit("reset", "");
      delete axios.defaults.headers.common["Authorization"];
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
