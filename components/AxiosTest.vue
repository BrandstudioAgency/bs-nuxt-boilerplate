<template lang="pug">
.bs-users
  .bs-users__item(v-for="user in users" :key="user.id")
    .bs-users__avaWrp
      img.bs-users__ava(:src="user.image")
    h4.bs-users__name {{user.name}}
</template>
<script>
import axios from "axios";

export default {
  mounted() {
    axios.get("5b3600631f72822c105ef657").then(response => {
        this.users =   response.data;
    });
  },
  data() {
    return {
      users: []
    };
  }
};
</script>
<style lang="sass">
.bs-users
  display: grid
  grid-template-columns: 1fr 1fr 1fr 1fr
  margin: 0
  list-style-type: none
  padding: 0
  &__item
    background: #fff
    width: 250px
    height: 250px
</style>
