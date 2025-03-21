chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "selectedText") {
    const selectedText = message.text;

    // Send the selected text to ChatGPT API (using fetch)
    fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer YOUR_OPENAI_API_KEY`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: selectedText }],
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log("ChatGPT Response:", data.choices[0].message.content);
    })
    .catch(err => console.error(err));
  }
});
