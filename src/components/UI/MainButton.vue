<template>
    <button
        class="main-button"
        @click="$router.push(`${link}`)">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'main-button',
  props: {
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.main-button {
  border-radius: 100vw;
  background-color: #92E3A9;
  padding: 2vh 2vw;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
.main-button:hover {
  background-color: #8bd9a1;
}
</style>
