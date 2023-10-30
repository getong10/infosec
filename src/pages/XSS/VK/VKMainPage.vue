<template>
  <div class="vk__container">
    <div class="vk__header">
      <div class="vk__logo" @click="$router.push(`/xss`)">
        <img
          src="@/assets/img/VK.svg"
          alt="VS"
        />
        <p style="font-size: 2vw; margin-left: 0.7vw">ВСети</p>
      </div>
      <button
        class="vk__btn"
        v-if="isAuth"
      >
        {{ username.substring(0, 10) + '...' }}
      </button>
      <button
        v-else
        class="vk__btn"
        @click="$router.push(`/vsregictration`)"
      >
        Регистрация
      </button>
    </div>

    <div class="vk__content">
      <p style="font-size: 1.3vw">ОБСУЖДЕНИЕ</p>
      <p style="font-size: 2vw">«Помогите сделать дз»</p>
      <div class="vk__user">
        <img
          src="@/assets/img/pypka.png"
          alt="VS"
          style="border-radius: 50%; border: 0.1vw solid rgba(49, 54, 172, 1);"
        />
        <p style="margin-left: 1vw; color: rgba(49, 54, 172, 1);">Василий Пупкин</p>
      </div>
      <p style="padding-top: 1vw;">Не могу решить уравнение по алгебре: <br /> cos(5x) = 1</p>
      <textarea class="vk__comment" autocomplete="off" placeholder="Введите текст..." v-if="isAuth"/>
      <textarea class="vk__comment" autocomplete="off" placeholder="Введите текст..." v-else disabled/>
      <button
          class="vk__btn"
          style="background: rgba(49, 54, 172, 1); color: #FFFFFF; margin-top: 2vw;"
          v-if="isAuth"
      >
        Отправить
      </button>
    </div>
    <anonymous-modal text-message="Для того чтобы скрипт встроился в страницу
                                  с общим доступом, необходимо отправить
                                  сообщение под “заражённым” именем"
      v-if="isAuth"
    ></anonymous-modal>
    <anonymous-modal text-message="Сейчас Вы будете в роли хакера, который хочет заполучить данные аккаунта у Василия Пупкина.
                                   <br /> <br />Для начала перейдите на страницу регистрации."
      v-else
    ></anonymous-modal>
  </div>
</template>

<script>

import AnonymousModal from "@/components/UI/AnonymousModal.vue";

export default {
  components: {AnonymousModal},
  data() {
    return {
      username: '',
      isAuth: false
    }
  },
  mounted() {
      if (sessionStorage.getItem('username') !== null) {
        this.isAuth = true;
        this.username = sessionStorage.getItem('username');
    }
  }
}
</script>

<style scoped>
.vk__container {
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(237, 237, 239, 1);
}

.vk__header {
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

.vk__content {
  padding: 3vw 0 0 4vw;
}

img {
  z-index: 150;
  height: 6vh;
}

.vk__btn {
  background-color: rgba(237, 237, 239, 1);
  font-size: 1.3vw;
  border-radius: 0.7vw;
  padding: 0.5vw 4vw;
  border: none;
  cursor: pointer;
}

.vk__logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.vk__user {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4vw;
}

.vk__comment {
  width: calc(100% - 4vw);
  height: 10vh;
  border: none;
  border-radius: 1vw;
  margin-top: 2vw;
  padding: 1vw 0 0 2vw;
  background-color: white;
  resize: none;
}

.vk__comment:focus {
  outline: 0.1vw solid rgba(49, 54, 172, 1);
}
</style>