import React, { Component } from 'react';
import AnnotationDisplay from './AnnotationDisplay';
import Comments from './Comments';

class Annotation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'annotation-display',
    };
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}
