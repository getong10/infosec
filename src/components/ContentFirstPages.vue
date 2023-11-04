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

<script>
import TextContent from "@/components/TextContent.vue";
import ButtonsContent from "@/components/ButtonsContent.vue";
import HomeButton from "@/components/UI/HomeButton.vue";

export default {
  components: {HomeButton, ButtonsContent, TextContent},
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    svgName: {
      type: String,
      required: true
    },
    buttonsList: {
      type: Array
    },
    imgStyle: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

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
