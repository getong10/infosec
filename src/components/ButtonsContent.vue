<!-- Шаблон контейнера с кнопками разделов на главных страницах атак -->
<template>
  <div class="button-container">
    <main-button
        class="main-button"
        v-for="textButton in textButtons"
        :key="textButton"
        @click="$router.push(`/${textButton.link}`)"> <!-- Переход по переданной ссылке после нажатия на компонент -->
      {{ textButton.name }}
    </main-button>
  </div>
</template>
<!-- Скрипт для контейнера с кнопками разделов на главных страницах атак -->
<script>
export default {
  props: {
    // Передаваемый в компонент параметр (текст кнопки)
    textButtons: {
      type: Array,
      required: true
    }
  }
}
</script>
<!-- Стили контейнера с кнопками разделов на главных страницах атак -->
<style scoped>
.button-container {
  display: flex;
}
.button-container .main-button:not(:first-child) {
  margin-left: 5vw
}
</style>
