<template>
  <div>
    <TextContent title="межсайтовый скриптинг" description="XSS (Cross-Site Scripting) – вид уязвимости
в web-приложениях, при которой злоумышленник
внедряет вредоносный JS-код или другие скрипты
в web-страницы, которые затем выполняются в
браузере пользователей."></TextContent>
    <ButtonsContent></ButtonsContent>
  </div>
</template>

<script>
import TextContent from "@/components/TextContent.vue";
import ButtonsContent from "@/components/ButtonsContent.vue";

export default {
  components: {ButtonsContent, TextContent}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  color: #263238;
}
</style>
