<script>
import AnonymousModal from "@/components/UI/AnonymousModal.vue";
import {ref} from "vue";
import {initialNotificationText, passwords} from "@/pages/PasswordAttacks/texts";
import Typewriter from 'typewriter-effect/dist/core';
import {shuffle} from "@/utils/shuffleArray";
import {useRouter} from "vue-router";

export default {
  components: {AnonymousModal},
  setup() {
    const notificationText = ref(initialNotificationText);
    const router = useRouter();

    return {
      notificationText,
      onLogin() {


        const emailInput = document.getElementById("emailInput");
        const passwordInput = document.getElementById("passwordInput");

        if (emailInput.value === "vpupka@elpochta.rf") {
          passwordInput.value = "";

          const typewriter = new Typewriter(passwordInput, {
            loop: true,
            autoStart: true,
            strings: shuffle(passwords),
            delay: 25,
            pauseFor: 100,
            onCreateTextNode(character) {
              passwordInput.value += character;
            },
            onRemoveNode() {
              passwordInput.value = passwordInput.value.slice(0, -1);
            }
          });

          setTimeout(() => {
            typewriter.stop();
            typewriter.autoStart = false;
            typewriter
                .typeString(passwords[Math.floor(Math.random() * passwords.length)])
                .callFunction(function () {
                      typewriter.stop();
                      setTimeout(() => router.push(`/startPasswordsHacking`), 1000);
                    }
                ).start();
          }, 973);
        }
      }
    }
  }
}
</script>


<template>
  <div class="mail__container">
    <div class="mail__header">
      <div style="display: flex;align-items: center;">
        <div class="mail__logo" @click="$router.push('/passwordAttack')">
          <img src="/assets/img/mail.svg" alt="@ЭЛПОЧТА.РФ">
        </div>
      </div>
    </div>

    <div class="mail__registration__form">
      <p style="font-size: 1.5vw; font-weight: 500">ВХОД</p>
      <input
          value="vpupka@elpochta.rf"
          id="emailInput"
          class="mail__registration__input"
          placeholder="E-mail"
          type="text"
      />
      <input
          id="passwordInput"
          class="mail__registration__input"
          placeholder="Пароль"
          type="text"
      />
      <button
          class="mail__registration__btn"
      >
        ВОЙТИ
      </button>
    </div>
    <anonymous-modal :text-message=notificationText>
    </anonymous-modal>
    <secondary-button
        @click="onLogin"
        style="position: absolute; left: 21vw; bottom: 5vh"
    >
      Запустить перебор
    </secondary-button>
  </div>
  <secondary-button @click='$router.push(`/passwordAttack`)' svg-prop="Home.svg">Вернуться на главную</secondary-button>
</template>


<style scoped>
.mail__container {
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(237, 237, 239, 1);
}

.mail__header {
  width: 100vw;
  height: 10vh;
  background-color: rgba(40, 77, 210, 1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vw 0 4vw;
}

.mail__logo {
  margin-right: 5vw;
  cursor: pointer;
}

.mail__registration__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100vw;
}

.mail__registration__input {
  width: 30vw;
  height: 5vh;
  padding-left: 1vw;
  border: none;
  margin-top: 2vh;
  border-radius: 0.7vw;
}

.mail__registration__input:focus {
  outline: 0.1vw solid rgba(40, 77, 210, 1);
}

.mail__registration__btn {
  font-size: 1.2vw;
  font-weight: 500;
  margin-top: 2vh;
  border: none;
  background-color: rgba(40, 77, 210, 1);
  color: white;
  width: 30vw;
  height: 5vh;
  cursor: pointer;
  border-radius: 0.7vw;
}
</style>
