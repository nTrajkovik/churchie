import React from 'react';
import Modal from '../../components/Modal';
import PubHelpers from '../../helpers/pubnub/userHelpers';

chrome.runtime.sendMessage('GET_CHROME_ID', (user) => {

  (function setupHighlightListener() {
    userSelectEvent(() => {
      if (document.getElementById('churchie-modal-container') === null) {
        initAnchor((props) => {
          ReactDOM.render(<Modal {...props} />, document.getElementById('churchie-anchor'));
          setupHighlightListener();
        });
      }
    });
  })();

  document.body.addEventListener('click', (e) => {
    if ((e.target.parentNode.getAttribute('data-churchie-anchor') !== 'true') && (document.getElementById('churchie-anchor') !== null)) {
      const body = document.getElementsByTagName('body');

      body[0].removeChild(document.getElementById('churchie-anchor'));
    }
  });

  console.log('Chrome ID:', user);
});
