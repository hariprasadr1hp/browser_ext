<script setup lang="ts">
import { ref, onMounted } from 'vue';

const pagePath = ref();
const gaSessionId = ref<string>('');
const ddSessionId = ref<string>('');


const getPagePath = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return new URL(tab.url!).pathname || "";
};

const updatePagePath = async () => {
  pagePath.value = await getPagePath();
}

const getGaSessionId = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab.id) {
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        if (!["http:", "https:"].includes(document.location.protocol))
          return "only applicable for http/https urls";
        return document.cookie.match(/_ga=GA[0-9]\.[0-9]\.[0-9]+\.([0-9]+);/)?.[1] || 'No GA Session ID!';
      }
    });
    if (results && results[0].result) {
      gaSessionId.value = results[0].result;
    }
  }
};

const getDdSessionID = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab.id) {
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        if (!["http:", "https:"].includes(document.location.protocol))
          return "only applicable for http/https urls";
        return document.cookie.match(/_dd_s.*id=([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12});?/)?.[1] || "No Datadog Session ID";
      }
    });
    if (results && results[0].result) {
      ddSessionId.value = results[0].result;
    }
  }
};

onMounted(() => {
  updatePagePath();
});
</script>

<template>
  <div id="metrics">
    <h3 color="green">{{ pagePath }}</h3>
    <br>
    <hr><br>

    <v-btn @click="getGaSessionId">Google Session ID</v-btn>
    <p>{{ gaSessionId }}</p>
    <br>

    <v-btn @click="getDdSessionID">Datadog Session ID</v-btn>
    <p>{{ ddSessionId }}</p>
    <br>
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
