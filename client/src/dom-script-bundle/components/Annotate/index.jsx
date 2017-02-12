import React, { Component } from 'react';
import TextEditor from './TextEditor';
import Modal from '../Modal';

class Annotate extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Modal top={this.props.top}>
        <TextEditor />
      </Modal>
    );
  }
}

export default Annotate;
