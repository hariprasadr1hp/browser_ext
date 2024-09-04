import { MessageID } from "@/models/message-types";
import { sleep } from "@/util/util";

/**
  * Returns the youtube link in an ".org" recognized format
  * Along with the link, the title and the owner of the video is extracted
  * format: [[{link}][yt:{owner}-{title}]]
  */
function getYTOrgLink(): string {
  const link = document.location.href;
  const titleElement = document.querySelector("#title yt-formatted-string");
  const ownerElement = document.querySelector("#owner a.yt-simple-endpoint.style-scope.yt-formatted-string");
  const title = titleElement ? titleElement.innerHTML : "";
  const owner = ownerElement ? ownerElement.innerHTML : "";
  return `[[${link}][yt:${owner}-${title}]]`;
}

async function getYTTranscript(): Promise<string> {
  const expandButton = document.querySelector<HTMLElement>("tp-yt-paper-button#expand");
  if (expandButton) {
    expandButton.click();
  }
  await sleep(1);

  const transcriptButton = document.querySelector<HTMLButtonElement>("button[aria-label='Show transcript']");
  if (transcriptButton) {
    transcriptButton.click();
  } else {
    return "Transcript Button NOT FOUND!";
  }
  await sleep(1);

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

chrome.runtime.onMessage.addListener(async (message, _sender, sendResponse) => {
  if (message.id === MessageID.YT_VIDEO_TRANSCRIPT) {
    sendResponse(await getYTTranscript());
  }
})
