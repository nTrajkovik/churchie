import React from 'react';
import ReactDOM from 'react-dom';

import App from '../../components/App';

const markerClass = 'churchie-marker',
  reactAnchor = document.getElementById(markerClass),
  props = {
    modalleft: reactAnchor.offsetLeft(),
    modalTop: reactAnchor.offsetTop()
  };


ReactDOM.render(<App />, document.getElementById('entry'));
