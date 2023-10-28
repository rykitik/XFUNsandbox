<template lang="pug">
#app 
  AuthComp(v-if="$store.state.isViewAuth")
  main
    HeaderComponent
    .container
      SideNav(v-if="$store.state.isViewMenu")
      router-view
  </template>
  
  <script>
  import FeedView from "./views/Feed";
  import HeaderComponent from "./components/Header";
  import SideNav from "./components/SideNav";
  import AuthComp from "./components/Auth";
  export default {
    name: "App",
    components: {
      FeedView,
      HeaderComponent,
      SideNav,
      AuthComp,
    },
  };
  </script>
  
  <style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
  @import url("./assets/reset.css");
  @import url("./assets/style.css");
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
    min-height: 100vh;
    height: auto;
  }
  </style>
  