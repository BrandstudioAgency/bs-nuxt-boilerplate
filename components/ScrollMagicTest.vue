<template lang="pug">
div
  .bs-huge-stupid-content Huge Stupid Content for testing ScrollMagic + GSAP
  .bs-huge-stupid-content__links
    nuxt-link.bs-link(to="/") Home
    nuxt-link.bs-link(to="/about") About
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
  max-width: 1200px
  width: 100%
  margin: 50vh auto
  background: $brand-primary
  color: white
  font-size: em(77)
  text-align: center
  line-height: 100px
  &__links
    max-width: 800px
    margin: 20px auto
    display: flex
    align-items: center
    justify-content: space-between
</style>
