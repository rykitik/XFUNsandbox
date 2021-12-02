<template lang="pug">
.headerPage
  .navBtn(v-on:click="changeViewStatus")
    img(src="../assets/menu.svg", alt="")
  .logo
    img(src="../assets/logo.png", alt="")
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
  z-index: 100px;
}
.navBtn {
  padding: 0 30px;
  cursor: pointer;
}
.logo {
  padding: 0 20px;
  cursor: pointer;
}
.logo img {
  margin: auto;
}
</style>