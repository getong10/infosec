<!-- Шаблон кнопки для пунктов на главной странице атак -->
<template>
  <button
      class="type-button">
    <slot></slot>
  </button>
</template>
<!-- Скрипт с названием компонента для обращения к кнопке -->
<script>
export default {
  name: 'type-button',
}
</script>
<!-- Стили кнопки для пунктов на главной странице атак -->
<style scoped>
.type-button {
  border-radius: 100vw;
  background-color: #92E3A9;
  padding: 2vh 2vw;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
.type-button:hover {
  background-color: #8bd9a1;
}
</style>
