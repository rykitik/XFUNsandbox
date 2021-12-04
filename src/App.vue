<template lang="pug">
#app
  Overlay
  main
    Header
    .container
      SideNav(v-if="$store.state.isViewMenu")
      router-view
</template>

<script>
import Feed from "./views/Feed";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Overlay from "./components/Overlay";
export default {
  name: "App",
  components: {
    Feed,
    Header,
    SideNav,
    Overlay,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
@import url("./assets/reset.css");
* {
  font-family: Roboto;
}
#app {
  margin: 0;
  width: 100%;
  height: 100%;
}
body {
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  background-color: #E7E7E7;
}
.container {
  display: flex;
  height: calc(100% - 108px);
}
</style>
