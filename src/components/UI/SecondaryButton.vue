<template>
  <button class="secondary-button" >
    <img v-if="svgProp" :src="require(`@/assets/img/${svgProp}`)" :alt="svgProp" class="image">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'secondary-button',
  props: {
    svgProp: {
      type: String
    },
  }
}
</script>

<style scoped>
.secondary-button {
  border-radius: 0.7vw;
  background-color: #92E3A9;
  position: absolute;
  left: 5vw;
  bottom: 5vh;
  padding: 2vh 1vw;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  height: 2.5vw;
}

.image {
  margin-right: 0.5vw;
  width: 2vw;
}
</style>
