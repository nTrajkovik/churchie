import React from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rxjs/Rx';
import Annotation from '../components/Annotation';

function setupHighlightListener(user, username) {
  const ModalHelpers = {
    makeEntryPoint() {
      const body = document.getElementsByTagName('body');
      const reactAnchor = document.createElement('div');

      reactAnchor.id = 'churchie-anchor';
      reactAnchor.setAttribute('data-churchie-anchor', true);
      body[0].insertBefore(reactAnchor, body[0].firstChild);
    },
    makeModal(selection) {
      ReactDOM.render(
        <Annotation
          annotation={selection.toString()}
          top={document.body.scrollTop}
          user={user}
          username={username}
        />,
        document.getElementById('churchie-anchor'));
    },
    removeModal() {
      const modalAnchor = document.getElementById('churchie-anchor');
      if (modalAnchor !== null) {
        modalAnchor.parentNode.removeChild(modalAnchor);
      }
    },
    isChildOfModal(target) {
      let node = target;
      while (node = node.parentNode) {
        if (node.id === 'churchie-anchor') {
          return true;
        }
      }
      return false;
    },
  };

  const MarkerHelpers = {
    makeMarker(selection) {
      let mark = document.createElement('mark');
      mark.setAttribute('id', 'my-mark');
      selection.getRangeAt(0).surroundContents(mark);
      selection.empty();
    },
    removeMarker() {
      const existingMark = document.getElementById('my-mark');
      if (existingMark !== null) {
        const parentNode = existingMark.parentNode;
        while (existingMark.firstChild) {
          parentNode.insertBefore(existingMark.firstChild, existingMark);
        }
        parentNode.removeChild(existingMark);
      }
    },
  };

  function removeOldElements() {
    ModalHelpers.removeModal();
    MarkerHelpers.removeMarker();
  }

  function makeNewElements(selection) {
    ModalHelpers.makeEntryPoint();
    ModalHelpers.makeModal(selection);
    MarkerHelpers.makeMarker(selection);
  }

  Rx.Observable.fromEvent(document, 'mouseup')
    .filter(e => {
      let res = !ModalHelpers.isChildOfModal(e.srcElement);
      if (res) {
        e.stopPropagation();
      }
      return res;
    })
    .do(removeOldElements)
    .filter(e => window.getSelection().toString().length > 0)
    .map(e => window.getSelection())
    .do(selection => console.log("Selection:", selection))
    .do(makeNewElements)
    .subscribe();
}

export default setupHighlightListener;
