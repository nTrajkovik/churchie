import React, { Component } from 'react';
import AnnotationDisplay from './AnnotationDisplay';
import Comments from './Comments';
import Modal from '../Modal';
import { pubnub, initRealTimeListeners, getHistory, publishMessage } from '../../../helpers/pubnub/userHelpers';

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
    // get history for this annotation channel
    getHistory(pubnub, this.props.annotation, (commentsArray) => {
      const newComments = commentsArray.map((comment) => {
        // initialize listeners for each comment channel
        initRealTimeListeners(pubnub, comment.comment, (message) => {
          for (let i = 0; i < this.state.comments.length; i++) {
            const thisComment = this.state.comments[i];
            if (thisComment.comment === message.comment) {
              let update = [...this.state.comments];
              update[i] = message;
              update = update.sort((a, b) => a.up - b.up);
              this.setState({ comments: update });
              break;
            }
          }
        });
        return pubnub.history({ channel: comment.comment, count: 1 })[0];
      }).sort((a, b) => a.up - b.up);
      this.setState({ comments: newComments });
    });
    // initialize listener for this annotation channel
    initRealTimeListeners(pubnub, this.props.annotation, (comment) => {
      const update = [...this.state.comments].push(comment);
      this.setState({ comments: update });
    });
  }

  componentWillUnmount() {
    let channels = [this.props.annotation];
    this.state.comments.forEach((comment) => {
      channels.push(comment.comment);
    });
    pubnub.unsubscribe({
      channels,
    });
  }

  upVoteCallback(option) {
    const { comment, path, googleId, name, annotation, up, version } = option;
    const optionUpdate = {
      comment,
      path,
      googleId,
      name,
      annotation,
      up: up + 1,
      version: version + 1,
    };
    publishMessage(pubnub, comment, optionUpdate);
  }

  render() {
    const { top } = this.props;
    if (!this.state.comments.length) {
      return (
        <div>No comments</div>
      );
    }
    return (
      <Modal top={top}>
        { this.state.displayComments ? <AnnotationDisplay /> : <Comments comments={this.state.comments} upVoteCallback={this.upVoteCallback} /> }
      </Modal>
    );
  }
}

export default Annotation;
