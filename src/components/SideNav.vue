<template lang="pug">
nav.SideNav
  .navItem
    router-link(:to="{ name: 'Feed' }") Популярное
  .navItem
    router-link(:to="{ name: 'Fresh' }") Свежее
  .navItem
    router-link(:to="{ name: 'Subscriptions' }") Подписки
  .navItem
    router-link(:to="{ name: 'Topic', params: { topicID: 1 } }") TUB
  .navItem
    router-link(:to="{ name: 'Topic', params: { topicID: 2 } }") Minecraft
  .navItem
    router-link(:to="{ name: 'Topic', params: { topicID: 3 } }") HYPPER
</template>
<style lang="scss" scoped>
.SideNav {
  height: 100vh;
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
  margin: 0 auto;
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
.router-link-exact-active {
  width: 60%;
  background-color: #FDFDFD;
  border-radius: 15px;
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