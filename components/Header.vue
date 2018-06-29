<template lang="pug">
header
  ul.bs-main-nav
    li.bs-main-nav__item
      router-link(to="/" class="bs-main-nav__link") Home
    li.bs-main-nav__item
      router-link(to="/about" class="bs-main-nav__link") About
</template>
<style lang="sass">
.bs-main-nav
  display: flex
  &__item
    display: inline-block
  &__link
    display: block
</style>
