<script>

import AnonymousModal from "@/components/UI/AnonymousModal.vue";
import {defineComponent, ref} from "vue";
import SecondaryButton from "@/components/UI/SecondaryButton.vue";

export default defineComponent({
  setup() {
    const notificationText = ref(`<p>Существует множество программ, способных организовать DDoS-атаку. Но здесь мы разберём один способ, позволяюший организовать упрощённую атаку DoS без сторонних программ с помощью командной строки.</p>
              <p>Данный метод самый слабодейственный и долгий, но с помощью него удастся положить сайты с очень слабым сервером.
                Первым делом в командной строке узнаем пинг сайта, через команду:
                ping *название сайта* -t</p>`);


    return {
      notificationText,
      onEnter: (e) => {
        const regex = /^ping\s+(.*?)\s+-t$/;
        const numberOfPackets = 50;

        const terminalContent = document.querySelector(".terminal__content");
        const inputContainers = document.querySelectorAll(".terminal__input_container");
        const inputContainer = inputContainers[inputContainers.length - 1];

        const inputClone = inputContainer.cloneNode(true);

        const inputText = e.target.value;
        const isCorrectCommand = regex.test(inputText);

        terminalContent.insertBefore(inputClone, inputContainer);
        inputClone.querySelector("input").readOnly = true;
        e.target.value = "";

        if (isCorrectCommand) {
          let i = 0;

          const domain = inputText.match(regex)[1];
          inputContainer.style.display = "none";

          const intervalId = setInterval(() => {
            i++;
            const paragraph = document.createElement("p");
            paragraph.style.color = "white";
            paragraph.innerText = "64 bytes from 142.250.74.110: icmp_seq=0 ttl=111 time=116.314 ms";

            terminalContent.insertBefore(paragraph, inputContainer);

            terminalContent.scrollTo({top: terminalContent.scrollHeight});

            if (i === numberOfPackets) {
              clearInterval(intervalId);
              const finalParagraph = document.createElement("p");

              finalParagraph.style.color = "white";
              finalParagraph.innerText = `--- ${domain} ping statistics ---\n` +
                  `${numberOfPackets} packets transmitted, ${numberOfPackets} packets received, 0.0% packet loss\n` +
                  "round-trip min/avg/max/stddev = 31.807/41.095/48.346/5.333 ms"

              terminalContent.insertBefore(finalParagraph, inputContainer);

              inputContainer.style.display = "flex";
              terminalContent.scrollTo({top: terminalContent.scrollHeight});
              notificationText.value = "<p>С помощью ping отправляются пакеты данных на указанный сервер.<p/>" +
                  "<p>Сервер не успевает обрабатывать эти пакеты, и это приводит к перегрузке и падению производительности сети, вследствие чего" +
                  " сервисы, предоставляемые сервером, становятся недоступны.<p/>" +
                  "<p>При DDoS-атаке пингуют сервер не с одного компьютера, а используют заражённые сети нескольких компьютеров (ботнеты).<p/>"
            }
          }, 100);
        } else {
          const paragraph = document.createElement("p");
          paragraph.style.color = "white";
          paragraph.innerText = "Команда введена неверно";

          terminalContent.insertBefore(paragraph, inputContainer);

          terminalContent.scrollTo({top: terminalContent.scrollHeight});
        }
      }
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
    <anonymous-modal :text-message=notificationText></anonymous-modal>
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
