<template>
  <div class="dialog">
    <div class="dialog-cover back" v-if="isShow" @click="closeMyself"></div>
    <transition name="drop">
      <div
        class="dialog-content"
        :style="{
          top: topDistance + '%',
          width: widNum + '%',
          left: leftSite + '%',
        }"
        v-if="isShow"
      >
        <div class="dialog_head back">
          <slot name="header"> Информация для запроса </slot>
        </div>
        <div
          class="dialog_main"
          :style="{ paddingTop: pdt + 'px', paddingBottom: pdb + 'px' }"
        >
          <slot name="main"> всплывающее содержимое </slot>
        </div>
        <div class="foot_close" @click="closeMyself">
          <div class="close_img back"></div>
        </div>
      </div>
    </transition>
  </div>
</template> 
 <script>
export default {
  props: {
    isShow: {
      // Отображается ли всплывающий компонент или нет
      type: Boolean,
      default: false,
      required: true, // Обязательно
    },
    // Следующие атрибуты будут привязаны к div. Подробнее см. Структуру html выше
    // Например:: style = "{top: topDistance + '%', width: widNum + '%'}"
    widNum: {
      // Ширина содержимого
      type: Number,
      default: 86.5,
    },
    leftSite: {
      // позиционирование слева
      type: Number,
      default: 6.5,
    },
    topDistance: {
      // верхнее верхнее поле
      type: Number,
      default: 35,
    },
    pdt: {
      // отступ вверх
      type: Number,
      default: 22,
    },
    pdb: {
      // Следующее заполнение
      type: Number,
      default: 47,
    },
  },
};
</script>
<style lang="scss" scoped>
// Внешний слой устанавливает позицию позиционирования
.dialog {
  position: relative;
  color: #2e2c2d;
  font-size: 16px;
}
// Маска Установите фоновый слой, значение z-индекса должно быть достаточно большим, чтобы обеспечить покрытие, а высота и ширина должны быть установлены на полноэкранную маску
.dialog-cover {
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
// Z-индекс слоя содержимого больше маски, иначе он будет закрыт.
.dialog-content {
  position: fixed;
  top: 35%;
  // В мобильном терминале используется макет felx
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 300;
}
</style>