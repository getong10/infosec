<template>
  <div>
    <img class="back-button" src="/assets/img/back.svg" @click="$router.push('/ddos')" alt="back-button"/>
    <home-button class="home-button"></home-button>
    <div class="container">
      <text-content title="ПЕРЕГРУЗКА<br/>
                    &nbsp&nbsp&nbsp&nbsp&nbspWEB-СЕРВЕРА"
                    :description="descriptionTypes[state].description"></text-content>
      <div v-if="state===0">
        <white-button
            style="margin-left: 40vw;"
            @click="addState()">Узнать ➝</white-button>
      </div>
      <div class="button-container" v-if="state !== 0">
        <white-button
            style="margin-left: -10vw"
            @click="backState">Назад</white-button>
        <white-button
            v-if="state !== descriptionTypes.length-1"
            style="margin-left: 3vw;"
            @click="addState">Далее</white-button>
        <white-button
            v-if="state === descriptionTypes.length-1"
            style="margin-left: 3vw;"
            @click="nullState">В начало</white-button>
      </div>
    </div>
    <img class="background-img" :src="`/assets/img/background-img/ddos.svg`" alt="ddos">
  </div>
</template>

<script>
import TextContent from "@/components/TextContent.vue";

export default {
  components: {TextContent},
  data() {
    return {
      state: 0,
      descriptionTypes: [
        {
          description: 'На данной странице мы узнаем как обеспечить безопасность сетей и веб-ресурсов.'
        },
        {
          description: '<b class="strong-text">1. Выявить уязвимости системы раньше,</b> чем это сделает атакующий. Можно использовать программы, имитирующие DDoS-атаку, например LOIC, HULK, DDOSIM Layer 7.'
        },
        {
          description: '<b class="strong-text">2. Межсетевые брандмауэры (Firewalls)</b> – сетевое устройство или ПО, предназначенное для контроля и фильтрации сетевого трафика между различными сетями или сегментами сети.'
        },
        {
          description: '<b class="strong-text">3. Системы обнаружения атак (IDS) и системы предотвращения атак (IPS)</b> могут помочь в выявлении и блокировке атак на ранних стадиях. Они производят мониторинг сетевой активности, обнаружают аномалии и блокируют или предупреждают владельцев'
        },
        {
          description: '<b class="strong-text">4. Использование систем балансировки нагрузки</b> может помочь распределять трафик между несколькими серверами, что делает сложнее атаку на один сервер'
        },
        {
          description: '<b class="strong-text">5. Правильная настройка серверов и приложений,</b> заключающаяся в создании ограничений на количество одновременных запросов и управление ресурсами'
        },
        {
          description: '<b class="strong-text">6. Капча (Completely Automated Public Turing test to tell Computers and Humans Apart)</b> обычно относится к методам защиты на уровне прикладного программного обеспечения (Application Layer) и используется для различения между человеками и автоматизированными ботами'
        },
      ],
    }
  },
  methods: {
    addState() {
      this.state = ++this.state
    },
    backState() {
      this.state = --this.state
    },
    nullState() {
      this.state = 0
    }
  },
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
.background-img {
  width: 85vh;
  position: absolute;
  right: -5%;
  bottom: -5%;
  z-index: 0;
}
.home-button {
  position: absolute;
  right: 5vw;
  top: 5vw;
}
.back-button {
  position: absolute;
  left: 5%;
  top: 7%;
  cursor: pointer;
  height: 6vh;
}
.button-container {
  display: flex;
  justify-content: center;
}
</style>
