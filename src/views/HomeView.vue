<script setup>
import { ref } from 'vue';
import 'ag-grid-community/styles/ag-grid.min.css';
import 'ag-grid-community/styles/ag-theme-alpine.min.css';
import HelloWorld from '@/components/HelloWorld.vue';

</script>

<template>
  <p>I'm blank</p>
  <HelloWorld msg="Elliot" />
  <div id="home"></div>
  <p>I'm blank</p>
</template>

<style scoped>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.ag-theme-alpine-dark {
  height: 100%;
  width: 100%;
}
</style>
