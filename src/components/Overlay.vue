<template lang="pug">
.overlay
  .bg
  .overlayContent 
    slot
</template>
<style scoped>
.overlay {
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 25;
}
.bg {
  background-color: black;
  opacity: 0.4;
  width: 100%;
  height: 100%;
  padding: 150px 0;
  position: fixed;
  position: absolute;
  overflow: hidden;
}
.overlayContent {
  width: 80%;
  height: 60%;
  /* background-color: white; */
  opacity: 1;
}
</style>
// changeOverlayView() {
//       this.overlay = !this.overlay;
//     },