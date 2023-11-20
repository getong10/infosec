<template>
  <div class="mail__container">
    <div class="mail__header">
      <div style="display: flex;align-items: center;">
        <div class="mail__logo" @click="$router.push('/csrf')">
          <img src="/assets/img/mail.svg" alt="@ЭЛПОЧТА.РФ">
        </div>
        <div class="mail__letter">
          <div class="mail__notification__counter">
            {{ notific }}
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
        <div class="mail__dialogs__item" @click="this.filteredMessages = this.messages.filter((item) => item.type === 'incoming')">
          <img src="/assets/img/textSMS.svg" alt="textSMS" style="width: 2.5vw">
          <span style="color:rgba(40, 77, 209, 1); padding-left: 1vw">Входящие</span>
          <span v-if="notific !== 0" style="color:rgba(40, 77, 209, 1); margin-left: auto">{{ notific }}</span>
        </div>
        <div class="mail__dialogs__item" @click="this.filteredMessages = this.messages.filter((item) => item.type === 'sent')">
          <img src="/assets/img/sendSMS.svg" alt="sendSMS" style="width: 2.5vw">
          <span style="color:rgba(40, 77, 209, 1); padding-left: 1vw">Отправленные</span>
        </div>
      </div>

      <div class="mail__messages">
        <div :class="{'mail__messages__item__stretch': mes.stretch, 'mail__messages__item': !mes.stretch}"
             v-for="mes in filteredMessages"
             :key="mes.id"
             @click="mes.check = true; isCheckedMessages(mes)"
        >
          <div class="mail__messages__item__check">
            <input type="checkbox" style="outline: none;"/>
            <div :style="{opacity: mes.check ? '0' : '1'}" class="mail__messages__item__notification"></div>
          </div>
          <img :src=mes.src :alt=mes.name style="width: 3vw; margin-right: 1vw">
          <span :class="{'text-is-checked': mes.check, 'text-is-not-checked': !mes.check}" style="margin-right: 3vw">{{ mes.name }}</span>
          <span :class="{'text-is-checked': mes.check, 'text-is-not-checked': !mes.check}">{{ mes.message }}</span>
        </div>
      </div>
    </div>
    <anonymous-modal text-message="Сейчас Вы в роли жертвы.
                                   <br /><br />Вы залогинены на сайте элпочта.рф. У Вас есть сессия в cookies (фрагменты данных о сайте, сохранённые в памяти).
                                   <br /><br />Хакер создал сайт с формой и отправил в виде анкеты. Откройте сообщение от anketa.ru">
    </anonymous-modal>
  </div>
</template>

<script>
import AnonymousModal from "@/components/UI/AnonymousModal.vue";

export default {
  components: {AnonymousModal},
  mounted() {
    this.filteredMessages = this.messages.filter((item) => item.type === 'incoming');
  },
  data() {
    return {
      notific: 3,
      messages: [
        {id: Date.now(), src: '/assets/img/anekdot.svg', name: 'anekdot.ru', message: 'TEXT MESSAGES', check: false, stretch: false, type: 'incoming'},
        {id: Date.now(), src: '/assets/img/anketa.svg', name: 'anketa.ru', message: 'TEXT MESSAGES', check: false, stretch: false, type: 'incoming'},
        {id: Date.now(), src: '/assets/img/pesni.svg', name: 'pesni.com', message: 'TEXT MESSAGES', check: false, stretch: false, type: 'incoming'},
      ],
      filteredMessages: [],
      checkedMessages: [],
      stretch: false,
    }
  },
  methods: {
    isCheckedMessages(mes) {
      if (!this.checkedMessages.includes(mes.name)) {
        this.checkedMessages.push(mes.name);
        mes.stretch = !mes.stretch;
        return --this.notific;
      } else {
        mes.stretch = !mes.stretch;
      }
    }
  }
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

.mail__messages__item {
  display: flex;
  align-items: center;
  margin: 0 0 2vh 0;
  width: auto;
  height: 7vh;
  border-radius: 2vh;
  background-color: rgba(217, 217, 217, 1);
  cursor: pointer;
  padding: 0 1vw 0 1vw;
}

.mail__messages__item__check {
  display: flex;
  flex-direction: row;
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

.mail__messages__item__stretch {
  display: flex;
  align-items: start;
  margin: 0 0 2vh 0;
  width: auto;
  height: 40vh;
  border-radius: 2vh;
  background-color: rgba(217, 217, 217, 1);
  cursor: pointer;
  padding: 2vw 0.5vw 2vw 0.5vw;
}
</style>
