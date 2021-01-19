import Axios from "axios";

export default {
  async getChat({ commit, state }) {
    if (state.loadingStatus === "") {
      commit("setLoadingStatus", "loading");
    }

    await Axios.get(`/api/chats/${process.env.VUE_APP_CHAT_ID}`)
      .then((res) => {
        console.log(res.data);
        commit("setChat", res.data);
        commit("setLoadingStatus", "success");
      })
      .catch(() => commit("setLoadingStatus", "error"));
  },
};
