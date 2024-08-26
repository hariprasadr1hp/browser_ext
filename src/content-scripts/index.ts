console.log("Content script loaded");

function helloFromContentScript(): void {
  console.log("hello from content-script!");
}

helloFromContentScript();
window.helloFromContentScript = helloFromContentScript;

