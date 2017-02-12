import React from 'react';
import ReactDOM from 'react-dom';
import userSelectEvent from '../../user-select';
import initAnchor from './init-anchor';
import Modal from '../../components/Modal/index.jsx';


function recursion() {
  userSelectEvent(() =>{
    initAnchor((props) =>{
      console.log('RENDERING...');

      ReactDOM.render(<Modal {...props}/>, document.getElementById('churchie-anchor'));
      recursion();
    });
  });
}

document.body.addEventListener('click', function(e) {
  if((e.target.parentNode.getAttribute('data-churchie-anchor') !== 'true') && (document.getElementById('churchie-anchor') !== null)){
    const body = document.getElementsByTagName('body');

    body[0].removeChild(document.getElementById('churchie-anchor'));
  }
});


recursion();
