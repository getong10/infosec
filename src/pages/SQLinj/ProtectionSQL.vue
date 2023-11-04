<template>
  <div>
    <img class="back-button" src="/assets/img/back.svg" @click="$router.push('/sql')" alt="back-button"/>
    <home-button class="home-button"></home-button>
    <div class="container">
      <text-content
          title="УПРАВЛЕНИЕ БД
        <br/>&nbsp&nbspИ SQL-ИНЪЕКЦИИ"
          :description="descriptionTypes[state].description"></text-content>
      <div v-if="state===0">
        <white-button
            style="margin-left: 40vw;"
            @click="addState()">Узнать ➝</white-button>
      </div>
      <div class="button-container" v-if="state !== 0">
        <white-button
            style="margin-left: -10vw"
            @click="backState">Назад</white-button>
        <white-button
            v-if="state !== descriptionTypes.length-1"
            style="margin-left: 3vw;"
            @click="addState">Далее</white-button>
        <white-button
            v-if="state === descriptionTypes.length-1"
            style="margin-left: 3vw;"
            @click="nullState">В начало</white-button>
      </div>
    </div>
    <img class="background-img" :src="`/assets/img/background-img/sql.svg`" alt="sql">
  </div>
</template>

<script>
import TextContent from "@/components/TextContent.vue";
import HomeButton from "@/components/UI/HomeButton.vue";

export default {
  components: {HomeButton, TextContent},
  data() {
    return {
      state: 0,
      descriptionTypes: [
        {
          description: 'На данной странице мы узнаем как защитить <br/>свою базу данных от потери конфиденциальной информации'
        },
        {
          description: '<b class="strong-text">1. Администрирование баз данных</b> включает в себя<br/> управление доступом, мониторинг, резервное копирование и восстановление данных, обновление и патчинг системы управления базами данных (СУБД)'
        },
        {
          description: '<b class="strong-text">2. Использование параметризованных запросов</b> позволяет обрабатывать данные, введенные пользователем, как параметры,<br/> а не как часть SQL-кода'
        },
        {
          description: '<b class="strong-text">3. Проверка и валидация введённых данных</b> позволяет удостовериться, что введенная информация соответствует ожиданиям и не содержит вредоносных или некорректных данных'
        },
        {
          description: '<b class="strong-text">4. Принцип минимальных привилегий (Least Privilege)</b> предписывает предоставлять пользователям и приложениям только те права доступа к базе данных, которые им действительно необходимы'
        },
        {
          description: '<b class="strong-text">5. ORM</b> – это технология, которая позволяет взаимодействовать с базой данных через объектно-ориентированный код, а не непосредственно через SQL'
        },
      ],
    }
  },
  methods: {
    addState() {
      this.state = ++this.state
    },
    backState() {
      this.state = --this.state
    },
    nullState() {
      this.state = 0
    }
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
  z-index: 1;
}
.background-img {
  width: 60vh;
  position: absolute;
  right: -5%;
  bottom: -5%;
  z-index: 0;
}
.home-button {
  position: absolute;
  right: 5%;
  top: 5%;
}
.back-button {
  position: absolute;
  left: 5%;
  top: 7%;
  cursor: pointer;
  height: 6vh;
}
.button-container {
  display: flex;
  justify-content: center;
}
</style>
