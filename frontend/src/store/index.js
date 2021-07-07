import Vue from "vue";
import Vuex from "vuex";
import api from "../services/api";

Vue.use(Vuex);

const analyzeModule = {
  namespaced: true,
  state: {
    words:[],
    cnt: [],
    urls: [],
    words_and_urls:[],
  },
  mutations: {
    set(state, payload) {
      state.words = payload.words
      state.cnt = payload.cnt
      state.urls = payload.urls
      state.words_and_urls = payload.words_and_urls
    },
    clear(state) {
      state.words = []
      state.cnt = []
      state.urls = []
      state.words_and_urls = []
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
        context.commit("set", {words: response.data.words, cnt: response.data.cnt, urls: response.data.urls, words_and_urls:response.data.words_and_urls});
      })
    },
    findIndex(context, payload) {
      // 特定のword のインデックスを返す
      return state.words.indexOf(payload.word);
    }
  }
}

const store = new Vuex.Store({
  modules: {
    analyze: analyzeModule
  },
});

export default store;
