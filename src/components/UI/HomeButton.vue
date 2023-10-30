<template>
    <button class="home-button" @click="$router.push('/menu')">
      <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none">
        <g clip-path="url(#clip0_404_439)">
          <path d="M22.4999 42.75V31.5H31.4999V42.75C31.4999 43.9875 32.5124 45 33.7499 45H40.4999C41.7374 45 42.7499 43.9875 42.7499 42.75V27H46.5749C47.6099 27 48.1049 25.7175 47.3174 25.0425L28.5074 8.1C27.6524 7.335 26.3474 7.335 25.4924 8.1L6.68235 25.0425C5.91735 25.7175 6.38985 27 7.42485 27H11.2499V42.75C11.2499 43.9875 12.2624 45 13.4999 45H20.2499C21.4874 45 22.4999 43.9875 22.4999 42.75Z" fill="#263238"/>
        </g>
        <defs>
          <clipPath id="clip0_404_439">
            <rect width="54" height="54" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </button>
</template>

<script>
export default {
  name: 'home-button'
}
</script>

<style scoped>
.home-button {
  padding: 1vw;
  border-radius: 100%;
  border: none;
  background-color: #FFF;
  box-shadow: 0 0 25px rgba(123, 123, 123, 0.30);
  cursor: pointer;
  position: absolute;
  right: 5vw;
  top: 5vh;
}
.home-button svg {
  width: 5vh;
  height: 5vh;
}
.home-button:hover {
  background-color: rgba(222, 247, 229);
  box-shadow: 0 0 25px rgb(212, 243, 221);
}
</style>
