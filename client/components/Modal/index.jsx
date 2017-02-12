import React, { Component } from 'react';
import styles from './main.css';

console.log('stykes', styles);

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const position = {
      'top': this.props.top
    };

    return (
      <div className={styles.masterModalContainer} style={position}>
          im a modal
      </div>
    )
  }
}

export default Modal;
