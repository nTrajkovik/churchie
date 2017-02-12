import React from 'react';
import ReactDOM from 'react-dom';
import userSelectEvent from './user-select';
import initAnchor from './init-anchor';
import Modal from '../../components/Modal/index.jsx';
import PubHelpers from '../../helpers/pubnub/userHelpers.js';

chrome.runtime.sendMessage("GET_CHROME_ID", function(response) {
  console.log("Chrome ID:", response);
});

function recursion() {
  userSelectEvent(() =>{
    if(document.getElementById('churchie-modal-container') === null) {
      initAnchor((props) =>{
        console.log('RENDERING...');
        const body = document.getElementsByTagName('body'),
          anchorEl = body[0].children[0],
          modalElExist = anchorEl.children;

        ReactDOM.render(<Modal {...props}/>, document.getElementById('churchie-anchor'));
        recursion();
      });
    }
  });
}

document.body.addEventListener('click', function(e) {
  if((e.target.parentNode.getAttribute('data-churchie-anchor') !== 'true') && (document.getElementById('churchie-anchor') !== null)){
    const body = document.getElementsByTagName('body');

    body[0].removeChild(document.getElementById('churchie-anchor'));
  }
});


recursion();
