<template>
  <div>
    <img class="back-button" src="/assets/img/back.svg" @click="$router.push('/clickjacking')" alt="back-button"/>
    <home-button class="home-button"></home-button>
    <div class="container">
      <text-content title="КЛИКДЖЕКИНГ"
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
    <img class="background-img" :src="`/assets/img/background-img/clickjacking.svg`" alt="clickjacking">
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
          description: 'Чтобы предотвратить манипуляции с действиями пользователей на вашем веб-ресурсе необходимо использовать меры по защита сайта от кликджекинга'
        },
        {
          description: '<b class="strong-text">1. Использование HTTP-заголовка "X-Frame-Options",</b><br/> который позволяет вам контролировать, как ваш сайт может быть встроен во фреймы на других сайтах. Вы можете установить его значение в "deny" (запретить встраивание во фреймы) или "sameorigin" (разрешить встраивание только на сайты с тем же источником).'
        },
        {
          description: '<b class="strong-text">2. Политика Безопасности Контента (CSP)</b> — это механизм обнаружения и предотвращения, обеспечивающий смягчение последствий таких атак, как XSS и кликджекинг. CSP обычно реализуется на веб-сервере в виде возвращаемого заголовка вида: Content-Security-Policy: frame-ancestors \'none\''
        },
        {
          description: '<b class="strong-text">3. Установка атрибута samesite</b>  – атрибута cookie,<br/> который может помочь избежать кликджекинг-атаки. При samesite = Strict cookie-файл будет отправлен на сайт только в том случае, если он открыт напрямую, не через фрейм или каким-либо другим способом. Метод защиты эффективен только в том случае, если вы используете cookie для авторизации пользователей.'
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
  width: 70vh;
  position: absolute;
  right: -1%;
  bottom: -1%;
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
