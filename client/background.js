chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request === "GET_CHROME_ID") {
      chrome.identity.getProfileUserInfo(function(user) {
        sendResponse(user);
      });
    }
    return true;
  });
