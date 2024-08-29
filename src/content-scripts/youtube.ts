import { MessageID } from "@/models/message-types";

function getYTOrgLink(): string {
  const link = document.location.href;
  const titleElement = document.querySelector("#title yt-formatted-string");
  const title = titleElement ? titleElement.innerHTML : "";
  return `[[${link}][${title}]]`;
}

function getYTTranscript(): string {
  const expandButton = document.querySelector<HTMLElement>("tp-yt-paper-button#expand");
  if (expandButton) {
    expandButton.click();
  }

  const transcriptButton = document.querySelector<HTMLButtonElement>("button[aria-label='Show transcript']");
  if (transcriptButton) {
    transcriptButton.click();
  } else {
    return "Transcript Button NOT FOUND!";
  }

  const transcriptElements = document.querySelectorAll<HTMLElement>(
    "ytd-transcript-segment-list-renderer yt-formatted-string"
  );

  return Array.from(transcriptElements).map(element => element.innerText).join();
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.id === MessageID.YT_ORG_LINK) {
    sendResponse(getYTOrgLink());
  }
})

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.id === MessageID.YT_VIDEO_TRANSCRIPT) {
    sendResponse(getYTTranscript());
  }
})
