<!-- Шаблон главного меню приложения -->
<template>
  <div class="container">
    <img class="back-button" src="/assets/img/back.svg" @click="$router.push('/')"/>
    <div class="grid-menu">
      <menu-button svgProp="xss.svg" link="xss">Межсайтовый <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;скриптинг</menu-button>
      <menu-button svgProp="sql.svg" link="sql">управление <br/>базами данных <br/>И sql инъекции</menu-button>
      <menu-button svgProp="CSRF.svg" link="csrf">пОДДЕЛКА <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ЗАПРОСА</menu-button>
      <menu-button svgProp="ddos.svg" link="ddos">перегрузка <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;web-сервера</menu-button>
      <menu-button svgProp="passw.svg" link="passwordAttack">ПЕРЕБОР <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;паролей</menu-button>
      <menu-button svgProp="clickjacking.svg" link="clickjacking">кликджекинг</menu-button>
    </div>
  </div>
</template>
<!-- Скрипт для главного меню приложения с импоротом кнопки-пункта меню -->
<script>
import MenuButton from "@/components/UI/MenuButton.vue";

export default {
  components: {MenuButton}

}
</script>
<!-- Стили главного меню приложения -->
<style scoped>
* {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 100vw;
  height: 100vh;
}

.grid-menu {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 30vw);
}

.back-button {
  position: absolute;
  left: 5vw;
  top: 4vh;
  cursor: pointer;
  height: 6vh;
}
</style>
