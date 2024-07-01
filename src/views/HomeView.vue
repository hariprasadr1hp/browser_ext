<script setup>
import { ref } from 'vue';
import 'ag-grid-community/styles/ag-grid.min.css';
import 'ag-grid-community/styles/ag-theme-alpine.min.css';

const pagePath = ref();
const saleIntentDomains = ref([]);
const gaSessionId = ref();
const ddSessionId = ref();


const getPagePath = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return new URL(tab.url).pathname || "";
};

const updatePagePath = async () => {
  pagePath.value = await getPagePath();
}


const getDomains = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab.id) {
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        if (!["http:", "https:"].includes(document.location.protocol))
          return ["only applicable for http/https urls"];
        const results = Array.from(new Set(Array.from(document.querySelectorAll('a[data-intention="sale"]')).map(x => x.getAttribute('href')).filter(x => x !== null).map(x => new URL(x).host)));
        return results;
      }
    });
    if (results && results[0].result) {
      saleIntentDomains.value = results[0].result;
    }
  }
};


const getGaSessionId = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab.id) {
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        if (!["http:", "https:"].includes(document.location.protocol))
          return ["only applicable for http/https urls"];
        if (!["http:", "https:"].includes(document.location.protocol))
          return ["only applicable for http/https urls"];
        return document.cookie.match(/_ga=GA[0-9]\.[0-9]\.[0-9]+\.([0-9]+);/)?.[1] || 0;
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
          return ["only applicable for http/https urls"];
        return document.cookie.match(/_dd_s.*id=([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12});?/)?.[1] || "no datadog-session-id";
      }
    });
    if (results && results[0].result) {
      ddSessionId.value = results[0].result;
    }
  }
};

updatePagePath();
</script>

<template>
  <div id="home">
    <h3 color="green">{{ pagePath }}</h3>
    <br>
    <hr><br>

    <v-btn @click="getDomains">Domains with `sale-intent`</v-btn>
    <ul>
      <li v-for="domain in saleIntentDomains" :key="domain" v-html="domain"></li>
    </ul>
    <br>

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
