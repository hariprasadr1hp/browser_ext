import "./context-menu/all-pages"
import "./context-menu/youtube"

console.log("background script running!");

chrome.commands.onCommand.addListener((command) => {
  if (command === "open_popup") {
    console.log(`triggered popup at ${new Date().toISOString()}`)
    chrome.action.openPopup();
  }
});
