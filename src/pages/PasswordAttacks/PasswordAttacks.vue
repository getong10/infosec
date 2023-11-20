<template>
  <div>
    <ContentFirstPages
        title="ПЕРЕБОР<br/>
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbspПАРОЛЕЙ"
        description="Для систем без ограничений ввода пароля<br/> злоумышленники используют различные автоматизированные переборы и подборы паролей."
        svg-name="passw.svg"
        :buttons-list=buttonsList
        :img-style="{width: '100vh', right: '-5vw', bottom: '10vh'}"
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
          name: 'Типы подборов',
          link: 'typesPasswords'
        },
        {
          name: 'Защита',
          link: 'protectPasswords'
        },
        {
          name: 'Сценарий атаки',
          link: 'startPasswords'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
