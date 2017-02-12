import React from 'react';
import styles from './main.css';

function Modal({ top }) {
  const position = {
    top: `${top}px`,
  };

  return (
    <div id="churchie-modal-container" className={styles.masterModalContainer} style={position} />
  );
}

Modal.propTypes = {
  top: React.PropTypes.number.isRequired,
};

export default Modal;
