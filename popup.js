document.getElementById("capture-text").addEventListener("click", async () => {
  // Trigger content script to take a screenshot of selected text
  chrome.runtime.sendMessage({ type: "takeScreenshot" });
});
