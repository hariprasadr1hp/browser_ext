chrome.tabs.onUpdated.addListener((tabId, tab) => {
  if (tab.url && tab.url.includes("/compare-deals/")) {
    const pagePath = new URL(tab.url).pathname;
    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      pathPath: pagePath,
    });
  }
});


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getWidgetInfo") {
    const widgets = new Set(Array.from(document.querySelectorAll('a[data-uid]')).filter(x => x.getAttribute('data-uid') !== "").map(x => x.getAttribute('data-uid')));
    sendResponse({
      widgets: widgets
    });
  }
});
