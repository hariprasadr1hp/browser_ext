<script setup lang="ts">
import { ref, onMounted } from "vue";
import { MessageID } from "@/models/message-types";

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
    const response = await chrome.tabs.sendMessage(tab.id, { id: MessageID.YT_VIDEO_TRANSCRIPT });
    transcriptText.value = response;
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
