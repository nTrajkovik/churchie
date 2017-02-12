import React, { Component } from 'react';
import AnnotationDisplay from './AnnotationDisplay';
import Comments from './Comments';

class Annotation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayComments: false,
    };
  }
  render() {
    return (
      <div>
        { this.state.displayComments ? <AnnotationDisplay /> : <Comments /> }
      </div>
    );
  }
}

export default Annotation;
