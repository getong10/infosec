<template>
  <div class="button-container">
    <main-button
        class="main-button"
        v-for="textButton in textButtons"
        :key="textButton"
        @click="$router.push(`/${textButton.link}`)">
      {{ textButton.name }}
    </main-button>
  </div>
</template>

<script>
export default {
  props: {
    textButtons: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.button-container {
  display: flex;
}
.button-container .main-button:not(:first-child) {
  margin-left: 5vw
}
</style>
