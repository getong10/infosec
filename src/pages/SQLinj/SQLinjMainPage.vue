<template>
  <div>
    <ContentFirstPages
        title="УПРАВЛЕНИЕ БД
        <br/>&nbsp&nbspИ SQL-ИНЪЕКЦИИ"
        description="В этой главе мы разберем администрирование баз данных,<br/> SQL-инъекции и защиту от такого типа атак"
        svg-name="sql.svg"
        :buttons-list=buttonsList
    ></ContentFirstPages>
  </div>
</template>

<script>
import ContentFirstPages from "@/components/ContentFirstPages.vue";

export default {
  components: {ContentFirstPages},
  data() {
    return {
      buttonsList: [
        {
          name: 'Защита',
          link: 'protectSQL'
        },
        {
          name: 'Управление БД',
          link: 'manageDB'
        },
        {
          name: 'Сценарий атаки',
          link: 'cultureBerries'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
