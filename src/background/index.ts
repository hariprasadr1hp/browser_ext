const menuItem: chrome.contextMenus.CreateProperties = {
  id: "menu_id",
  title: "menu_title",
  contexts: ["selection"]
}

chrome.contextMenus.create(
  menuItem,
  function (): void {
    console.log(`new menu item created!`);
  }
);

chrome.contextMenus.onClicked.addListener(
  function (clickData: chrome.contextMenus.OnClickData): void {
    if (clickData.menuItemId === menuItem.id && clickData.selectionText) {
      console.log(clickData.selectionText);
    }
  },
)


console.log("backgroung script running!");
