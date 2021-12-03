<template lang="pug">
.fresh 
  h1 Свежее
  .posts
    PostComponent
</template>

<script>
import PostComponent from "../components/elements/post/PostComponent";
export default {
  name: "Feed",
  components: {
    PostComponent,
  },
};
</script>

<style scoped>
.fresh {
  padding: 15px 25px;
  margin: 0 auto;
}
.posts {
  width: 70%;
  min-height: 100%;
  margin: 5%;
}
</style>