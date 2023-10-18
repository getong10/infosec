<template>
  <div>
    <div class="container">
      <text-content title="ИНФОБЕЗ<br/>&nbsp;&nbsp;&nbsp;&nbsp;WEB-СИСТЕМ"
                    description="Защити свой сайт от уязвимостей<br/>и внешних угроз"></text-content>
      <white-button link="menu">Начать ➝</white-button>
    </div>
    <img src="@/assets/img/background-img/main-hacker-bro.svg">
  </div>
</template>

<script>
import TextContent from "@/components/TextContent.vue";
import WhiteButton from "@/components/UI/WhiteButton.vue";

export default {
  components: {WhiteButton, TextContent}

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
}
img {
  width: 70vh;
  position: absolute;
  right: -5%;
  bottom: -5%;
}
</style>
