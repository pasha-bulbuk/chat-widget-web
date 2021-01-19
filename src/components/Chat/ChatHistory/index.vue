<template>
  <main class="history">
    <div class="history__messages" v-if="loadSuccess">
      <message
        class="history__message"
        v-for="message in messages"
        :key="message.id"
        :message="message"
      ></message>
    </div>
    <div class="error" v-if="loadError">При загрузке чата произошла ошибка</div>
  </main>
</template>

<script>
import Message from "./ChatHistoryMessage";

import { mapGetters } from "vuex";
export default {
  name: "ChatHistory",

  components: {
    Message,
  },

  computed: {
    ...mapGetters(["messages", "loadSuccess", "loadError"]),
  },
};
</script>

<style lang="scss">
.history {
  max-height: 45vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
  background-color: #ffffff;
  height: 45vh;
}

.error {
  margin: auto;
  padding: 5px;
  border-radius: 5px;
  background-color: #dc143c;
  color: #fff;
  font-size: 0.875em;
}
</style>
