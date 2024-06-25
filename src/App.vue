<template>
<div>
  <Header/>
  <div id="content" class="mt-16">
    <router-view />
  </div>
  <Footer/>
</div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<style>
</style>
