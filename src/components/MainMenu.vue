<template>
  <div class="container">
    <div class="grid-menu">
      <menu-button :svgProp="svgXSS">Межсайтовый скриптинг</menu-button>
      <menu-button :svgProp="svgSQL">управление базами данных И sql инъекции</menu-button>
      <menu-button :svgProp="svgCSRF">пОДДЕЛКА
        ЗАПРОСА</menu-button>
      <menu-button :svgProp="svgDDoS">перегрузка
        web-сервера</menu-button>
      <menu-button :svgProp="svgPass">ПЕРЕБОР
        паролей</menu-button>
      <menu-button :svgProp="svgClickjeking">кликджекинг</menu-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      svgXSS: '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 253 161" fill="none">\n' +
          '  <g clip-path="url(#clip0_573_206)">\n' +
          '    <path d="M116.49 143.132L51 117.669V102.306L116.49 76.8429V91.6369L56.5403 114.113V105.862L116.49 128.338V143.132Z" fill="white"/>\n' +
          '    <path d="M121.297 174L168.177 40H184.088L137.208 174H121.297Z" fill="white"/>\n' +
          '    <path d="M187.51 143.132V128.338L247.46 105.862V114.113L187.51 91.6369V76.8429L253 102.306V117.669L187.51 143.132Z" fill="white"/>\n' +
          '  </g>\n' +
          '  <defs>\n' +
          '    <clipPath id="clip0_573_206">\n' +
          '      <rect width="253" height="161" rx="38" fill="white"/>\n' +
          '    </clipPath>\n' +
          '  </defs>\n' +
          '</svg>',
      svgSQL: '',
      svgCSRF: '',
      svgDDoS: '',
      svgPass: '',
      svgClickjeking: '',
    }
  }
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
</style>
