<template>
  <div>
    <ContentFirstPages
        title="ПОДДЕЛКА<br/>
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspЗАПРОСА"
        description="CSRF (Cross-Site Request Forgery) – тип атаки на веб-приложения, при котором злоумышленник заставляет авторизованного пользователя выполнить нежелательные действия на веб-сайте,<br/> на который пользователь уже аутентифицирован"
        svg-name="csrf.svg"
        :buttons-list=buttonsList
        :img-style="{ width: '60vh' }"
    ></ContentFirstPages>
  </div>
</template>

<script>
import ContentFirstPages from "@/components/ContentFirstPages.vue";

export default {
  components: { ContentFirstPages},
  data() {
    return {
      buttonsList: [
        {
          name: 'Как работает',
          link: 'guideCSRF'
        },
        {
          name: 'Защита',
          link: 'protectCSRF'
        },
        {
          name: 'Сценарий атаки',
          link: 'elMailRf'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
