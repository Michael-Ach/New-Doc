import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let localRestaurants = window.localStorage.getItem("restaurants");
console.log(JSON.parse(localRestaurants), "at store");

export default new Vuex.Store({
  state: {
    restaurants: localRestaurants ? JSON.parse(localRestaurants) : [],
    restaurant: null,
  },
  getters: {},
  mutations: {
    ADD_T0_RESTAURANTS(state, item) {
      state.restaurants.push(item);
      window.localStorage.setItem(
        "restaurants",
        JSON.stringify(state.restaurants)
      );
    },

    GET_RESTAURANT(state, data) {
      state.restaurant = state.restaurants.find((item) => {
        console.log(item.email == data);
        return item.email == data;
      });
    },

    UPDATE_RESTAURANT(state, data) {
      let foundIndex = state.restaurants.findIndex((item) => {
        console.log(item.email, data.email);
        return item.email == data.email;
      });
      if (foundIndex != -1) {
        state.restaurants[foundIndex] = { ...data };
        window.localStorage.setItem(
          "restaurants",
          JSON.stringify(state.restaurants)
        );
      }
    },

    DELETE_RESTAURANT(state, data) {
      let foundIndex = state.restaurants.findIndex((item) => {
        return item.email == data.email;
      });
      if (foundIndex != -1) {
        console.log(state.restaurants, "before");
        state.restaurants.splice(foundIndex, 1);
        console.log(state.restaurants, "after");

        window.localStorage.setItem(
          "restaurants",
          JSON.stringify(state.restaurants)
        );
      }
    },
  },
  actions: {
    addToRestaurants({ commit }, item) {
      commit("ADD_T0_RESTAURANTS", item);
    },

    getRestaurant({ commit }, data) {
      commit("GET_RESTAURANT", data);
    },

    updateRestaurant({ commit }, data) {
      commit("UPDATE_RESTAURANT", data);
    },

    deleteRestaurant({ commit }, data) {
      commit("DELETE_RESTAURANT", data);
    },
  },
  modules: {},
});
