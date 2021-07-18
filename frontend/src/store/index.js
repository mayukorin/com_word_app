import Vue from "vue";
import Vuex from "vuex";
import api from "../services/api";

Vue.use(Vuex);

const analyzeModule = {
  namespaced: true,
  state: {
    // words:[],
    // cnt: [],
    // urls: [],
    // words_and_urls:{},
    // word_url_dict:{},
    result:{},
  },
  mutations: {
    set(state, payload) {
      /*
      /state.words = payload.words
      state.cnt = payload.cnt
      state.urls = payload.urls
      state.words_and_urls = payload.words_and_urls
      state.word_url_dict = payload.word_url_dict
      */
      state.result = payload.result
    },
    clear(state) {
      /*
      state.words = []
      state.cnt = []
      state.urls = []
      state.words_and_urls = {}
      state.word_url_dict = {}
      */
      state.result = {}
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
        console.log(response.data.result);
        context.commit("set", {result: response.data.result});
      })
    },
  }
}

const store = new Vuex.Store({
  modules: {
    analyze: analyzeModule
  },
});

export default store;
