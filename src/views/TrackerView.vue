<script setup lang="ts">
import { ref, onMounted } from "vue";

const pagePath = ref<string>("pagepath...");
const gaSessionId = ref<string>("");
const ddSessionId = ref<string>("");




</script>

<template>
  <div id="metrics">

  </div>
  <br>
</template>

<style scoped>
@media (min-width: 1024px) {
  .metrics {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
