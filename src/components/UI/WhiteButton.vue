<template>
  <div>
    <button
        class="white-button">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'white-button'
}
</script>

<style scoped>
.white-button {
  box-shadow: 0 0 25px 1px rgba(106, 106, 106, 0.30);
  background-color: white;
  border: none;
  border-radius: 25px;
  padding: 1vh 1.5vw;
  font-size: 1.4rem;
  cursor: pointer;
}
.white-button:hover {
  background-color: rgb(247, 250, 248);
}
</style>
