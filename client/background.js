import PubNub from 'pubnub';

console.log("THIS HAPPENED FOR THE THING LOL");

const clientPubnub = new PubNub({
  publishKey: 'pub-c-302c6d93-f6f7-4ea4-8055-6f14819b5414',
  subscribeKey: 'sub-c-624b07aa-f090-11e6-8e1d-02ee2ddab7fe',
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('something incoming to the background process');
    // if (request.type === "GET_ANNOTATIONS") {
      console.log("at least we got this", request);
      sendResponse({ primitive: 'hello worldddd' });
    // }
  });
