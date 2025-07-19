<script setup>
import Navbar from './components/NavBar.vue'
</script>

<template>
  <div>
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>



<style>
main {
  padding: 2rem;
}
</style>

