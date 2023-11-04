<template>
  <div class="container">
    <div class="message typing-demo" v-if="isShowed" v-html="textMessage"></div>
    <img
        src="/assets/img/anon.svg" alt="Anon"
        @click="changeModalView"
    />
  </div>
</template>

<script>
export default {
  name: 'anonymous-modal',
  data() {
    return {
      isShowed: true,
    }
  },
  methods: {
    changeModalView() {
      this.isShowed = !this.isShowed
    },
  },
  props: {
    textMessage: {
      type: String,
    },
  },
}
</script>

<style scoped>
.container {
  position: absolute;
  right: 3.5vw;
  bottom: 5vh;
  z-index: 200;
  display: inline-flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 0 -45px;
  flex-wrap: wrap;
}

.message {
  border-radius: 1vw;
  background: #92E3A9;
  width: 30vw;
  position: relative;
  right: -3vw;
  z-index: 100;
  padding: 1.5vw 3vw 1.5vw 1.5vw;
}

img {
  z-index: 150;
  height: 13vh;
  cursor: pointer;
}
</style>
