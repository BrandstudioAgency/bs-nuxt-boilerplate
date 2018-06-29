<template lang="pug">
div
  axios-test
  scroll-magic-test
  .bs-spiderman
</template>
<script>
import ScrollMagicTest from "@/components/ScrollMagicTest.vue";
import AxiosTest from "@/components/AxiosTest.vue";

export default {
  components: {
    ScrollMagicTest,
    AxiosTest
  }
};
</script>
<style lang="sass">
.bs-spiderman
  background: url(~/images/spiderman.png) top center no-repeat
  position: fixed
  content: ''
  top: 0
  left: 66%
  width: 50px
  height: 50px
  background-size: contain
</style>
