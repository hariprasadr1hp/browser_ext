<script setup lang="ts">
import { ref, onMounted } from "vue";

const pagePath = ref<string>("");
const transcriptText = ref<string>("");

const getPagePath = async (): Promise<string> => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return new URL(tab.url!).pathname || '';
};

const updatePagePath = async () => {
  pagePath.value = await getPagePath();
};

const getTranscript = async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab.id) {
    const results = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (): string => {
        if (!["http:", "https:"].includes(document.location.protocol))
          return "only applicable for http/https urls";
        if (!document.location.href.match("https://.*youtube.com/watch[^/]+"))
          return "not a youtube video url";

        // Expand the video details if the button is available
        const expandButton = document.querySelector<HTMLElement>("tp-yt-paper-button#expand");
        if (expandButton) {
          expandButton.click();
        }

        // Show the transcript if the button is available
        const transcriptButton = document.querySelector<HTMLButtonElement>("button[aria-label='Show transcript']");
        if (transcriptButton) {
          transcriptButton.click();
        } else {
          return "Transcript Button NOT FOUND!";
        }

        // Extract the transcript text
        const transcriptElements = document.querySelectorAll<HTMLElement>(
          "ytd-transcript-segment-list-renderer yt-formatted-string"
        );

        const transcript = Array.from(transcriptElements).map(element => element.innerText).join();
        return transcript;

      }
    });
    if (results && results[0].result) {
      transcriptText.value = results[0].result;
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

    <v-btn @click="getTranscript">Show Transcript</v-btn>
    <br>
    <p v-if="transcriptText"> {{ transcriptText }}</p>
    <p v-else>Transcript NOT FOUND!</p>
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
