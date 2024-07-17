<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface linkedinJob {
  id: string;
  title: string;
  company: string;
  location: string;
}

const pagePath = ref<string>('');
const linkedinJobs = ref<linkedinJob[]>([]);

const getPagePath = async (): Promise<string> => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return new URL(tab.url!).pathname || '';
};

const updatePagePath = async () => {
  pagePath.value = await getPagePath();
};

const getLinkedinJobs = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab.id) {
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        if (!["http:", "https:"].includes(document.location.protocol))
          return ["only applicable for http/https urls"];
        if (!document.location.href.match("https://www.linkedin.com/jobs"))
          return ["only applicable for linkedin/jobs"];

        const jobCards: NodeListOf<Element> = document.querySelectorAll('div.job-card-container');
        const jobs: linkedinJob[] = Array.from(jobCards).map((jobCard): linkedinJob => {
          const id: string = jobCard.getAttribute('data-job-id') || '';
          const titleElement = jobCard.querySelector('a.job-card-container__link.job-card-list__title.job-card-list__title--link');
          const title: string = titleElement ? (titleElement as HTMLElement).innerText.trim() : '';
          const companyElement = jobCard.querySelector('span.job-card-container__primary-description');
          const company: string = companyElement ? (companyElement as HTMLElement).innerText.trim() : '';
          const locationElement = jobCard.querySelector('li.job-card-container__metadata-item');
          const location: string = locationElement ? (locationElement as HTMLElement).innerText.trim() : '';
          return {
            id,
            title,
            company,
            location,
          };
        });
        return jobs;
      }
    });
    if (results && Array.isArray(results[0].result)) {
      linkedinJobs.value = results[0].result.filter((result): result is linkedinJob => typeof result !== 'string');
    }
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

    <v-btn @click="getLinkedinJobs">Jobs</v-btn>
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
