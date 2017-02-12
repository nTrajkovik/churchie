import React from 'react';
import ReactDOM from 'react-dom';
import userSelectEvent from '../../user-select';
import initAnchor from './init-anchor';
import Modal from '../../components/Modal/index.jsx';

userSelectEvent.then(() =>{
  initAnchor((props) =>{
    console.log('RENDERING...');
    
    ReactDOM.render(<Modal {...props}/>, document.getElementById('churchie-anchor'));
  });
  
  document.body.addEventListener('click', function(e) {
    if(e.target.attributes[0] !== 'data-reactroot'){
      /*WHERE WE NEED TO CLOSE AND RESET MODAL*/
    }
  });
});



