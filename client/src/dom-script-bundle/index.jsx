import setupHighlightListener from './setup/highlightListener';
import setupClickListener from './setup/clickListener';
import PubNub from '../helpers/pubnub/userHelpers';

chrome.runtime.sendMessage('GET_CHROME_ID', (user) => {
  chrome.runtime.sendMessage('GET_USERNAME', (username) => {
    console.log("Chrome User Object:", user);
    console.log("Chrome Username", username);

    setupClickListener(user, username)

    setupHighlightListener(user, username);
  })
});
