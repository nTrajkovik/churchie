import React, { Component } from 'react';
import AnnotationDisplay from './AnnotationDisplay';
import Comments from './Comments';
import Modal from '../Modal';

class Annotation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayComments: false,
    };
  }
  render() {
    const { top } = this.props;
    return (
      <Modal top={top}>
        { this.state.displayComments ? <AnnotationDisplay /> : <Comments /> }
      </Modal>
    );
  }
}

export default Annotation;
