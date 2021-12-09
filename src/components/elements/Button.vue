<template lang="pug">
.button
  .logo(v-if="logoSource")
    img
  .text {{ text }}
</template>
<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "Кнопка",
    },
    logoSource: {
      type: String,
    },
  },
};
</script>
<style scoped>
.button {
  display: flex;
  max-width: 526px;
  background-color: #F2F2F2;
  padding: 20px 15px;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
}
.button:hover {
  filter: drop-shadow(0px 3px 2px rgba(0, 0, 0, 0.25));
  filter: brightness(99%);
}
.button:active {
  filter: brightness(95%);
  box-shadow: none;
}
.text {
  font-size: 25px;
}
</style>