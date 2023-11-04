<template>
  <div>
    <img class="back-button" src="/assets/img/back.svg" @click="$router.push('/passwordAttack')" alt="back-button"/>
    <home-button class="home-button"></home-button>
    <div class="container">
      <text-content title="ПЕРЕБОР<br/>
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbspПАРОЛЕЙ"
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
    <img class="background-img" :src="`/assets/img/background-img/passw.svg`" alt="*******(не мат)">
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
          description: 'На данной странице мы узнаем как предотвратить несанкционированный доступ к аккаунтам пользователей'
        },
        {
          description: '<b class="strong-text">1. Использование сложных паролей.</b> Сделать ввод паролей для пользователей, которые содержат комбинации больших и маленьких букв, цифр и специальных символов. Рекомендуйте пароли длиной не менее 12 символов.'
        },
        {
          description: '<b class="strong-text">2. Двухфакторная аутентификация (2FA),</b> которая требует не только знания пароля, но и наличие дополнительного инструмента подтверждения, такого как мобильное приложение или SMS-код, для подтверждения личности.'
        },
        {
          description: '<b class="strong-text">3. Установка ограничения на количество неудачных попыток входа и введение задержки после неудачной попытки входа.</b> Если пользователь превышает это количество, его аккаунт должен быть заблокирован на некоторое время.'
        },
        {
          description: '<b class="strong-text">4. Хранение паролей в хэшированной форме</b> с использованием криптографических алгоритмов (bcrypt, Scrypt, Argon2). Добавление уникальной “соли” (случайное значение) к каждому паролю перед хэшированием.'
        },
        {
          description: '<b class="strong-text">5. Введение запрета</b> на использование очевидных паролей, таких как "пароль" или "123456", а также пароли из известные словарей.'
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
  width: 100vh;
  position: absolute;
  right: -5vw;
  bottom: 10vh;
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
