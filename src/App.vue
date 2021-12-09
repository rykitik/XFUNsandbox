<template lang="pug">
#app
  Auth
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
import Auth from "./components/Auth";
export default {
  name: "App",
  components: {
    Feed,
    Header,
    SideNav,
    Auth,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
@import url("./assets/reset.css");
* {
  font-family: "Roboto", sans-serif;
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
  font-family: "Roboto", sans-serif;
}
.container {
  display: flex;
  height: calc(100% - 108px);
}
</style>
