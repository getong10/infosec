<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Montserrat, sans-serif;
  font-weight: 600;
  color: #263238;
}
body {
  overflow: hidden;
}
.strong-text {
  font-weight: 800;
}
p:not(:last-child){
  margin-bottom: 0.7vh;
}
.text-is-not-checked {
  font-weight: 700;
  color: rgba(40, 77, 209, 1);
}
.text-is-checked {
  font-weight: 400;
  color: rgba(40, 77, 209, 1);
}
</style>
