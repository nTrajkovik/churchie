import React from 'react';
import ReactDOM from 'react-dom';
import Annotate from '../components/Annotate';
import userSelectEvent from './user-select';
import initAnchor from './init-anchor';

function setupHighlightListener() {
  (function resetListeners() {
    userSelectEvent(() => {
      if (document.getElementById('churchie-modal-container') === null) {
        initAnchor((props) => {
          ReactDOM.render(<Annotate {...props} />, document.getElementById('churchie-anchor'));
          resetListeners();
        });
      }
    });
  }());

  document.body.addEventListener('click', (e) => {
    if ((document.getElementById('churchie-anchor') !== null) && !isDescendant(document.getElementById('churchie-anchor'), e.target)) {
      const body = document.getElementsByTagName('body');
      body[0].removeChild(document.getElementById('churchie-anchor'));
    }
  });
}

function isDescendant(parent, child) {
  let node = child.parentNode;
  while (node != null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

export default setupHighlightListener;

