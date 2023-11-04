<template>
  <div>
    <img class="back-button" src="/assets/img/back.svg" @click="$router.push('/xss')" alt="back-button"/>
    <home-button class="home-button"></home-button>
    <div class="container">
      <text-content title="МЕЖСАЙТОВЫЙ<br/>&nbsp;&nbsp;&nbspСКРИПТИНГ"
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
    <img class="background-img" :src="`/assets/img/background-img/xss.svg`" alt="xss">
  </div>
</template>

<script>
import TextContent from "@/components/TextContent.vue";
import HomeButton from "@/components/UI/HomeButton.vue";
import TypeButton from "@/components/UI/TypeButton.vue";

export default {
  components: {TypeButton, HomeButton, TextContent},
  data() {
    return {
      state: 'first',
      buttonsList: [
        {
          name: 'Stored XSS'
        },
        {
          name: 'Reflected XSS'
        },
        {
          name: 'DOM-based XSS'
        },
      ],
      descriptionTypes: [
        {
          name: 'first',
          description: 'На данной странице мы узнаем больше про типы атак <br/> межсайтового скриптинга'
        },
        {
          name: 'Stored XSS',
          description: '<b class="strong-text">Сохраненный XSS:</b> Злоумышленник внедряет вредоносный скрипт, который сохраняется на сервере и выполняется при каждом обращении пользователя к этой странице. Примером может быть комментарий на форуме, который содержит вредоносный код'
        },
        {
          name: 'Reflected XSS',
          description: '<b class="strong-text">Рефлектированный XSS:</b> В этом случае злоумышленник внедряет вредоносный код в URL-адрес, который затем отображается на странице и выполняется в браузере пользователя при переходе по этому URL. Например, злоумышленник может отправить жертве ссылку с вредоносными параметрами.'
        },
        {
          name: 'DOM-based XSS',
          description: '<b class="strong-text">DOM-ориентированный XSS:</b> Этот вид XSS-атаки связан с манипуляциями DOM (Document Object Model) в браузере пользователя. Злоумышленник внедряет вредоносный код, который изменяет DOM-структуру страницы и взаимодействует с ней. Этот тип XSS сложнее обнаружить и предотвратить'
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
  width: 70vh;
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
