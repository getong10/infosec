<!-- Шаблон кнопки для пунктов меню -->
<template>
  <div>
    <button
        class="menu-button"
        @click="$router.push(`/${link}`)"> <!-- Переход по переданной ссылке после нажатия на компонент -->
      <slot></slot>
      <img :src="`/assets/img/${svgProp}`" :alt="svgProp"> <!-- Изображение на фоне -->
    </button>
  </div>
</template>
<!-- Скрипт кнопки для пунктов меню -->
<script>
export default {
  name: 'menu-button',
  props: {
    // Передаваемый в компонент параметр (путь к иконке)
    svgProp: {
      type: String,
      required: true
    },
    // Передаваемый в компонент параметр (ссылка)
    link: {
      type: String,
      required: true
    }
  },
}
</script>
<!-- Стили кнопки для пунктов меню -->
<style scoped>
.menu-button {
  background-color: rgba(237, 239, 239, 1);
  font-weight: 700;
  border-radius: 40px;
  border: none;
  text-transform: uppercase;
  text-align: left;
  display: flex;
  padding-left: 3vw;
  padding-top: 3vw;
  font-size: 2vw;
  overflow: hidden;
  cursor: pointer;
  width: 30vw;
  min-height: 35vh;
  position: relative;
}

.menu-button:hover {
  background-color: #DEF7E5;
}

.menu-button img {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 20vh;
}
</style>
