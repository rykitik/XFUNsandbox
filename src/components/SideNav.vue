<template lang="pug">
nav.SideNav
  .navItem
    a(href="") Популярное
  .navItem
    a(href="") Свежее
  .navItem
    a(href="") Подписки
  .navItem
    a(href="") TUB
  .navItem
    a(href="") Minecraft
  .navItem
    a(href="") HYPPER
</template>
<style lang="scss" scoped>
.SideNav {
  font-family: "Roboto", sans-serif;
  height: 100%;
  min-width: 280px;
  max-width: 280px;
  width: 25%;
  background-color: #F2F2F2;
  overflow: hidden;
  padding-top: 35px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 15;
}
.SideNav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #000;
  display: block;
}
.SideNav a:hover {
  opacity: 0.8;
}
.SideNav a:active {
  opacity: 0.4;
}
@media screen and (max-height: 450px) {
  .SideNav {
    padding-top: 15px;
  }
  .SideNav a {
    font-size: 18px;
  }
}
</style>