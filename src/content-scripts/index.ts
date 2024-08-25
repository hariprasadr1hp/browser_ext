// console.log("Content script loaded");

// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//   if (tab.url && tab.url.includes("/compare-deals/")) {
//     const pagePath = new URL(tab.url).pathname;
//     chrome.tabs.sendMessage(tabId, {
//       type: "NEW",
//       pathPath: pagePath,
//     });
//   }
// });


// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === "getWidgetInfo") {
//     const widgets = new Set(Array.from(document.querySelectorAll('a[data-uid]')).filter(x => x.getAttribute('data-uid') !== "").map(x => x.getAttribute('data-uid')));
//     sendResponse({
//       widgets: widgets
//     });
//   }
// });

// interface linkedinJob {
//   id: string;
//   title: string;
//   company: string;
//   location: string;
// }

// function extractJobs() {
//   if (!["http:", "https:"].includes(document.location.protocol) || !document.location.href.match("https://www.linkedin.com/jobs")) {
//     return [];
//   }

//   const jobCards: NodeListOf<Element> = document.querySelectorAll('div.job-card-container');
//   const jobs: linkedinJob[] = Array.from(jobCards).map((jobCard): linkedinJob => {
//     const id: string = jobCard.getAttribute('data-job-id') || '';
//     const titleElement = jobCard.querySelector('a.job-card-container__link.job-card-list__title.job-card-list__title--link');
//     const title: string = titleElement ? (titleElement as HTMLElement).innerText.trim() : '';
//     const companyElement = jobCard.querySelector('span.job-card-container__primary-description');
//     const company: string = companyElement ? (companyElement as HTMLElement).innerText.trim() : '';
//     const locationElement = jobCard.querySelector('li.job-card-container__metadata-item');
//     const location: string = locationElement ? (locationElement as HTMLElement).innerText.trim() : '';
//     console.log('Job Found:', { id, title, company, location });
//     return {
//       id,
//       title,
//       company,
//       location,
//     };
//   });
//   console.log('All Jobs:', jobs);
//   return jobs;
// }

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === 'extractJobs') {
//     const jobs = extractJobs();
//     sendResponse({ jobs });
//   }
// });


function sayhahaha(): void {
  console.log("heeelllllllo monster!");
}

sayhahaha();


const good = 42;

window.sayhahaha = sayhahaha;

