import PubNub from 'pubnub';


const clientPubnub = new PubNub({
  publishKey: 'pub-c-302c6d93-f6f7-4ea4-8055-6f14819b5414',
  subscribeKey: 'sub-c-624b07aa-f090-11e6-8e1d-02ee2ddab7fe',
});


const dbPubnub = new PubNub({
  publishKey: 'pub-c-302c6d93-f6f7-4ea4-8055-6f14819b5414',
  subscribeKey: 'sub-c-624b07aa-f090-11e6-8e1d-02ee2ddab7fe',
});

dbPubnub.addListener({
  message(m) {
    const chan = m.channel;
    if (chan === 'newAnnotation') {
      console.log('got message: ', m.message);
    }
  },
});
dbPubnub.subscribe({
  channels: ['newAnnotation'],
  withPresence: true,
});
// pubnub.addListener({

//   message(m) {
//         // handle message
//     const channelName = m.channel; // The channel for which the message belongs
//     const channelGroup = m.subscription; // The channel group or wildcard subscription match (if exists)
//     const pubTT = m.timetoken; // Publish timetoken
//     const msg = m.message; // The Payload
//   },
//   presence(p) {
//         // handle presence
//     const action = p.action; // Can be join, leave, state-change or timeout
//     const channelName = p.channel; // The channel for which the message belongs
//     const occupancy = p.occupancy; // No. of users connected with the channel
//     const state = p.state; // User State
//     const channelGroup = p.subscription; //  The channel group or wildcard subscription match (if exists)
//     const publishTime = p.timestamp; // Publish timetoken
//     const timetoken = p.timetoken;  // Current timetoken
//     const uuid = p.uuid; // UUIDs of users who are connected with the channel
//   },
//   status(s) {
//         // handle status
//   },
// });

// pubnub.subscribe({
//   channels: ['my_channel'],
//   withPresence: true, // also subscribe to presence instances.
// });

// pubnub.publish(
//   {
//     message: { such: 'object' },
//     channel: 'ch1',
//     sendByPost: false, // true to send via post
//     storeInHistory: false, // override default storage options
//     meta: { cool: 'meta' }, // publish extra meta with the request
//   },
//     (status, response) => {
//         // handle status, response
//     },
// );

// pubnub.unsubscribe({
//   channels: ['my_channel'],
// });


function getAnnotationInfo() {

}

function getModalInfo() {

}

function signInUser() {

}

// publishes a new annotation to the newAnnotation channel
function createNewAnnotation(annotation, url) {
  clientPubnub.publish(
    {
      message: {
        text: annotation,
        url,
      },
      channel: 'newAnnotation',
    },
    (status, response) => {
      console.log('status of published annotation is: ', status);
      console.log('response from published annotation is: ', response);
    },
  );
}

function createNewComment() {

}

function createNewUser() {

}

module.exports = {
  createNewAnnotation,
};
