import Vue from "vue";
import Vuex from "vuex";

import chat from "./chat";
import message from "./message";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    chat,
    message,
  },
});

export default store;
