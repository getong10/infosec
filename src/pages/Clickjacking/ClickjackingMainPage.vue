<!-- Шаблон главной страницы о кликджекиге  -->
<template>
  <div>
    <ContentFirstPages
        title="КЛИКДЖЕКИНГ"
        description="Кликджекинг (Clickjacking) – это вид кибератаки, при которой злоумышленники под безобидными действиями маскируют вредные действия, чтобы обмануть пользователя и заставить его нажать на элемент подставной веб-страницы без его ведома или согласия."
        svg-name="clickjacking.svg"
        :buttons-list=buttonsList
        :img-style="{ right: '-1%', bottom: '-1%'}"
    ></ContentFirstPages>
  </div>
</template>
<!-- Скрипт главной страницы о кликджекиге  -->
<script>
import ContentFirstPages from "@/components/ContentFirstPages.vue";

export default {
  components: { ContentFirstPages},
  data() {
    return {
      // Массив информации о кнопках страницы
      buttonsList: [
        {
          name: 'Защита',
          link: 'protectClick'
        },
        {
          name: 'Сценарий атаки',
          link: 'chatGT'
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>
