import { MessageID } from "@/models/message-types";

function getYTOrgLink(): string {
  const link = document.location.href;
  const titleElement = document.querySelector("#title yt-formatted-string");
  const title = titleElement ? titleElement.innerHTML : "";
  return `[[${link}][${title}]]`;
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.id === MessageID.YOUTUBE_ORG_LINK) {
    sendResponse(getYTOrgLink());
  }
})
