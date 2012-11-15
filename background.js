// This event is fired each time the user updates the text in the omnibox,
// as long as the extension's keyword mode is still active.
var SPLUNK_URL = "https://logs.shopify.com:8000/en-US/app/search/flashtimeline?q=search ";
chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    console.log('inputChanged: ' + text);
    suggest([
      {content: text, description: "Search Shopify splunk for your query"}
    ]);
  });

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
  function(text) {
    console.log('inputEntered: ' + text);
    navigate(SPLUNK_URL + text);
  });

function navigate(url) {
  chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.update(tab.id, {
      url: url
    });
  });
}
