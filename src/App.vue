<script setup>
import HomeView from './views/HomeView.vue';
import Navbar from './components/Navbar.vue';

</script>

<template>
  <Navbar />
  <HomeView />
</template>

<style scoped>
body {
  background-color: var(--background);
  font-family: 'Poppins', sans-serif; 
}
</style>
