<template lang="pug">
.bs-about__inner
  .bs-about__item( v-for="item in items")
    .bs-about__header(
        :class="{'bs-about__header--deprecated': item.isDeprecated}"
      )
      a.bs-about__iconWrp(
          :href="item.site"
          target="_blank"
          :class="{'bs-about__iconWrp--deprecated': item.isDeprecated}"
        )
        img.bs-about__icon(:src="'images/'+item.img", :alt="item.title")
    h2.bs-about__title(
      :class="{'bs-about__title--deprecated': item.isDeprecated}"
    ) {{item.title}}
    .bs-about__footer
      a.bs-about__link(:href="item.doc" target="_blank" v-if="item.doc") doc
      a.bs-about__link(:href="item.course" target="_blank" v-if="item.course") course
      a.bs-about__link(:href="item.overview" target="_blank" v-if="item.overview") overview
</template>
<script>
import json from "./json/about-items.json";

export default {
  data() {
    return {
      items: json
    };
  }
};
</script>
<style lang="sass">
.bs-about
  max-width: 1200px
  width: 95%
  &__wrp
    background: url(~/images/shark.png) right center no-repeat #f9fafc
    background-size: auto 100%
    background-attachment: fixed
    display: flex
    align-items: center
    justify-content: center
    min-height: 100vh
    padding: 50px
    @media only screen and (max-width: 480px)
      padding: 50px 20px
      background: #f9fafc
  &__head
    display: flex
    align-items: center
    margin-bottom: 10px
  &__heading
    font-family: 'Anonymous Pro', monospace
    color: #333333
    font-size: 3em
    text-align: center
    flex: auto
    @media only screen and (max-width: 992px)
      margin-left: 10px
      margin-right: 10px
    @media only screen and (max-width: 480px)
      font-size: em(24)
  &__inner
    display: grid
    grid-template-columns: 1fr 1fr 1fr 1fr
    grid-row-gap: 50px
    grid-column-gap: 20px
    @media only screen and (max-width: 1240px)
      grid-template-columns: 1fr 1fr 1fr
      grid-row-gap: 40px
    @media only screen and (max-width: 992px)
      grid-template-columns: 1fr 1fr
      grid-row-gap: 30px
    @media only screen and (max-width: 768px)
      grid-template-columns: 1fr
      grid-row-gap: 20px
  &__item
    max-width: 285px
    width: 100%
    margin: 0 auto
    background: #fff
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    transition: .4s ease
    overflow: hidden
    &:hover
      box-shadow: 0 10px 35px rgba(0, 0, 0, 0.1)
      .bs-about
        &__header
          background-position-y: 0
        &__iconWrp
          transform: scale(1)
          &--deprecated
            &:after
              opacity: 1
        &__title
          &:before
            left: 100%
        &__footer
          transform: translateY(0)
  &__header
    background: url(~/images/budge.png) top center no-repeat
    background-size: 100% auto
    background-position-y: -700%
    height: 200px
    padding-top: 50px
    border-radius: 4px 4px 0 0
    transition: .7s ease
    &--deprecated
      background: url(~/images/budge-deprecated.png) top center no-repeat
      background-size: 100% auto
      background-position-y: -700%
  &__iconWrp
    display: block
    width: 150px
    height: 150px
    border-radius: 50%
    background: #fff
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1)
    margin: 0 auto
    text-align: center
    transform: scale(0.8)
    transition: .7s ease
    position: relative
    &:hover
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1)
    &--deprecated
      &:after
        content: ''
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        z-index: 1
        background: url(~/images/deprecated.png) center center no-repeat
        background-size: contain
        opacity: 0
        transition: .7s ease
  &__icon
    width: inherit
    height: inherit
    border-radius: 100%
  &__title
    color: #333333
    font-family: 'Dancing Script', cursive
    font-size: 2em
    font-weight: 400
    text-align: center
    position: relative
    transition: .7s ease
    &:before
      position: absolute
      content: ''
      background: #fff
      width: 100%
      height: 105%
      left: 0
      top: 0
      transform: skew(-30deg)
      transition: .8s ease
    &--deprecated
      text-decoration: line-through
  &__footer
    display: flex
    border-top: 1px solid rgba(0, 0, 0, 0.2)
    border-radius: 0 0 4px 4px
    transform: translateY(100%)
    transition: .6s ease
  &__link
    background: #fafbfc
    width: 33.3333%
    color: #333333
    font-family: 'Anonymous Pro', monospace
    padding: 10px 0
    text-decoration: none
    font-size: 1.1em
    text-align: center
    transition: all .2s ease
    flex: 1
    &:hover
      background: #35cc62
      color: #fff
</style>
