import React from 'react';
import Comments from '../Comments/index';

class Annotation extends React.Component {
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

export default Annotation;
