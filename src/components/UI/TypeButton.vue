<template>
  <button
      class="type-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'type-button',
}
</script>

<style scoped>
.type-button {
  border-radius: 100vw;
  background-color: #92E3A9;
  padding: 2vh 2vw;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}
.type-button:hover {
  background-color: #8bd9a1;
}
</style>
