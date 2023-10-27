<template lang="pug">
.auth
  OverlayComponent
    .logoOverlay
      img(src="~@/assets/bigLogo.png")
    .authForm 
      .title Вход в аккуант
      ButtonComponent(:text="'Почта'")
      ButtonComponent(:text="'ВКонтакте'")
      ButtonComponent(:text="'Google'")
    .close.unselectable(@click="closeAuth") ×
</template>
<script>
import OverlayComponent from "./elements/Overlay";
import ButtonComponent from "./elements/Button";
export default {
  name: "AuthComp",
  components: {
    OverlayComponent,
    ButtonComponent,
  },
  methods: {
    closeAuth() {
      // this.$store.commit('changeViewAuth')
    }
  }
};
</script>
<style lang="scss">
.auth, .authOverlay {
  width: 100%;
  height: 100%;
}

.logoOverlay {
  background-color: #6FCFFF;
  padding: 80px 30px;
  width: 40%;
  max-width: 40%;
  height: 100%;
}

.logoOverlay img {
  display: block;
  margin: 70px auto auto auto;
  width: 100%;
  max-width: 350px;
}

.authForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
}
.title {
  font-size: 40px;
  line-height: 54px;
}
.close {
  position: absolute;
  cursor: pointer;
  font-size: 70px;
  line-height: 40px;
  top: 3%;
  right: 2.5%;
}
</style>