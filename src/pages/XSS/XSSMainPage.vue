<!-- Шаблон главной страницы о XSS-атаках -->
<template>
  <div>
    <ContentFirstPages
        title="МЕЖСАЙТОВЫЙ<br/>&nbsp;&nbsp;&nbspСКРИПТИНГ"
        description="XSS (Cross-Site Scripting) – вид уязвимости в web-приложениях,<br/> при которой злоумышленник
        внедряет вредоносный JS-код<br/> или другие скрипты в web-страницы,<br/> которые затем выполняются в браузере пользователей"
        svg-name="xss.svg"
        :buttons-list=buttonsList
    ></ContentFirstPages>
  </div>
</template>
<!-- Скрипт главной страницы о XSS-атаках -->
<script>
import ContentFirstPages from "@/components/ContentFirstPages.vue";

export default {
  components: { ContentFirstPages},
  data() {
    return {
      // Массив с информацией о кнопках
      buttonsList: [
        {
          name: 'Типы атак',
          link: 'typesXSS'
        },
        {
          name: 'Защита',
          link: 'protectXSS'
        },
        {
          name: 'Сценарий атаки',
          link: 'startXSS'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
