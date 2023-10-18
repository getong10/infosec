<template>
  <div>
    <button
        class="main-button"
        @click="$router.push('/')">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'main-button'
}
</script>

<style scoped>
.main-button {
  border-radius: 44px;
  background-color: #92E3A9;
  padding: 1.5vh 2vw;
  border: none;
  font-size: 1rem;
  cursor: pointer;
}
</style>
