import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const URL = `http://x4upoddomen.itmaker.uz/api/users`;
const LOGIN = `http://x4upoddomen.itmaker.uz/api/user/login`;

export default {
  state: {
    user: {},
    id: localStorage.getItem("id") || "",
    token: localStorage.getItem("token") || ""
  },
  mutations: {
    updateData(state, item) {
      state.persons = item;
    },
    auth_success(state, user, token) {
      state.user = user;
      state.token = state.id = user.id;
    },
    logout(state) {
      state.token = "";
      state.user = "";
      state.id = "";
    },
    setUser(state, token) {
      state.token = token;
    },
    setUserId(state, id) {
      state.id = id;
    }
  },
  actions: {
    async loadData({ commit }) {
      try {
        const info = await axios.get(URL);
        commit("updateData", info.data);
        return info.data;
      } catch (e) {
        throw e;
      }
    },
    async loginUser({ commit }, user) {
      await axios
        .post(LOGIN, {
          email: user.email,
          password: user.password
        })
        .then(response => {
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("id", response.data.user.id);
            commit("setUser", response.data.token);
            commit("setUserId", response.data.user.id);
          }
        })
        .catch(err => {
          localStorage.removeItem("token");
          reject(err);
        });
    },
    async getInfo({ commit, state }) {
      try {
        const uid = state.id;
        const info = await axios.get(URL + "/" + uid);
        commit("auth_success", info.data);
        return info.data;
      } catch (e) {
        throw e;
      }
    },
    logout({ commit }) {
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      commit("logout");
    }
  },

  getters: {
    USER: state => {
      return state.user;
    },
    isLoggedIn: state => !!state.token
    // ID: state => {
    //   return state.id;
    // }
  }
};
