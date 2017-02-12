import React from 'react';
import styles from './main.css';
import Annotation from '../App/Annotation';

function Modal({ top }) {
  const position = {
    top: `${top}px`,
  };

  return (
    <div id="churchie-modal-container" className={styles.masterModalContainer} style={position}>
      <Annotation />
    </div>
  );
}

Modal.propTypes = {
  top: React.propTypes.string.isRequired,
};

export default Modal;
