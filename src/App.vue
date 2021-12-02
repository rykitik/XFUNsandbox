<template lang="pug">
#app
  Header
  home
</template>

<script>
import Home from "./components/Home";
import Header from "./components/Header";

export default {
  name: "App",
  components: {
    Home,
    Header,
  },
};
</script>

<style>
#app {
  margin: 0;
}
body {
  margin: 0;
  width: 100vh;
  height: 100vh;
}
</style>
