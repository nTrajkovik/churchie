import userSelectEvent from './user-select';
import initAnchor from './init-anchor';
import ReactDOM from 'react-dom';

function setupHighlightListener() {
  (function resetListeners() {
    userSelectEvent(() => {
      if (document.getElementById('churchie-modal-container') === null) {
        initAnchor((props) => {
          ReactDOM.render(<Modal {...props} />, document.getElementById('churchie-anchor'));
          resetListeners();
        });
      }
    });
  }());

  document.body.addEventListener('click', (e) => {
    if ((e.target.parentNode.getAttribute('data-churchie-anchor') !== 'true') && (document.getElementById('churchie-anchor') !== null)) {
      const body = document.getElementsByTagName('body');

      body[0].removeChild(document.getElementById('churchie-anchor'));
    }
  });
}

export default setupHighlightListener;
