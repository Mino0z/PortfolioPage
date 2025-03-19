<template>
    <NavBarDesktop v-if="!isMobile" />
    <NavBarMobile v-else />
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import NavBarDesktop from './NavBarDesktop.vue';
  import NavBarMobile from './NavBarMobile.vue';
  
  const isMobile = ref(false);
  
  const checkIfMobile = () => {
    isMobile.value = window.innerWidth < 769;
  };
  
  onMounted(() => {
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', checkIfMobile);
  });
  </script>
  
  <style scoped>
  /* Tutaj możesz dodać style specyficzne dla komponentu NavBar, jeśli są potrzebne */
  </style>