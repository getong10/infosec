<template>
  <div>
    <img class="back-button" src="/assets/img/back.svg" @click="$router.push('/ddos')" alt="back-button"/>
    <home-button class="home-button"></home-button>
    <div class="container">
      <text-content title="ПЕРЕГРУЗКА<br/>
                    &nbsp&nbsp&nbsp&nbsp&nbspWEB-СЕРВЕРА"
                    :description="descriptionTypes.filter((type) => type.name === state)[0].description"></text-content>
      <div class="button-container">
        <type-button
            class="type-button"
            :class="{ active: (textButton.name === state)}"
            v-for="textButton in buttonsList"
            :key="textButton"
            @click="changeState(textButton.name)">
          {{ textButton.name }}
        </type-button>
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
      state: 'first',
      buttonsList: [
        {
          name: 'На прикладном уровне'
        },
        {
          name: 'На транспортном уровне'
        },
        {
          name: 'На сетевом уровне'
        },
      ],
      descriptionTypes: [
        {
          name: 'first',
          description: 'На данной странице мы узнаем больше про типы DDoS и DoS атак.  DDoS является распределенной версией DoS, где атакующие используют большое количество источников для создания более масштабной атаки.\n' +
              'Рассмотрим три вида DDoS по уровням OSI.'
        },
        {
          name: 'На прикладном уровне',
          description: 'Хакер отправляет множество HTTP-запросов на генерацию веб-страниц.<br/>' +
              'Пример: HTTP-флуд, Slowloris (попытка открыть множество подключений и не прекращать их).'
        },
        {
          name: 'На транспортном уровне',
          description: 'Злоумышленник пытается переполнить каналы доставки данных. <br/>' +
              'Пример: Smurf-атака, SYN-флуд (поток TCP или SYN-пакетов) и другие.'
        },
        {
          name: 'На сетевом уровне',
          description: 'Злоумышленники атакуют сетевые протоколы и оборудование.<br/>' +
              'Пример: IP-флуд и ICMP-флуд, ставящие целью перегрузить пропускную способность целевой сети.'
        },
      ],
    }
  },
  methods: {
    changeState(key) {
      this.state = key
    },
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
  right: 5%;
  top: 5%;
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
}
.button-container .type-button:not(:first-child) {
  margin-left: 5vw
}
.active {
  background-color: #FFFFFF;
  border: 5px solid #92E3A9;
}
.active:hover {
  background-color: #FFFFFF;
}
</style>
