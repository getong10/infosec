<template>
  <div>
    <img class="back-button" src="/assets/img/back.svg" @click="$router.push('/csrf')" alt="back-button" style="z-index: 100"/>
    <home-button class="home-button"></home-button>
    <div class="container">
      <text-content title="ПОДДЕЛКА<br/>
        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspЗАПРОСА"
                    description="<p><span class='strong-text'>1.</span> Злоумышленник создает поддельную веб-страницу или отправляет злоумышленную ссылку жертве.</p>
<p><span class='strong-text'>2.</span> Жертва, будучи авторизованной на веб-сайте, открывает эту страницу или переходит по ссылке.</p>
<p><span class='strong-text'>3.</span> С помощью скрытых форм и/или JavaScript-кода на этой поддельной странице происходит отправка запросов к целевому веб-сайту от имени жертвы.</p>
<p><span class='strong-text'>4.</span> Веб-сайт, думая, что запросы приходят от авторизованной жертвы, выполняет их.</p>"
     style="margin-top: 10vh;"></text-content>
    </div>
    <img class="background-img" :src="`/assets/img/background-img/csrf.svg`" alt="csrf">
  </div>
</template>

<script>
import TextContent from "@/components/TextContent.vue";
import HomeButton from "@/components/UI/HomeButton.vue";

export default {
  components: {HomeButton, TextContent},
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
</style>
