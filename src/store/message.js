import Axios from "axios";

export default {
  actions: {
    sendMessage(context, message) {
      const newMessage = {
        text: message,
        chatId: process.env.VUE_APP_CHAT_ID,
      };
      return new Promise((res, rej) => {
        Axios.post(`/api/messages`, newMessage)
          .then(() => {
            res();
          })
          .catch((e) => rej(e));
      });
    },
  },
};
