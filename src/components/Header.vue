<template lang="pug">
.headerPage
  .headerElem
    .navBtn(v-on:click="changeViewStatus")
      img(src="../assets/menu.svg", alt="")
    .logo
      img(src="~@/assets/logo.png", alt="")
  .headerElem
    .userManageHeaderPanel(v-on:click="closeAuth") Войти
</template>
<script>
export default {
  name: "HeaderComponent",
  methods: {
    changeViewStatus() {
      // this.$store.commit("changeViewMenu")
    },
    closeAuth() {
      // this.$store.commit('changeViewAuth')
    }
  },
};
</script>
<style scoped>
.headerPage {
  width: 100%;
  height: 90px;
  background-color: #62C2FE;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 20;
}
.headerElem {
  display: flex;
  align-items: center;
}
.navBtn,
.userManageHeaderPanel {
  padding: 0 30px;
  cursor: pointer;
}
.userManageHeaderPanel {
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  color: #04528A;
}
.logo {
  padding: 0 20px;
  cursor: pointer;
}
.logo img {
  margin: auto;
  width: 60px;
}
</style>