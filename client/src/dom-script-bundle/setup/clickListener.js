import PubNub, { pubnub as pubnubInstance } from '../../helpers/pubnub/userHelpers';

function setupClickListener(user, username) {
  PubNub.getHistory(pubnubInstance, document.URL, (data) => {
    console.log('data', data);
  });
}

function makeAnnotationHighlight(selection) {
  let mark = document.createElement('mark');
  mark.setAttribute('id', 'my-mark')
  selection.getRangeAt(0).surroundContents(mark);
  selection.empty();
}

export default setupClickListener;
