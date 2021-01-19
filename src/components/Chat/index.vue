<template>
  <div class="chat">
    <chat-header class="chat__header"></chat-header>
    <chat-history class="chat__history"></chat-history>
    <chat-footer class="chat__footer"></chat-footer>
  </div>
</template>

<script>
import ChatHeader from "./ChatHeader";
import ChatHistory from "./ChatHistory";
import ChatFooter from "./ChatFooter";

import { mapActions } from "vuex";

export default {
  name: "Chat",

  components: {
    ChatHeader,
    ChatHistory,
    ChatFooter,
  },

  data: () => ({
    loading: false,
  }),

  async mounted() {
    this.loading = true;
    await this.getChat();
    setInterval(() => {
      this.getChat();
    }, 1000);
    this.loading = false;
  },

  methods: {
    ...mapActions(["getChat"]),
  },
};
</script>

<style lang="scss">
.chat {
  max-width: 350px;
  width: 350px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  border: 1px solid grey;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
