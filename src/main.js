import App from "@/App";
import Vue from "vue";

import store from "@/store";

Vue.config.productionTip = false;

const appConfig = {
  store,
  render: (h) => h(App),
};

new Vue(appConfig).$mount("#app");
