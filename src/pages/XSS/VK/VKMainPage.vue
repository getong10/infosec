<template>
  <div class="vk__container">
    <div class="vk__header">
      <div class="vk__logo" @click="clearSessionStorageAndNavigate">
        <img
            src="/assets/img/VK.svg"
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
      <div
          v-for="message in messages"
          :key="message.id"
          style="max-width: 92vw"
      >
        <div class="vk__user">
          <img
              src="/assets/img/pypka.png"
              alt="VS"
              style="border-radius: 50%; border: 0.1vw solid rgba(49, 54, 172, 1);"
          />
          <p style="margin-left: 1vw; color: rgba(49, 54, 172, 1);" v-html="message.user"></p>
        </div>
        <p style="padding-top: 1vw; display: inline; word-wrap: break-word;">{{ message.text }}</p>
      </div>
    </div>
    <div style="margin-left: 4vw">
      <textarea
          class="vk__comment"
          autocomplete="off"
          placeholder="Введите текст..."
          v-if="isAuth"
          v-model="newMessage"
      />
      <textarea
          class="vk__comment"
          autocomplete="off"
          placeholder="Введите текст..."
          v-else disabled
      />
      <button
          class="vk__btn"
          style="background: rgba(49, 54, 172, 1); color: #FFFFFF; margin-top: 2vw;"
          v-if="isAuth"
          @click="submitMsg"
      >
        Отправить
      </button>
    </div>
    <secondary-button @click='endXSS(); $router.push(`/xss`)' svg-prop="Home.svg">Вернуться на главную</secondary-button>
    <anonymous-modal text-message="Для того чтобы скрипт встроился в страницу
                                  с общим доступом, необходимо отправить
                                  сообщение под “заражённым” именем"
                     v-if="isAuth && !nextStep && !end"
    ></anonymous-modal>
    <anonymous-modal text-message="<p>Сейчас Вы будете в роли хакера, который хочет заполучить данные аккаунта у Василия Пупкина.</p>
                                   <p>Для начала перейдите на страницу регистрации.</p>"
                     v-else-if="!isAuth && !nextStep && !end"
    ></anonymous-modal>
    <div v-else-if="isAuth && nextStep && !end">
      <secondary-button
          @click="changeUser"
          style="position: absolute; left: 21vw; bottom: 5vh"
      >
        Зайти на сайт от имени Василия Пупкина
      </secondary-button>
      <anonymous-modal
          text-message="Теперь, когда зарегистрированный пользователь зайдёт на эту страницу, к хакеру на сервер отправится его никнейм и токен (символьная последовательность, используемая для аутентификации и авторизации пользователя), с помощью которого возможно отправлять любые запросы на сайт от чужого имени."
      ></anonymous-modal>
    </div>
    <div v-else-if="end">
      <anonymous-modal
          text-message="Чтобы узнать какие данные отправились на сервер хакера, можете посмотреть в консоль разработчика (нажми правой кнопкой мыши, выбери пункт меню “Исследовать элемент”, открой вкладку Console)"
      ></anonymous-modal>
    </div>
  </div>
</template>

<script>


import AnonymousModal from "@/components/UI/AnonymousModal.vue";
import {BACKEND_URL} from "@/constants";

export default {
  components: {AnonymousModal},
  data() {
    return {
      messages: [
        {id: Date.now(), user: 'Василий Пупкин', text: 'Не могу решить уравнение по алгебре: \ncos(5x) = 1'},
      ],
      username: '',
      isAuth: false,
      newMessage: '',
      nextStep: false,
      end: false,
    }
  },
  mounted() {
    if (sessionStorage.getItem('messages') === null) {
      sessionStorage.setItem('messages', JSON.stringify(this.messages));
    }
    if (sessionStorage.getItem('username') !== null) {
      this.isAuth = true;
      this.username = sessionStorage.getItem('username');
      this.messages = JSON.parse(sessionStorage.getItem('messages'));
      if (this.messages.length > 1) {
        this.nextStep = true;
        if (this.username === 'Василий Пупкин') {
          this.end = true;
        }
      }
    }
  },
  watch: {
    username(newValue) {
      this.username = newValue;
    }
  },
  methods: {
    submitMsg() {
      if (this.newMessage.trim() !== '') {
        this.messages.push({
          id: Date.now(),
          user: this.username,
          text: this.newMessage
        });
        sessionStorage.setItem('messages', JSON.stringify(this.messages));
        this.newMessage = '';
        this.nextStep = true;

        const contentContainer = document.querySelector(".vk__content");
        contentContainer.scrollTo({top: contentContainer.scrollHeight});
      }
      this.executeScript()
    },
    changeUser() {
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('token');
      const token = Math.random().toString(36);
      sessionStorage.setItem('username', 'Василий Пупкин');
      sessionStorage.setItem('token', token);
      this.username = sessionStorage.getItem('username');
      this.end = true;
      this.executeScript();
    },
    executeScript() {
      const scripts = this.$el.querySelectorAll('script');

      scripts.forEach(script => {
        const scriptContent = script.textContent.replace("http://hacker.com/send", BACKEND_URL + "/xss") || script.innerText;
        window.eval(scriptContent);
      });
    },
    endXSS() {
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('messages');
    },
    clearSessionStorageAndNavigate() {
      if (sessionStorage) {
        sessionStorage.clear();
      }
      this.$router.push('/xss');
    },
  },
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
  max-height: 50vh;
  overflow-y: scroll;
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
  padding: 2vh 1vw;
  background-color: white;
  resize: none;
}

.vk__comment:focus {
  outline: 0.1vw solid rgba(49, 54, 172, 1);
}
</style>
