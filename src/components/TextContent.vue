<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ description }}</h2>
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
  font-size: 9vw;
  line-height: 80%;
}

h2 {
  font-size: 2.5vw;
}
</style>
