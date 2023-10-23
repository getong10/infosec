<template>
  <div class="vk_container">
    <div class="vk_header">
      <div class="vk_logo">
        <img
          src="@/assets/img/VK.svg"
          alt="VS"
        />
        <p style="font-size: 2vw">ВСети</p>
      </div>
      <button class="vk_btn">Регистрация</button>
    </div>

    <div class="vk_content">
      <p style="font-size: 1.3vw">ОБСУЖДЕНИЕ</p>
      <p style="font-size: 2vw">«Помогите сделать дз»</p>
    </div>
  </div>
  <anonymous-modal text-message="Сейчас Вы будете в роли хакера, который хочет заполучить данные аккаунта у Василия Пупкина.
                                   <br /> <br />Для начала перейдите на страницу регистрации."></anonymous-modal>
</template>

<script>

export default {
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
.vk_container {
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(237, 237, 239, 1);
}

.vk_header {
  width: 100vw;
  height: 10vh;
  background-color: #FFFFFF;
  box-shadow: 0 0.5vh 0.5vh 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vw 0 4vw;
}

.vk_content {
  padding: 3vw 0 0 4vw;
}

img {
  z-index: 150;
  height: 6vh;
}

.vk_btn {
  background-color: rgba(237, 237, 239, 1);
  font-size: 1.3vw;
  border-radius: 1vw;
  padding: 0.5vw 4vw;
}

.vk_logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>