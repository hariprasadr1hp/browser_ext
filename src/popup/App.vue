<script setup lang="ts">
import { RouterView } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import Navigator from '@/components/Navigator.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <Navigator />
    </div>
  </header>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
  min-width: 500px;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 200px;
  }

  .img {
    height: 200px;
    width: auto;
  }
}
</style>
