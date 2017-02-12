import React from 'react';
import ReactDOM from 'react-dom';
import initAnchor from './init-anchor';
import Modal from '../../components/Modal/index.jsx';

initAnchor((props) =>{
  ReactDOM.render(<Modal {...props}/>, document.getElementById('churchie-anchor'));
});


