<!-- Шаблон контейнера с названием и описанием атаки -->
<template>
  <div>
    <h1 v-html="title"></h1>
    <h2 v-html="description"></h2>
  </div>
</template>
<!-- Скрипт для контейнера с названием и описанием атаки -->
<script>
export default {
  props: {
    // Передаваемый в компонент параметр (название атаки)
    title: {
      type: String,
      required: true
    },
    // Передаваемый в компонент параметр (описание атаки)
    description: {
      type: String,
      required: true
    }
  }
}
</script>
<!-- Стили для контейнера с названием и описанием атаки -->
<style scoped>
* {
  display: flex;
  flex-direction: column;
}

h1 {
  text-transform: uppercase;
  font-size: 8vw;
  line-height: 87%;
}

h2 {
  padding-top: 4vh;
  font-size: 2vw;
  width: 75vw;
  display: inline;
}
</style>
