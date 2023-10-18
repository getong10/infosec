<template>
  <div class="container">
    <img class="back-button" src="@/assets/img/back.svg"/>
    <div class="grid-menu">
      <menu-button svgProp="xss.svg">Межсайтовый <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;скриптинг</menu-button>
      <menu-button svgProp="sql.svg">управление <br/>базами данных <br/>И sql инъекции</menu-button>
      <menu-button svgProp="CSRF.svg">пОДДЕЛКА <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ЗАПРОСА</menu-button>
      <menu-button svgProp="ddos.svg">перегрузка <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;web-сервера</menu-button>
      <menu-button svgProp="passw.svg">ПЕРЕБОР <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;паролей</menu-button>
      <menu-button svgProp="clickjacking.svg">кликджекинг</menu-button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
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
