<template>
  <section id="index">
    <carousel></carousel>
    <grid-nav></grid-nav>
  </section>
</template>
<script>
  import Carousel from '@/components/Carousel.vue'
  import GridNav from '@/components/GridNav.vue'
  export default {
    components: {
      Carousel,
      GridNav
    }
  }
</script>
<style scoped lang="scss"></style>
