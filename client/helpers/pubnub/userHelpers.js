import PubNub from 'pubnub';

const pubnub = new PubNub({
  publishKey: 'pub-c-302c6d93-f6f7-4ea4-8055-6f14819b5414',
  subscribeKey: 'sub-c-624b07aa-f090-11e6-8e1d-02ee2ddab7fe',
});

function getHistory(pubnub, channel, callback) {
  pubnub.history({
    channel,
    count: 100,
  }, (status, response) => {
    if (status.error) { console.log('status of history request: ', status); }
    console.log('got history for ', channel, response);
    callback(response);
  });
}

function initRealTimeListeners(pubnub, chan, callback) {
  pubnub.addListener({
    message({ channel, message }) {
      if (channel === chan) {
        console.log('got message in ', channel, 'that is: ', message);
        callback(message);
      }
    },
  });
  pubnub.subscribe({
    channels: [chan],
    withPresence: true,
  });
}

const publishMessage = function (pubnub, channel, { comment, path, googleId, name, annotation }) {
  pubnub.publish(
    {
      message: {
        comment,
        path,
        googleId,
        name,
        annotation,
      },
      channel,
    },
    (status) => {
      if (status.error) { console.log('ERROR: ', status); }
    });
};

// publishes a new annotation to the newAnnotation channel
function createNewComment(pubnub, { comment, path, googleId, name, annotation }) {
  publishMessage(pubnub, googleId, { comment, path, googleId, name, annotation });
  publishMessage(pubnub, annotation, { comment, path, googleId, name, annotation });
}


module.exports = {
  pubnub,
  publishMessage,
  createNewComment,
  getHistory,
  initRealTimeListeners,
};

