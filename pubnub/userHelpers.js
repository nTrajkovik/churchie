import PubNub from 'pubnub';
import { startUp, getAnnotations, postComment } from '../server/dbHelpers';

const clientPubnub = new PubNub({
  publishKey: 'pub-c-302c6d93-f6f7-4ea4-8055-6f14819b5414',
  subscribeKey: 'sub-c-624b07aa-f090-11e6-8e1d-02ee2ddab7fe',
});

const dbPubnub = new PubNub({
  publishKey: 'pub-c-302c6d93-f6f7-4ea4-8055-6f14819b5414',
  subscribeKey: 'sub-c-624b07aa-f090-11e6-8e1d-02ee2ddab7fe',
});

const getAnnotationsAndPublish = (message, channel) => {
  getAnnotations(message)
  .then(JSON.stringify)
  .then(annotations => (
    dbPubnub.publish({
      message: {
        annotations,
      },
      channel,
    },
    (status, response) => {
      console.log(`status of annotation publish is: ${status}`);
      console.log(`response from annotation publish is: ${response}`);
    })
  ));
};

const postNewCommentAndPublish = (message, channel) => {
  postComment(message)
  .then(JSON.stringify)
  .then(comment => (
    dbPubnub.publish({
      message: {
        comment,
      },
      channel,
    },
    (status, response) => {
      console.log(`status of annotation publish is: ${status}`);
      console.log(`response from annotation publish is: ${response}`);
    })
  ));
};

dbPubnub.addListener({
  message(m) {
    const { message, chan } = m;
    if (chan === 'newComment') {
      console.log('got message in newComment', message);
      postNewCommentAndPublish(message, message.path);
    }
    if (chan === 'lobby') {
      console.log('got message in lobby', message);
      startUp(message)
      .then(() => { console.log('started up'); });
    }
    if (chan === 'request') {
      console.log('got message in request', message);
      getAnnotationsAndPublish(message, 'chromeID'); // XXXXXXXXX
    }
  },
});

dbPubnub.subscribe({
  channels: ['newComment', 'lobby', 'request'],
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


function initializeUser(user, googleId) {
  debugger;
  clientPubnub.subscribe({
    channels: [user],
    withPresence: true,
  }, (status, response) => {
    console.log(`status of subscription to ${user} is: ${status}`);
    console.log(`response of subscription to ${user} is: ${response}`);
  });
}

function initializeModal(googleId, annotation, callback) {
  clientPubnub.subscribe({
    channels: [annotation],
    withPresence: true,
  }, (status, response) => {
    console.log(`status of subscription to ${annotation} is: ${status}`);
    console.log(`response of subscription to ${annotation} is: ${response}`);
  });

  clientPubnub.publish(
    {
      message: {
        type: 'annotation',
        googleId,
        annotation,
      },
      channel: 'request',
    },
    (status, response) => {
      console.log(`status of annotation request is: ${status}`);
      console.log(`response from annotation request is: ${response}`);
      // callback(response);
    },
  );
}

function intializeAnnotations(path, googleId, callback) {
  clientPubnub.subscribe({
    channels: [path],
    withPresence: true,
  }, (status, response) => {
    console.log(`status of subscription to ${path} is: ${status}`);
    console.log(`response of subscription to ${path} is: ${response}`);
  });

  clientPubnub.publish(
    {
      message: {
        type: 'path',
        googleId,
        path,
      },
      channel: 'request',
    },
    (status, response) => {
      console.log('status of url request is: ', status);
      console.log('response from url request is: ', response);
      // callback(response);
    },
  );
}

// publishes a new annotation to the newAnnotation channel
function createNewComment(name, googleId, comment, path, annotation, annotationId, callback) {
  clientPubnub.publish(
    {
      message: {
        comment,
        path,
        googleId,
        name,
        annotation,
        annotationId,
      },
      channel: 'newComment',
    },
    (status, response) => {
      console.log('status of published annotation is: ', status);
      console.log('response from published annotation is: ', response);
      // callback(response);
    },
  );
}

function publishToLobby(name, googleId) {
  clientPubnub.publish(
    {
      message: {
        name,
        googleId,
      },
      channel: 'lobby',
    },
    (status, response) => {
      console.log('status of published annotation is: ', status);
      console.log('response from published annotation is: ', response);
    },
  );
}


module.exports = {
  publishToLobby,
  createNewComment,
  intializeAnnotations,
  initializeModal,
  initializeUser,
};
