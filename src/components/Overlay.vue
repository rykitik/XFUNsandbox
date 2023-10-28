<template lang="pug">
.overlay
  .bg
    .overlayContent 
      slot
</template>
</template>
<script>
export default {
  name: "OverlayComponent"
};
</script>
<style scoped>
.overlay {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 25;
}
.bg {
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  padding: 150px 0;
  position: fixed;
  position: absolute;
  overflow: hidden;
  z-index: 26;
}
.overlayContent {
  position: fixed;
  left: 10%;
  width: 80%;
  height: 70vh;
  border-radius: 10px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 1);
  z-index: 65;
}
</style>
// changeOverlayView() {
//       this.overlay = !this.overlay;
//     },