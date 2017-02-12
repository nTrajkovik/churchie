import React, { Component } from 'react';
import TextEditor from './TextEditor';
import Modal from '../../Modal';


class Annotate extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Modal top={this.props.top}>
        <TextEditor
          path={document.URL}
          googleId={this.props.googleId}
          name={this.props.username}
          annotation={this.props.selectionArea}
        />
      </Modal>
    );
  }
}

export default Annotate;
