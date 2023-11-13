<template>
  <div class="mail__container">
    <div class="mail__header">
      <div style="display: flex;align-items: center;">
        <div class="mail__logo" @click="$router.push('/csrf')">
          <img src="/assets/img/mail.svg" alt="@ЭЛПОЧТА.РФ">
        </div>
        <div class="mail__letter">
          <div class="mail__notification__counter">
            {{ notific }}
          </div>
          <div class="mail__letter__text">
            Письмо
          </div>
      </div>
      </div>
      <div class="mail__username__header">
        Василий
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notific: 0,

    }
  }
}
</script>

<style scoped>
.mail__container {
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(237, 237, 239, 1);
}

.mail__header {
  width: 100vw;
  height: 10vh;
  background-color: rgba(40, 77, 210, 1);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 4vw 0 4vw;
}

.mail__logo {
  margin-right: 5vw;
  cursor: pointer;
}

.mail__letter {
  height: 10vh;
  width: 10vw;
  background-color: rgba(21, 18, 171, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.mail__letter__text {
  color: white;
  font-size: 2.5vh;
  font-weight: 400;
  position: fixed;
}

.mail__notification__counter {
  width: 1.2vw;
  height: 1.2vw;
  border-radius: 1vw;
  background-color: rgba(248, 134, 0, 1);
  align-self: flex-end;
  margin: 0 1.2vw 1.8vw 0;
  color: white;
  font-weight: 400;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mail__username__header {
  color: white;
  font-size: 2.5vh;
  font-weight: 400;

}
</style>
