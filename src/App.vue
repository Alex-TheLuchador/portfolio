<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import Carousel from './components/Carousel.vue';
</script>

<template>
  <div id="starfleet-image">
    <!-- <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->
    <Carousel></Carousel>
  </div>
</template>

<style scoped>
#starfleet-image {
  text-align: center;

  background-image: url('../images/starfleet2.png');
  background-size: 40rem;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 8rem;
}
</style>
