import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../../components/Modal/index.jsx';

console.log("THIS THING WAS CALLED");

/*
Grab the top and left of the modal position on the page 
*/
const markerId = 'churchie-marker',
  reactAnchor = document.getElementById(markerClass),
  props = {
    modalTop: document.body.scrollTop
  };

ReactDOM.render(<Modal {...props} />, document.getElementById('churchie'));

