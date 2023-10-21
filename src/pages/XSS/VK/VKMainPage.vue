<template>
  <div class="container">
    <div class="header">
      <p style="font-size: 2vw">ВСети</p>
      <!-- ЗДЕСЯ БУДЕТ ФОТОКАРТОЧКА -->
      <!-- ЗДЕСЯ БУДЕТ КНОПОЧКА -->
    </div>

    <div class="content">
      <p style="font-size: 1.3vw">ОБСУЖДЕНИЕ</p>
      <p style="font-size: 2vw">«Помогите сделать дз»</p>

    </div>
  </div>
  <!--<anonymous-modal text-message="Сейчас Вы будете в роли хакера, который хочет заполучить данные аккаунта у Василия Пупкина.
                                   <br /> <br />Для начала перейдите на страницу регистрации."></anonymous-modal>-->
</template>

<script>
// import AnonymousModal from "@/components/UI/AnonymousModal.vue";

export default {
  // components: {AnonymousModal},
  /* НУЖНА ФУНКЦИЯ isAuth ЧТОБ ПРОВЕРЯТЬ ЗАРЕГИСТРИРОВАН ЛИ ПОЛЬЗОВАТЕЛЬ
    ЧТОБ СДЕЛАТЬ ПОЛЕ ВВОДА АКТИВНЫМ И В КНОПКУ "РЕГИСТРАЦИЯ" БУДЕТ ПЕРЕДАВАТЬСЯ
    ЮЗЕРНЕЙМ ЗАРЕГИСТРИРОВАННОГО ПОЛЬЗОВАТЕЛЯ
  */
  methods: {
    isAuth() {
      // your code here
    }
  }
}
</script>

<style scoped>
.container {
  background-color: rgba(237, 239, 239, 1);
  width: 100vw;
  height: 100vh;
}

.header {
  width: 100vw;
  height: 10vh;
  background-color: #FFFFFF;
  box-shadow: 0 0.5vh 0.5vh 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 4vw 0 4vw;
}

.content {
  padding: 3vw 0 0 4vw;
}


</style>