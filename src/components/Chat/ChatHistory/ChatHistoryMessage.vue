<template>
  <div class="message">
    <div class="message__avatar">{{ messageFromInitials }}</div>
    <div class="message__box">
      <div class="message__from">{{ messageFrom }}</div>
      <div class="message__text">{{ message.text }}</div>
    </div>
    <div class="message__date">{{ messageDate }}</div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "ChatHistoryMessage",

  props: {
    message: Object,
  },

  computed: {
    messageFrom() {
      const user = this.message.from;

      if (user.isBot) {
        return user.botName;
      } else if (user.firstName && user.lastName) {
        return user.firstName + " " + user.lastName;
      } else {
        return user.firstName;
      }
    },

    messageDate() {
      return moment.unix(this.message.date).format("DD/MM HH:mm:ss");
    },

    messageFromInitials() {
      const user = this.message.from;

      if (user.isBot) {
        return user.botName[0];
      } else if (user.firstName && user.lastName) {
        return user.firstName[0] + user.lastName[0];
      } else {
        return user.firstName[0];
      }
    },
  },
};
</script>

<style lang="scss">
.message {
  padding: 10px;
  display: flex;
  align-items: flex-start;
  font-size: 0.875em;

  &__avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background: rgb(61, 27, 27);
    background: linear-gradient(
      146deg,
      rgba(61, 27, 27, 1) 0%,
      rgba(213, 99, 99, 1) 100%
    );
    margin-right: 5px;
    color: white;
  }

  &__from {
    font-weight: 600;
    margin-bottom: 5px;
  }

  &__date {
    font-size: 0.75em;
    margin-left: auto;
  }
}
</style>
