<template>
  <div>
    <div class="container">
      <text-content title="ИНФОБЕЗ<br/>&nbsp;&nbsp;&nbsp;&nbsp;WEB-СИСТЕМ"
                    description="Защити свой сайт от уязвимостей<br/>и внешних угроз"></text-content>
      <white-button
          @click="$router.push(`/menu`)"
          style="margin-left: 40vw"
          >Начать ➝</white-button>
    </div>
    <img src="/assets/img/background-img/main-hacker-bro.svg" alt="hacker-background-image">

    <img src="/assets/info.svg" alt="info" class="info_button" @click="openModal">
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div class="modal-container" @click.stop="">
        <div class="modal-header">
          <img src="/assets/img/exit.svg" alt="Close" @click="closeModal" class="close_button"/>
        </div>
        <div class="modal-content">
          <h1>Дисклеймер</h1>
          <br/>
          <p style="font-size: 1.5em">
            Это обучающее приложение предназначено исключительно для образовательных целей и предоставляет практические уроки по веб-безопасности.
            <br/>
            <br/>

            В ходе использования приложения, где представлены типы атак, их воспроизведение и методы защиты, пользователи обязаны соблюдать законы и этические стандарты. Пользователям рекомендуется использовать полученные знания и умения <strong class="strong">исключительно</strong> в разрешенных обстоятельствах, таких как тестирование собственных веб-приложений или с согласия владельцев систем.
            <br/>
            <br/>
            Разработчики, создавшие это приложение, не несут ответственности за любое неправомерное использование полученных знаний или умений в целях атаки, вмешательства в работу реальных систем или осуществления каких-либо деструктивных действий.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextContent from "@/components/TextContent.vue";
import WhiteButton from "@/components/UI/WhiteButton.vue";

export default {
  components: {WhiteButton, TextContent},
  data() {
    return {
      isModalOpen: false,
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 5vh;
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  z-index: 10;
}
img {
  width: 70vh;
  position: absolute;
  right: -5%;
  bottom: -5%;
  z-index: 5;
}

.info_button {
  position: absolute;
  right: 1vw;
  bottom: 2vw;
  width: 3vw;
  cursor: pointer;
  box-shadow: #B535B8;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal-container {
  background-color: #fff;
  width: 50vw;
  height: 50vh;
  border-radius: 1vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-header {
  background-color: #f0f0f0;
  height: 5vh;
  display: flex;
  justify-content: flex-end;
}

.close_button {
  position: relative;
  cursor: pointer;
  width: 5vw;
  margin: 1vh 1.5vw 1vh 1vh;
}

.modal-content {
  overflow-y: auto;
  padding: 1vw;
}
</style>
