<!-- Шаблон главных страниц атак -->
<template>
  <div>
    <home-button class="home-button"></home-button>
    <div class="container">
      <text-content :title=title
                    :description=description></text-content>
      <buttons-content :text-buttons=buttonsList></buttons-content>
    </div>
    <img :src="`/assets/img/background-img/${svgName}`" :alt="svgName" :style="imgStyle">
  </div>
</template>
<!-- Скрипт для главных страниц атак -->
<script>
import TextContent from "@/components/TextContent.vue";
import ButtonsContent from "@/components/ButtonsContent.vue";
import HomeButton from "@/components/UI/HomeButton.vue";

export default {
  components: {HomeButton, ButtonsContent, TextContent},
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
    },
    // Передаваемый в компонент параметр (путь к иконке атаки)
    svgName: {
      type: String,
      required: true
    },
    // Передаваемый в компонент параметр (массив кнопок)
    buttonsList: {
      type: Array
    },
    // Передаваемый в компонент параметр (кастомный стиль для изображения)
    imgStyle: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
<!-- Стили главных страниц атак -->
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 5vh;
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  z-index: 1;
}
img {
  width: 70vh;
  position: absolute;
  right: -5%;
  bottom: -5%;
  z-index: 0;
}
.home-button {
  position: absolute;
  right: 5%;
  top: 5%;
}
</style>
