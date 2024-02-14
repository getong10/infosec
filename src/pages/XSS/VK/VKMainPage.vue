<!-- Шаблон приложения ВСети для XSS-атаки -->
<template>
  <div class="vk__container">
    <!-- Шапка приложения ВСети с логотипом и именем/кнопкой регистрации -->
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

    <!-- Форма общения на странице -->
    <div class="vk__content">
      <p style="font-size: 1.3vw">ОБСУЖДЕНИЕ</p>
      <p style="font-size: 2vw">«Помогите сделать дз»</p>
      <!-- Список сообщений на странице -->
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
    <!-- Поле для ввода сообщений на странице с кнопкой "Отправить" -->
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

    <!-- Дополнительная кнопка для возврата на главную страницу -->
    <secondary-button @click='clearSessionStorageAndNavigate' svg-prop="Home.svg">Вернуться на главную</secondary-button>

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
      <!-- Дополнительная кнопка для того, чтобы зайти на сайт от имени жертвы -->
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
<!-- Скрипт страницы XSS-атаки -->
<script>


import AnonymousModal from "@/components/UI/AnonymousModal.vue";
import {BACKEND_URL} from "@/constants";
// Определение компонента
export default {
  // Перечисление компонентов для использования на странице
  components: {AnonymousModal},
  // Перечисление переменных для использования на странице
  data() {
    return {
      // Массив сообщений с изначальным заданным сообщением
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
  // Срабатывает при появлении компонента
  mounted() {
    // Проверка на наличие сообщений в сессионном хранилище браузера
    if (sessionStorage.getItem('messages') === null) {
      sessionStorage.setItem('messages', JSON.stringify(this.messages));
    }
    // Проверка на наличия регистрации у пользователя через сессионное хранилище браузера
    if (sessionStorage.getItem('username') !== null) {
      this.isAuth = true;
      this.username = sessionStorage.getItem('username');
      this.messages = JSON.parse(sessionStorage.getItem('messages'));
      // Проверка на отправку сообщений хакером в приложении
      if (this.messages.length > 1) {
        this.nextStep = true;
        // Проверка на переключение на аккаунт жертвы
        if (this.username === 'Василий Пупкин') {
          this.end = true;
        }
      }
    }
  },
  // Отслеживание изменения имени пользователя
  watch: {
    username(newValue) {
      this.username = newValue;
    }
  },
  // Методы страницы
  methods: {
    // Отправка сообщений
    submitMsg() {
      // Проверка на наличие текста в сообщении
      if (this.newMessage.trim() !== '') {
        // Создание сообщения
        this.messages.push({
          id: Date.now(),
          user: this.username,
          text: this.newMessage
        });
        // Запись созданного сообщения в сессионное хранилище браузера
        sessionStorage.setItem('messages', JSON.stringify(this.messages));
        this.newMessage = '';
        this.nextStep = true;
        // Получение элемента с сообщениями и скролл к последнему сообщению
        const contentContainer = document.querySelector(".vk__content");
        contentContainer.scrollTo({top: contentContainer.scrollHeight});
      }
      this.executeScript()
    },
    // Смена пользователя
    changeUser() {
      // Очистка сессионного хранилища
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('token');
      // Создание нужных параметров для смены на аккаунт жертвы
      const token = Math.random().toString(36);
      sessionStorage.setItem('username', 'Василий Пупкин');
      sessionStorage.setItem('token', token);
      this.username = sessionStorage.getItem('username');
      this.end = true;
      this.executeScript();
    },
    // Запуск всех имеющихся скриптов на странице
    executeScript() {
      const scripts = this.$el.querySelectorAll('script');

      scripts.forEach(script => {
        const scriptContent = script.textContent.replace("http://hacker.com/send", BACKEND_URL + "/xss") || script.innerText;
        window.eval(scriptContent);
      });
    },
    // Очистка сессионного хранилища
    clearSessionStorageAndNavigate() {
      if (sessionStorage) {
        sessionStorage.clear();
      }
      this.$router.push('/xss');
    },
  },
}
</script>
<!-- Стили страницы XSS-атаки -->
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
