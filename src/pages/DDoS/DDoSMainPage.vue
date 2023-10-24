<template>
  <div>
    <ContentFirstPages
        title="ПЕРЕГРУЗКА<br/>
        &nbsp&nbsp&nbsp&nbsp&nbspWEB-СЕРВЕРА"
        description="DDoS (Distributed Denial of Service) и DoS – это атаки, цель которых заключается в перегрузке веб-серверов, сети или других ресурсов с помощью одновременной отправки огромного объема сетевого трафика на целевой ресурс."
        svg-name="ddos.svg"
        :buttons-list=buttonsList
        :img-style="{ width: '85vh'}"
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
          name: 'Типы атак',
          link: 'typesDDoS'
        },
        {
          name: 'Защита',
          link: 'protectDDoS'
        },
        {
          name: 'Сценарий атаки',
          link: 'ddosAttack'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
