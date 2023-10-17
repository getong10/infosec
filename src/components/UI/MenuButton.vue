<template>
  <div>
    <button
        class="menu-button">
      <slot></slot>
        <svg v-html="svgProp"></svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'menu-button',
  props: ['svgProp']
}
</script>

<style scoped>
.menu-button {
  background-color: rgba(237, 239, 239, 1);
  font-weight: 700;
  border-radius: 40px;
  border: none;
  text-transform: uppercase;
  display: flex;
  padding-left: 3vw;
  padding-top: 3vw;
  font-size: 2vw;
  overflow: hidden;
  cursor: pointer;
  max-width: 30vw;
  min-height: 35vh;
}
.menu-button:hover {
  background-color: #DEF7E5;
}
</style>
