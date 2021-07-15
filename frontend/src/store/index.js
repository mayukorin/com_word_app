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
    words_and_urls:{},
    word_url_dict:{},
    result:{},
  },
  getters: {
    word_url_dict(state) { return state.word_url_dict }
  },
  mutations: {
    set(state, payload) {
      state.words = payload.words
      state.cnt = payload.cnt
      state.urls = payload.urls
      state.words_and_urls = payload.words_and_urls
      state.word_url_dict = payload.word_url_dict
      state.result = payload.result
      console.log("ああ")
      console.log(payload.word_url_dict)
    },
    clear(state) {
      state.words = []
      state.cnt = []
      state.urls = []
      state.words_and_urls = {}
      state.word_url_dict = {}
      state.result = {}
    },
    findIndex(state, payload) {
      console.log("den")
      console.log(payload.word)
      console.log(state.words_and_urls['words'])
      console.log(state.words_and_urls['words'].indexOf(payload.word));
      return state.words_and_urls['words'].indexOf(payload.word);
    }
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
        context.commit("set", {words: response.data.words, cnt: response.data.cnt, urls: response.data.urls, words_and_urls:response.data.words_and_urls, word_url_dict: response.data.word_url_dict, result: response.data.result});
      })
    },
    searhIndex(context, payload) {
      // 特定のword のインデックスを返す
      return context.commit("findIndex", {word: payload.word});
    }
  }
}

const store = new Vuex.Store({
  modules: {
    analyze: analyzeModule
  },
});

export default store;
