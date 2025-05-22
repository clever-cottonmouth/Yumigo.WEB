<template>
  <Header />
  <RouterView />
  <Footer />
</template>

<script setup>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped></style>
