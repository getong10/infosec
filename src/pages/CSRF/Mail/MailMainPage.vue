<template>
  <div class="mail__container">
    <div class="mail__header">
      <div style="display: flex;align-items: center;">
        <div class="mail__logo" @click="$router.push('/csrf')">
          <img src="/assets/img/mail.svg" alt="@ЭЛПОЧТА.РФ">
        </div>
        <div class="mail__letter">
          <div class="mail__notification__counter">
            {{ messages.filter(e => !e.check).length }}
          </div>
          <div class="mail__letter__text">
            Письмо
          </div>
        </div>
      </div>
      <div class="mail__username__header">
        Василий
      </div>
    </div>
    <div class="mail__content">
      <div class="mail__dialogs">
        <div class="mail__dialogs__item"
             @click="this.filteredMessages = this.messages.filter((item) => item.type === 'incoming')">
          <img src="/assets/img/textSMS.svg" alt="textSMS" style="width: 2.5vw">
          <span style="color:rgba(40, 77, 209, 1); padding-left: 1vw">Входящие</span>
          <span v-if="messages.filter(e => !e.check).length !== 0"
                style="color:rgba(40, 77, 209, 1); margin-left: auto">{{
              messages.filter(e => !e.check).length
            }}</span>
        </div>
        <div class="mail__dialogs__item"
             @click="this.filteredMessages = this.messages.filter((item) => item.type === 'sent')">
          <img src="/assets/img/sendSMS.svg" alt="sendSMS" style="width: 2.5vw">
          <span style="color:rgba(40, 77, 209, 1); padding-left: 1vw">Отправленные</span>
        </div>
      </div>

      <div class="mail__messages">
        <div
            :class="{'mail__messages__item_stretch': mes.stretch, 'mail__messages__item': true}"
            v-for="mes in filteredMessages"
            :key="mes.id"
        >
          <div
              class="mail__messages__item-header"
              @click="isCheckedMessages(mes)"
          >
            <div class="mail__dialogs__item_label">
              <div class="mail__messages__item__check">
                <div :style="{opacity: mes.check ? '0' : '1'}" class="mail__messages__item__notification"></div>
              </div>
              <img :src=mes.src :alt=mes.name style="width: 3vw; margin-right: 1vw">
              <span :class="{'text-is-checked': mes.check, 'text-is-not-checked': !mes.check}"
                    style="margin-right: 3vw">{{
                  mes.name
                }}</span>
            </div>
            <span :class="{'text-is-checked': mes.check, 'text-is-not-checked': !mes.check}">{{ mes.topic }}</span>
          </div>
          <div class="mail__dialogs__item-content" v-if=!mes.isTarget>
            <p>{{ mes.text }}</p>
          </div>
          <div class="mail__dialogs__item-content" v-if=mes.isTarget>
            <p>Заполните анкету!</p>
            <p>Перейди по ссылке для заполнения анкеты: <span @click='$router.push(`/serviceAssessment`)'>
              http://ankets.net
            </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <secondary-button @click='$router.push(`/csrf`)' svg-prop="Home.svg">Вернуться на главную</secondary-button>
    <anonymous-modal :text-message=notificationText>
    </anonymous-modal>
  </div>
</template>

<script>
import AnonymousModal from "@/components/UI/AnonymousModal.vue";
import SecondaryButton from "@/components/UI/SecondaryButton.vue";
import {actionNotification, initialNotification} from "@/pages/CSRF/text";
import {ref} from "vue";

export default {
  components: {SecondaryButton, AnonymousModal},
  mounted() {
    this.filteredMessages = this.messages.filter((item) => item.type === 'incoming');
  },
  data(){

    return {
      messages: [
        {
          id: Date.now(),
          src: '/assets/img/anekdot.svg',
          name: 'anekdot.ru',
          topic: 'Новые анекдоты для Вашей улыбки на...',
          text: 'TEXT MESSAGES',
          check: true,
          type: 'incoming',
        },
        {
          id: Date.now(),
          src: '/assets/img/anketa.svg',
          name: 'anketa.ru',
          topic: 'Заполните анкету!',
          text: "TEXT MESSAGES",
          type: 'incoming',
          isTarget: true,
        },
        {
          id: Date.now(),
          src: '/assets/img/pesni.svg',
          name: 'pesni.com',
          topic: 'С Днём Рождения! ',
          text: 'TEXT MESSAGES',
          check: true,
          type: 'incoming',
        },
      ],
      filteredMessages: [],
    }
  },
  setup() {
    const notificationText = ref(initialNotification);

    return {
      notificationText,
      isCheckedMessages(mes) {
        mes.stretch = !mes.stretch;

        if (mes.check) return;
        if (mes.isTarget) notificationText.value = actionNotification;

        mes.check = true;
      },
    }
  },
}
</script>

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

.mail__letter {
  height: 10vh;
  width: 10vw;
  background-color: rgba(21, 18, 171, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mail__letter__text {
  color: white;
  font-size: 2.5vh;
  font-weight: 400;
  position: fixed;

}

.mail__notification__counter {
  width: 1.2vw;
  height: 1.2vw;
  border-radius: 1vw;
  background-color: rgba(248, 134, 0, 1);
  align-self: flex-end;
  margin: 0 1.2vw 1.8vw 0;
  color: white;
  font-weight: 400;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mail__username__header {
  color: white;
  font-size: 2.5vh;
  font-weight: 400;

}

.mail__content {
  padding: 3vw 4vw 0 4vw;
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.mail__dialogs__item {
  display: flex;
  align-items: center;
  margin: 0 4vw 2vh 0;
  width: auto;
  height: 7vh;
  border-radius: 2vh;
  background-color: rgba(217, 217, 217, 1);
  cursor: pointer;
  padding: 0 1vw 0 1vw;
}

.mail__messages {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mail__messages__item {
  display: flex;
  flex-direction: column;
  border-radius: 2vh;
  background-color: rgba(217, 217, 217, 1);
  padding: 0 1vw 0 1vw;
}

.mail__messages__item_stretch {
  display: flex;
  height: 30vh;
  align-items: start;
  border-radius: 2vh;
  padding: 2vw;
}

.mail__messages__item-header {
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 2fr;
  cursor: pointer;
  width: 100%;
  height: 7vh;
}

.mail__dialogs__item_label {
  display: flex;
  align-items: center;
}

.mail__messages__item_stretch .mail__dialogs__item-content {
  display: block;
  margin-top: 2vh;
}

.mail__messages__item_stretch .mail__messages__item__check {
  display: none;
}

.mail__dialogs__item-content {
  font-size: 16px;
  display: none;
}

.mail__dialogs__item-content p {
  color: #284DD1;
  font-weight: 400;
  font-size: 16px;
}

.mail__dialogs__item-content span {
  cursor: pointer;
  color: #284DD1;
  font-weight: 700;
  font-size: 18px;
}

.mail__messages__item__check {
  display: flex;
  align-items: center;
  padding: 0 0.5vw 0 0;
}

.mail__messages__item__notification {
  width: 0.5vw;
  height: 0.5vw;
  background-color: rgba(40, 77, 210, 1);
  border-radius: 1vw;
  margin-left: 0.5vw;
}
</style>
