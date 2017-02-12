chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if (request === 'GET_CHROME_ID') {
      chrome.identity.getProfileUserInfo((user) => {
        sendResponse(user);
      });
    } else if (request === 'GET_USERNAME') {
      chrome.storage.sync.get('username', (username) => {
        sendResponse(username);
      });
    }
    return true;
  });
