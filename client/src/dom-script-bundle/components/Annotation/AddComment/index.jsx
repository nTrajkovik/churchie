import React, { Component } from 'react';
import TextEditor from './TextEditor';

class AddComment extends Component {
  render() {
    return (
      <TextEditor submit={this.props.submit}/>
    )
  }
}

export default AddComment;
