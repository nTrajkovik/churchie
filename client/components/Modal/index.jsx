import React, { Component } from 'react';
import styles from './main.css';
import Annotation from '../App/Annotation/index.jsx';

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
        <Annotation />
      </div>
    );
  }
}

export default Modal;
