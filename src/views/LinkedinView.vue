<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { MessageID } from '@/models/message-types';
import { LinkedinJob } from '@/models/message-interfaces';

const pagePath = ref<string>("");
const linkedinJobs = ref<LinkedinJob[]>([]);

async function getPagePath(): Promise<string | undefined> {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab.url) {
    const url = new URL(tab.url);
    return url.pathname;
  }
};

const updatePagePath = async () => {
  pagePath.value = await getPagePath() || "";
};

const updateLinkedinJobs = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab.id) {
    const response = await chrome.tabs.sendMessage(tab.id, { id: MessageID.LINKEDIN_JOBS });
    linkedinJobs.value = response;
  }
};

onMounted(() => {
  updatePagePath();
});
</script>


<template>
  <div id="home">
    <h3 style="color: green">{{ pagePath }}</h3>
    <br>
    <hr><br>

    <v-btn @click="updateLinkedinJobs">Jobs</v-btn>
    <br>
    <v-data-table v-if="linkedinJobs.length" :items="linkedinJobs"></v-data-table>
    <p v-else>No jobs found. Please click the button above to fetch jobs.</p>
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
</style>
