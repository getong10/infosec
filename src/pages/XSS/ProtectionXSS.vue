<!-- Шаблон страницы со способами защиты от XSS-атак -->
<template>
  <div>
    <img class="back-button" src="/assets/img/back.svg" @click="$router.push('/xss')" alt="back-button"/>
    <home-button class="home-button"></home-button>
    <div class="container">
      <text-content title="МЕЖСАЙТОВЫЙ<br/>&nbsp;&nbsp;&nbspСКРИПТИНГ"
                    :description="descriptionTypes[state].description"></text-content>
      <!-- Кнопки навигации по способам-->
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
    <img class="background-img" :src="`/assets/img/background-img/xss.svg`" alt="xss">
  </div>
</template>
<!-- Скрипт страницы со способами защиты от XSS-атак -->
<script>
import TextContent from "@/components/TextContent.vue";
import HomeButton from "@/components/UI/HomeButton.vue";
import WhiteButton from "@/components/UI/WhiteButton.vue";

export default {
  components: {WhiteButton, HomeButton, TextContent},
  data() {
    return {
      state: 0, // Номер текущего способа защиты
      // Массив с перечислением способов защиты
      descriptionTypes: [
        {
          description: 'На данной странице мы узнаем как защититься<br/> от межсайтового скриптинга и не потерять свои данные'
        },
        {
          description: '<b class="strong-text">1. Фильтрация и экранирование входных данных:</b><br/> Всегда фильтруйте и экранируйте данные, вводимые пользователями, перед их отображением на web-странице'
        },
        {
        description: '<b class="strong-text">2. Заголовки безопасности:</b> Установите правильные заголовки безопасности, такие как Content Security Policy (CSP), чтобы ограничить источники выполняемых скриптов'
        },
        {
          description: '<b class="strong-text">3. Валидация входных данных:</b> Проверяйте входные данные на соответствие ожидаемому формату и типу данных. Отклоняйте недопустимые входные данные'
        },
        {
          description: '<b class="strong-text">4. Использование библиотек и фреймворков:</b> Используйте фреймворки и библиотеки, которые автоматически защищают от XSS-атак, например, Angular, React или Vue.js'
        },
        {
          description: '<b class="strong-text">5. Минимизация использования JavaScript:</b> По возможности ограничьте использование JavaScript и уменьшьте зависимость от него'
        },
        {
          description: '<b class="strong-text">6. Регулярные аудиты безопасности:</b> Проводите регулярные аудиты кода и тестирование на уязвимости для выявления и устранения потенциальных уязвимостей XSS'
        },
        {
          description: '<b class="strong-text">7. Соблюдение стандартов безопасности:</b> Следуйте рекомендациям и стандартам безопасности, таким как<br/> OWASP Top Ten, для защиты от известных уязвимостей'
        }
      ],
    }
  },
  methods: {
    // Методы изменения состояния текущего способа защиты
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
<!-- Стили страницы со способами защиты от XSS-атак -->
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
