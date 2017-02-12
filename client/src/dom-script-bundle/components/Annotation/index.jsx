import React, { Component } from 'react';
import AnnotationDisplay from './AnnotationDisplay';
import Comments from './Comments';
import Modal from '../Modal';

class Annotation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayComments: false,
      comments: [{}],
      username: '',
    };
  }

  componentWillMount() {
    this.setState({
      username: chrome.runtime.sendMessage('GET_USERNAME', (name) => {
        console.log('Chrome username on sync Object:', name);
        return name;
      }),
    });
  }


  render() {
    const { top } = this.props;
    return (
      <Modal top={top}>
        { this.state.displayComments ? <AnnotationDisplay /> : <Comments comments={this.state.comments} /> }
      </Modal>
    );
  }
}

export default Annotation;
