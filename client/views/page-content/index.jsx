import React from 'react';
import ReactDOM from 'react-dom';
import userSelectEvent from '../user-select';
import initAnchor from './init-anchor';
import Modal from '../../components/Modal/index.jsx';

userSelectEvent.then(() =>{
  initAnchor((props) =>{
    console.log('MODAL RENDERED');
    ReactDOM.render(<Modal {...props}/>, document.getElementById('churchie-anchor'));
  });
});



