<template>
  <div>
    <ContentFirstPages
        title="МЕЖСАЙТОВЫЙ<br/>&nbsp;&nbsp;&nbspСКРИПТИНГ"
        description="XSS (Cross-Site Scripting) – вид уязвимости в web-приложениях,<br/> при которой злоумышленник
        внедряет вредоносный JS-код<br/> или другие скрипты в web-страницы,<br/> которые затем выполняются в браузере пользователей."
        svg-name="xss.svg"
        :buttons-list=buttonsList
    ></ContentFirstPages>
    <AnonymousModal text-message="Сейчас Вы будете в роли хакера, который хочет заполучить данные аккаунта у Василия Пупкина.
      Для начала перейдите на страницу регистрации."></AnonymousModal>
  </div>
</template>

<script>
import ContentFirstPages from "@/components/ContentFirstPages.vue";
import AnonymousModal from "@/components/UI/AnonymousModal.vue";

export default {
  components: {AnonymousModal, ContentFirstPages},
  data() {
    return {
      buttonsList: [
        {
          name: 'Типы атак',
          link: 'typesXSS'
        },
        {
          name: 'Защита',
          link: ''
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
