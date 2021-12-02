<template lang="pug">
.headerPage
  .headerElem
    .navBtn(v-on:click="changeViewStatus")
      img(src="../assets/menu.svg", alt="")
    .logo
      img(src="../assets/logo.png", alt="")
  .headerElem
    .userManageHeaderPanel Войти
</template>
<script>
export default {
  name: "Header",
  methods: {
    changeViewStatus() {
      console.log("cloick");
      this.$store.commit("changeViewMenu");
    },
  },
};
</script>
<style scoped>
.headerPage {
  width: 100%;
  height: 108px;
  background-color: #62C2FE;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
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
}
</style>