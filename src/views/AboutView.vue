<script setup lang="ts">
import { marked } from 'marked';
const usageString = __USAGE_STRING__;
</script>

<template>
  <div v-html="marked(usageString)"></div>
</template>
