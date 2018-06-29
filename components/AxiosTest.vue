<template lang="pug">
div
  .bs-users(v-swiper:mySwiper="swiperOption")
    .swiper-wrapper
      .swiper-slide.bs-users__item(v-for="user in users" :key="user.id")
        .bs-users__avaWrp
          img.bs-users__ava(:src="user.image")
        h4.bs-users__name {{user.name}}
  .bs-spinner
    pulse-loader(:loading="loading")
</template>
<script>
import axios from "axios";
import "swiper/dist/css/swiper.css";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

export default {
  mounted() {
    axios.get("c9qjq").then(response => {
      this.users = response.data;
      this.loading = false;
    });
  },
  data() {
    return {
      users: [],
      loading: true,
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 2,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      }
    };
  },
  components: {
    PulseLoader
  }
};
</script>
<style lang="sass">
.bs-users
  &__item
    background: #fff
  &__avaWrp
    background: #fff
    text-align: center
  &__ava
    max-height: 400px
  &__name
    background: $brand-primary
    color: #fff
    text-align: center
    padding: 15px 5px
    margin: 0
    text-transform: uppercase
.bs-spinner
  text-align: center
  margin: 50px auto
</style>
