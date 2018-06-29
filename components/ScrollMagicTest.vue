<template lang="pug">
.bs-huge-stupid-content Huge Stupid Content for testing ScrollMagic + GSAP
</template>
<script>
export default {
  mounted() {
    this.$nextTick(this.scrollIt);
  },
  methods: {
    scrollIt() {
      const scene = new this.$scrollmagic.Scene({
        triggerElement: ".bs-huge-stupid-content",
        triggerHook: 0.7,
        duration: "100%"
      }).setTween(
        /* eslint-disable new-cap */
        new this.$gsap.TweenMax.fromTo(
          ".bs-huge-stupid-content",
          0.2,
          { opacity: 0, y: 150 },
          { opacity: 1, y: 0 }
        )
        /* eslint-enable new-cap */
      );
      this.$ksvuescr.$emit("addScene", "scrollIt", scene);
    }
  },
  destroyed() {
    // Destroy ScrollMagic when component is removed from DOM
    this.$ksvuescr.$emit("destroy");
  }
};
</script>
<style lang="sass">
.bs-huge-stupid-content
  height: 800px
  width: 100%
  background: $brand-primary
  color: white
  font-size: em(77)
  text-align: center
  line-height: 266px
</style>
