<template>
  <div>
    <button
        class="white-button"
        @click="$router.push(`/${link}`)">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'white-button',
  props: {
    link: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.white-button {
  box-shadow: 0 0 25px 1px rgba(106, 106, 106, 0.30);
  background-color: white;
  border: none;
  border-radius: 25px;
  padding: 0.5vh 1.5vw;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
