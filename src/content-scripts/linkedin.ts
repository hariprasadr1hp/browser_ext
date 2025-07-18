import { MessageID } from "@/models/message-types";
import { LinkedinJob } from "@/models/message-interfaces";

function getLinkedinJobsList(): LinkedinJob[] {
  const jobCards: NodeListOf<Element> = document.querySelectorAll("div.job-card-container");
  const jobs: LinkedinJob[] = Array.from(jobCards).map((jobCard) => {
    const id: string = jobCard.getAttribute("data-job-id") || "";
    const titleElement = jobCard.querySelector("a.job-card-container__link.job-card-list__title--link")
    const titleLong: string = titleElement ? (titleElement as HTMLElement).innerText.trim() : "";
    const title: string = titleLong ? titleLong.split("\n")[0] : "";


    const companyElement = jobCard.querySelector("span.job-card-container__primary-description");
    const company: string = companyElement ? (companyElement as HTMLElement).innerText.trim() : "";
    const locationElement = jobCard.querySelector("li.job-card-container__metadata-item");
    const location: string = locationElement ? (locationElement as HTMLElement).innerText.trim() : "";
    return { id, title, company, location };
  });
  return jobs;
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.id === MessageID.LINKEDIN_JOBS) {
    sendResponse(getLinkedinJobsList());
  }
})

