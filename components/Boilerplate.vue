<template lang="pug">
  .bs-boilerplate__wrp
    .bs-boilerplate(@mouseover="isHovered = true" @mouseleave="isHovered = false")
      .bs-boilerplate__side(:class="{'bs-boilerplate__side--hovered': isHovered}")
        a.bs-boilerplate__icon.bs-boilerplate__icon--gitbook(
          href="https://brandstudio-az.gitbook.io/boilerplate/vs-code"
          target="_blank"
        )
      .bs-boilerplate__inner
        a(href="http://brandstudio.kz" target="_blank")
          img.bs-boilerplate__img(src="images/merlin.png")
        h1.bs-boilerplate__heading BrandStudio's boilerplate: v0.1.0
        nuxt-link(to="/about" class="bs-link")
          | About
          i
      .bs-boilerplate__side.bs-boilerplate__side--right(:class="{'bs-boilerplate__side--hovered': isHovered}")
        a.bs-boilerplate__icon.bs-boilerplate__icon--github(
          href="https://github.com/abzalzhumabaev/bs-nuxt-boilerplate"
          target="_blank"
        )
</template>
<script>
export default {
  data() {
    return {
      isHovered: false
    };
  }
};
</script>

<style lang="sass">
.bs-boilerplate
  position: relative
  max-width: 775px
  width: 90%
  margin-bottom: 20px
  &__wrp
    margin: 0
    min-height: 100vh
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    background-color: #f2f5fa
    padding: 0 50px
    overflow: hidden
  &__side
    display: flex
    align-items: center
    justify-content: center
    position: absolute
    top: 0
    bottom: 0
    left: -22px
    margin: auto 0
    content: ''
    width: 100px
    height: 90%
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.07)
    background: linear-gradient(to right, $brand-primary 0, $brand-primary 22px, #fafafa 22px)
    border-radius: 4px 0 0 4px
    transition: .4s ease-in-out
    &--hovered
      left: -80px
    &--right
      left: initial
      right: -22px
      border-radius: 0 4px 4px 0
      background: linear-gradient(to left, $brand-primary 0, $brand-primary 22px, #fafafa 22px)
      &.bs-boilerplate__side--hovered
        left: initial
        right: -80px
  &__icon
    display: block
    width: 50px;
    height: 50px;
    border-radius: 100%
    &--gitbook
      background: url(~/images/gitbook.png) center center no-repeat
      background-size: cover
      border: 3px solid #666666
      box-sizing: border-box; 
    &--github
      background: url(~/images/github.png) center center no-repeat
      background-size: cover
  &__inner
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    background: #fff
    padding: 25px
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.02)
    border-radius: 4px
    position: relative
    z-index: 1
  &__img
    width: 150px
    height: 150px
    border-radius: 100%
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1)
  &__heading
    font-family: 'Dancing Script', cursive
    font-weight: 400
    color: #333333
    text-align: center

@keyframes move
  0% 
    left: 0
    opacity: 0
  5%
    opacity: 0.0
  48%
    opacity: 0.2
  80%
    opacity: 0.0
  100%
     left: 82%
</style>
