import setupHighlightListener from './setup';

chrome.runtime.sendMessage('GET_CHROME_ID', (user) => {
  console.log("Chrome User Object:", user);
  setupHighlightListener();
});
