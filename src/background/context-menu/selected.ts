const getCharCountMenuItem: chrome.contextMenus.CreateProperties = {
  id: "hp_get_char_count",
  title: "Get Character count",
  contexts: ["selection"],
}

const consoleLogMenuItem: chrome.contextMenus.CreateProperties = {
  id: "hp_console_log",
  title: "Console log",
  contexts: ["selection"]
}

chrome.contextMenus.create(getCharCountMenuItem);
chrome.contextMenus.create(consoleLogMenuItem);

chrome.contextMenus.onClicked.addListener(
  function (clickData: chrome.contextMenus.OnClickData): void {
    if (clickData.menuItemId === getCharCountMenuItem.id && clickData.selectionText) {
      chrome.action.setBadgeText({ "text": clickData.selectionText.length.toString() });
    }
    else if (clickData.menuItemId === consoleLogMenuItem.id && clickData.selectionText) {
      console.log(clickData.selectionText);
    }
  }
)
