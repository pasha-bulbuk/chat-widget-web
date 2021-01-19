export default {
  loadSuccess: (state) => state.loadingStatus === "success",
  loadError: (state) => state.loadingStatus === "error",
  messages: (state) => {
    return state.chat.messages.sort((a, b) => {
      return a.id - b.id;
    });
  },
  chatTitle: (state) =>
    state.chat.type == "group" ? state.chat.title : state.chat.username,
};
