chrome.runtime.onInstalled.addListener(async (opt) => {
  // Check if reason is install or update. Eg: opt.reason === 'install' // If extension is installed.
  // opt.reason === 'update' // If extension is updated.
  if (opt.reason === "install") {
    await chrome.storage.local.clear();
    console.log("installed");

    //   chrome.tabs.create({
    //     active: true,
    //     // Open the setup page and append `?type=install` to the URL so frontend
    //     // can know if we need to show the install page or update page.
    //     url: chrome.runtime.getURL('./src/setup/index.html?type=install'),
    //   })
  }

  if (opt.reason === "update") {
    console.log("updated");
    //   chrome.tabs.create({
    //     active: true,
    //     url: chrome.runtime.getURL('./src/setup/index.html?type=update'),
    //   })
  }
});

chrome.runtime.onMessage.addListener((obj, sender, response) => {
  const { type, value, pagePath } = obj;

  if (type == "NEW") {
    console.log(pagePath);
  }
});

console.log("background running...");

export { };
