<script>

import AnonymousModal from "@/components/UI/AnonymousModal.vue";
import {anonymousText} from "./copyright"
import {defineComponent} from "vue";

export default defineComponent({
  methods: {
    anonymousText() {
      return anonymousText
    }
  },
  components: {AnonymousModal}
})


</script>

<template>
  <div>

    <anonymous-modal text-message="{{anonymousText()}}"></anonymous-modal>
  </div>
</template>


<style scoped>

</style>
