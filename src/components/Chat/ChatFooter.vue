<template>
  <footer class="footer">
    <div class="footer__message-field">
      <textarea class="footer__input" rows="1" v-model="message"></textarea>
    </div>
    <div class="footer__actions">
      <button class="footer__submit" @click="send"></button>
    </div>
  </footer>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ChatFooter",

  data: () => ({
    message: "",
  }),

  methods: {
    ...mapActions(["sendMessage"]),

    send() {
      this.sendMessage(this.message)
        .then(() => (this.message = ""))
        .catch((e) => console.log(e));
    },
  },
};
</script>

<style lang="scss">
.footer {
  display: flex;
  align-items: flex-end;
  border-top: 1px solid #e9ebed;

  &__message-field {
    width: 100%;
  }

  &__input {
    display: block;
    border: none;
    resize: none;
    padding: 10px;
    font-size: 16px;
    width: calc(100% - 20px);
  }

  &__submit {
    display: block;
    width: 40px;
    height: 40px;
    background: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease;
    background-color: #000;
    padding: 10px;
    mask-image: url("../../assets/submit.svg");
    mask-repeat: no-repeat;
    mask-position: center;
    mask-size: 60%;

    &:hover {
      background-color: #0088cc;
    }
  }
}
</style>
