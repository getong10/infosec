<template>
  <div>
    <TextContent title="XSSSS" description="XSS isss..."></TextContent>
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
