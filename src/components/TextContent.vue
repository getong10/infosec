<template>
  <div>
    <h1 v-html="title"></h1>
    <h2 v-html="description"></h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
* {
  display: flex;
  flex-direction: column;
}

h1 {
  text-transform: uppercase;
  font-size: 8vw;
  line-height: 87%;
}

h2 {
  padding-top: 4vh;
  font-size: 2vw;
  width: 75vw;
  display: inline;
}
</style>
