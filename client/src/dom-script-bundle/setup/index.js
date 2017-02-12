import React from 'react';
import ReactDOM from 'react-dom';
import Rx from 'rxjs/Rx';
import Annotate from '../components/Annotate';
import userSelectEvent from './user-select';
import initAnchor from './init-anchor';

function setupHighlightListener() {
  const highlightObservable = Rx.Observable.fromEvent(document, 'mouseup')
    .filter(e => !isChildOfModal(e.srcElement))
    .do(removeMarker)
    .do(removeModal)
    .filter(e => window.getSelection().toString().length > 0)
    .map(e => window.getSelection())
    .do(makeMarker)
    .do(makeModal)
    .subscribe();
}

  function makeModal() {
    makeModalEntryPoint();
    console.log("THE THING", document.body.scrollTop);
    ReactDOM.render(<Annotate top={document.body.scrollTop} />, document.getElementById('churchie-anchor'));
  }

  function removeModal() {
    const modalAnchor = document.getElementById('churchie-anchor');
    if (modalAnchor !== null) {
      modalAnchor.parentNode.removeChild(modalAnchor);
    }
  }

  function makeModalEntryPoint() {
    const body = document.getElementsByTagName('body');
    const reactAnchor = document.createElement('div');

    reactAnchor.id = 'churchie-anchor';
    reactAnchor.setAttribute('data-churchie-anchor', true);
    body[0].insertBefore(reactAnchor, body[0].firstChild);
  }

  function removeMarker() {
    const existingMark = document.getElementById('my-mark');
    if (existingMark !== null) {
      const parentNode = existingMark.parentNode;
      while (existingMark.firstChild) {
        parentNode.insertBefore(existingMark.firstChild, existingMark);
      }
      parentNode.removeChild(existingMark);
    }
  }

  function makeMarker(selection) {
    let mark = document.createElement('mark');
    mark.setAttribute('id', 'my-mark')
    selection.getRangeAt(0).surroundContents(mark);
    selection.empty();
  }

  function isChildOfModal(target) {
    let node = target;
    while(node = node.parentNode) {
      if(node.id === 'churchie-anchor') {
        return true;
      }
    }
    return false;
  }

export default setupHighlightListener;
