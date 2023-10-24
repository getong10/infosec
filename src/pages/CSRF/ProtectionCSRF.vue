<template>
  <div>
    <img class="back-button" src="@/assets/img/back.svg" @click="$router.push('/csrf')" alt="back-button"/>
    <home-button class="home-button"></home-button>
    <div class="container">
      <text-content title="ПОДДЕЛКА<br/>
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspЗАПРОСА"
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
    <img class="background-img" :src="require(`@/assets/img/background-img/csrf.svg`)" alt="csrf">
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
          description: 'На данной странице мы узнаем как защититься<br/>от подделки запроса CSRF и не потерять свои данные'
        },
        {
          description: '<b class="strong-text">1. Используйте фреймворки со встроенной защитой против CSRF,</b> например .NET. Также важно правильно настроить фреймворк. Если ваш фреймворк не имеет защиты от CSRF, вы можете использовать Anti-CSRF токены'
        },
        {
          description: '<b class="strong-text">2. Anti-CSRF токены</b> – способ защиты на сервере, где сервер создает случайный и уникальный токен для каждого пользователя, который используется для проверки каждого запроса'
        },
        {
          description: '<b class="strong-text">3. Использование двух токенов:</b> смысл этого метода в том, что используются два токена: первый сохраняется в cookies, а второй – в одном из параметров ответа. В таком случае сервер, получая один из небезопасных запросов, должен проверить оба токена'
        },
        {
          description: '<b class="strong-text">4. Использование флага Same-Site в сookies</b> позволяет пометить куки для определенного домена. Таким образом проверяется источник запроса, и его не получится выполнить с мошеннического сайта'
        },
        {
          description: '<b class="strong-text">5. Подтверждение пользователя:</b> для особо важных действий, вроде перевода денег или смены пароля, требуйте дополнительное действие от пользователя (ввод капчи или кода подтверждения)'
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
  width: 60vh;
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
