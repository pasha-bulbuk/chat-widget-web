import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default {
  state: () => ({
    chat: null,
    loadingStatus: "",
  }),

  actions,
  mutations,
  getters,
};
