<!-- Шаблон кнопок разделов на главных страницах атак -->
<template>
    <button
        class="main-button"
        @click="$router.push(`${link}`)"> <!-- Переход по переданной ссылке после нажатия на компонент -->
      <slot></slot>
    </button>
</template>
<!-- Скрипт для кнопок разделов на главных страницах атак -->
<script>
export default {
  name: 'main-button',
  props: {
    // Передаваемый в компонент параметр (название ссылки)
    link: {
      type: String,
    }
  }
}
</script>
<!-- Стили кнопок разделов на главных страницах атак -->
<style scoped>
.main-button {
  border-radius: 100vw;
  background-color: #92E3A9;
  padding: 2vh 2vw;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
.main-button:hover {
  background-color: #8bd9a1;
}
</style>
