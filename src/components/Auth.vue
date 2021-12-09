<template lang="pug">
.auth
  Overlay
    .logoOverlay
      img(src="~@/assets/bigLogo.png")
    .authForm 
      Button
</template>
<script>
import Overlay from "./elements/Overlay";
import Button from "./elements/Button";
export default {
  name: "Auth",
  components: {
    Overlay,
    Button,
  },
};
</script>
<style lang="scss">
.auth, .authOverlay {
  width: 100%;
  height: 100%;
}

.logoOverlay {
  background-color: #6FCFFF;
  padding: 30px;
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
  width: 50%;
  padding: 30px;
  height: 100%;
}
</style>