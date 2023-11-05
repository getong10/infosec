<script>

import AnonymousModal from "@/components/UI/AnonymousModal.vue";
import {defineComponent} from "vue";
import SecondaryButton from "@/components/UI/SecondaryButton.vue";

export default defineComponent({

  data: function () {
    return {};
  },
  methods: {
    onEnter: (e) => {
      const commands = {
        "print user": "User Name",
        "hello": "Hi from terminal",
      };


      const terminalContent = document.querySelector(".terminal__content");
      const inputContainer = document.querySelector(".terminal__input_container");
      const paragraph = document.createElement("p");
      paragraph.style.color = "white";
      paragraph.innerText = commands[e.target.value] ?? "Команда введена неверно";

      e.target.value = "";

      terminalContent.insertBefore(paragraph, inputContainer);
      terminalContent.scrollTo({top: terminalContent.scrollHeight});
    }
  },
  components: {SecondaryButton, AnonymousModal}
})
</script>

<template>
  <div class="terminal_container">
    <div class="terminal">
      <div class="terminal__header">
        <div class="terminal__icon"/>
        <div class="terminal__title">
          Administrator: Emulator Command Prompt
        </div>
      </div>
      <div
          class="terminal__content"
      >
        <div class="terminal__greeting">
          <p>This is command prompt emulator [Version 1.0.102.1]</p>
          <p>(c) 2023 EPI41 Corp. All rights don’t reserved.</p>
        </div>

        <div class="terminal__input_container">
          <div class="terminal__input_prefix">
            C:\VINDOVS\system256>
          </div>
          <input
              placeholder="*сюда вводить команду*"
              type="text"
              v-on:keyup.enter="onEnter"
          >
        </div>
      </div>
    </div>

    <secondary-button @click='$router.push(`/menu`)' svg-prop="Home.svg">Вернуться на главную</secondary-button>
    <anonymous-modal text-message="<p>Существует множество программ, способных организовать DDoS-атаку. Но здесь мы разберём один способ, позволяюший организовать упрощённую атаку DoS без сторонних программ с помощью командной строки.</p>
              <p>Данный метод самый слабодейственный и долгий, но с помощью него удастся положить сайты с очень слабым сервером.
                Первым делом в командной строке узнаем пинг сайта, через команду:
                ping *название сайта* -t</p>"></anonymous-modal>
  </div>
</template>


<style scoped>
.terminal_container {
  margin: 40px 60px;
}

.terminal {
  font-size: 20px;
  max-width: 1100px;
}

.terminal__icon {
  width: 45px;
  height: 30px;
  margin-right: 14px;
  border: solid 4px #888888;
  background: black;
}

.terminal__title {
  color: black;
}

.terminal__input_container {
  display: flex;
  width: 100%;
}

.terminal__input_container input {
  width: 100%;
  font-size: 20px;
  color: white;
  background: transparent;
  border: none;
  outline: none;
}

.terminal__input_prefix {
  color: white;
}

.terminal__greeting {
  padding-top: 25px;
  margin-bottom: 40px;
}

.terminal__greeting p {
  color: white;
}

.terminal__header {
  background: #D9D9D9;
  display: flex;
  align-items: center;
  padding: 8px;
  height: 45px;
}

.terminal__content {
  background: black;
  height: 420px;
  padding-left: 18px;
  overflow-y: scroll;
}

.terminal__content p {
  color: white;
}

.terminal__content::-webkit-scrollbar {
  width: 0;
  background: transparent;
}
</style>
