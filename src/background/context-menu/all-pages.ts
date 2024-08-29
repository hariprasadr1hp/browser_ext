const GET_CHAR_COUNT = "get_char_count";
const LOG_CHAR_COUNT = "log_char_count";

const getCharCountMenuItem: chrome.contextMenus.CreateProperties = {
  id: GET_CHAR_COUNT,
  title: "Get Character count",
  contexts: ["selection"],
}

const logCharChountMenuItem: chrome.contextMenus.CreateProperties = {
  id: LOG_CHAR_COUNT,
  title: "Console log",
  contexts: ["selection"],
}

chrome.contextMenus.create(getCharCountMenuItem);
chrome.contextMenus.create(logCharChountMenuItem);

chrome.contextMenus.onClicked.addListener(
  function (clickData: chrome.contextMenus.OnClickData): void {
    if (clickData.menuItemId === getCharCountMenuItem.id && clickData.selectionText) {
      chrome.action.setBadgeText({ "text": clickData.selectionText.length.toString() });
    }
    else if (clickData.menuItemId === logCharChountMenuItem.id && clickData.selectionText) {
      console.log(clickData.selectionText);
    }
  }
)
