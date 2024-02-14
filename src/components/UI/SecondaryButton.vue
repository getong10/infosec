<!-- Шаблон кнопки для различных дополнительных действий на странице (например,
Вернуться на главную, Запустить анимацию и т.д.) -->
<template>
  <button class="secondary-button" >
    <img v-if="svgProp" :src="`/assets/img/${svgProp}`" :alt="svgProp" class="image">
    <slot></slot>
  </button>
</template>
<!-- Скрипт кнопки для различных дополнительных действий на странице -->
<script>
export default {
  name: 'secondary-button',
  props: {
    // Передаваемый в компонент параметр (путь к файлу)
    svgProp: {
      type: String
    },
  }
}
</script>
<!-- Стили кнопки для различных дополнительных действий на странице -->
<style scoped>
.secondary-button {
  border-radius: 0.7vw;
  background-color: #92E3A9;
  position: absolute;
  left: 4vw;
  bottom: 5vh;
  padding: 2vh 1vw;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  height: 2.5vw;
}

.image {
  margin-right: 0.5vw;
  width: 2vw;
}
</style>
