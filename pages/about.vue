<template lang="pug">
.bs-about__wrp
    .bs-about
      .bs-about__head
        nuxt-link(to="/" class="bs-link bs-link--about")
          i
        h1.bs-about__heading About
      about-items
</template>
<script>
import AboutItems from "@/components/AboutItems"
export default {
  components: {
    AboutItems
  }
}
</script>
