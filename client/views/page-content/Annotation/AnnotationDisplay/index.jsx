import React, { Component } from 'react';
import Comments from '../Comments/index';

class AnnotationDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  render() {
    return this.state.comments.length ?
      <Comments /> :
      null;
  }
}

export default AnnotationDisplay;
