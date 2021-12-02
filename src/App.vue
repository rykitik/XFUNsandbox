<template lang="pug">
#app
  Header
  .container
    SideNav(v-if="$store.state.isViewMenu")
    home
</template>

<script>
import Home from "./views/Home";
import Header from "./components/Header";
import SideNav from "./components/SideNav";

export default {
  name: "App",
  components: {
    Home,
    Header,
    SideNav,
  },
};
</script>

<style>
#app {
  margin: 0;
  width: 100%;
  height: 100vh;
}
body {
  margin: 0;
  width: 100%;
  height: 100vh;
}
.container {
  display: flex;
  height: calc(100% - 108px);
}
</style>
