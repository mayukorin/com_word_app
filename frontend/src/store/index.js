import Vue from "vue";
import Vuex from "vuex";
import api from "../services/api";

Vue.use(Vuex);

const analyzeModule = {
  namespaced: true,
  state: {
    words:[],
    cnt: [],
  },
  mutations: {
    set(state, payload) {
      state.words = payload.words
      state.cnt = payload.cnt;
      console.log("ai");
      console.log(state.words);
    },
    clear(state) {
      state.words = []
      state.cnt = []
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
        console.log(response.data);
        console.log(response.data.cnt);
        console.log(response.data.words);
        context.commit("set", {words: response.data.words, cnt: response.data.cnt});
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
