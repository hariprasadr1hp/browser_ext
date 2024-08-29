import { MessageID } from "@/models/message-types";


const getYTOrgLinkMenuItem: chrome.contextMenus.CreateProperties = {
  id: MessageID.YT_ORG_LINK,
  title: "Get yt org link",
  contexts: ["all"],
  documentUrlPatterns: ["*://www.youtube.com/watch*"],
}

chrome.contextMenus.create(getYTOrgLinkMenuItem);

chrome.contextMenus.onClicked.addListener(
  async function (clickData: chrome.contextMenus.OnClickData): Promise<void> {
    if (clickData.menuItemId === getYTOrgLinkMenuItem.id) {
      const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
      if (tab.id) {
        const response = await chrome.tabs.sendMessage(tab.id, { id: getYTOrgLinkMenuItem.id });
        navigator.clipboard.writeText(response);
      }

    }
  }
)
