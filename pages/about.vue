<template lang="pug">
.bs-about__wrp
  .bs-about
    .bs-about__head
      nuxt-link(to="/" class="bs-link bs-link--about")
        i
      h1.bs-about__heading About
      nuxt-link(to="/test" class="bs-link bs-link--about bs-link--mirrored")
    about-items
</template>
<script>
import AboutItems from "@/components/AboutItems.vue";

export default {
  components: {
    AboutItems
  }
};
</script>
