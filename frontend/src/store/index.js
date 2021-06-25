import Vue from "vue";
import Vuex from "vuex";
import api from "../services/api";

Vue.use(Vuex);

const analyzeModule = {
  namespaced: true,
  state: {
    sentence:"",
  },
  mutations: {
    set(state, payload) {
      state.sentence = payload.sentence;
    },
    clear(state) {
      state.sentence = "";
    },
  },
  actions: {
    execute(context, payload) {
      console.log(payload.sentence);
      return api({
        method: "post",
        url: "/analyze/execute",
        data: {
          sentence: payload.sentence
        },
      }).then((response) => {
        console.log(response);
      })
    }
  }
}

const store = new Vuex.Store({
  modules: {
    analyze: analyzeModule
  },
});

export default store;
