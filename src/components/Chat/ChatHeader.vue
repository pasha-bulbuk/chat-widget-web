<template>
  <header class="header">
    <div class="header__title">{{ headerText }}</div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ChatHeader",

  computed: {
    ...mapGetters(["chatTitle", "loadSuccess"]),

    headerText() {
      return this.loadSuccess ? this.chatTitle : "Загрузка...";
    },
  },
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: #5682a3;
  font-weight: 700;
  font-size: 1.125em;
  height: 32px;
  padding: 0 20px;
}
</style>
