import React, { Component } from 'react';
import AddComment from './AddComment';
import Comments from './Comments';
import Modal from '../Modal';
import {
  pubnub,
  createNewComment,
  initRealTimeListeners,
  getHistory,
} from '../../../helpers/pubnub/userHelpers';

class Annotation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
    // get history for this annotation channel
    getHistory(pubnub, (document.URL), (commentsArray) => {
      console.log("doesnt exist", commentsArray);
      const newComments = commentsArray.messages.map(({entry}) => {
        // initialize listeners for each comment channel
        console.log("A COMMENT", entry);
        // initRealTimeListeners(pubnub, entry.comment, (message) => {
        //   for (let i = 0; i < this.state.comments.length; i++) {
        //     const thisComment = this.state.comments[i];
        //     if (thisComment.comment === message.comment) {
        //       let update = [...this.state.comments];
        //       update[i] = message;
        //       update = update.sort((a, b) => a.up - b.up);
        //       this.setState({ comments: update });
        //       break;
        //     }
        //   }
        // });
        return new Promise((resolve, reject) => {
          pubnub.history({ channel: entry.comment, count: 1 }, (status, resp) => {
            resolve({
              raw: entry,
              votes: resp
            });
          });
        })
      });
      Promise.all(newComments)
        .then(data => {
          console.log('after promise', data);
          this.setState({
            comments: data,
          });
        });

    });
    // initialize listener for this annotation channel
    initRealTimeListeners(pubnub, (document.URL), (comment) => {
      const update = [...this.state.comments].push(comment);
      this.setState({ comments: update });
    });

    this.submitComment = this.submitComment.bind(this);
  }

  componentWillUnmount() {
    let channels = [(document.URL)];
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

  submitComment(formData) {
    let data = {
      comment: formData.comment,
      path: document.URL,
      googleId: this.props.user.id,
      name: this.props.username,
      annotation: (document.URL),
    };

    createNewComment(pubnub, data);
  }

  render() {
    const { top } = this.props;
    return (
      <Modal top={top}>
        { this.state.comments.length ? <div>
          <Comments comments={this.state.comments} upVoteCallback={this.upVoteCallback} />
        </div> : <div>No comments yet!</div> }
        <AddComment submit={this.submitComment} />
      </Modal>
    );
  }
}

export default Annotation;
