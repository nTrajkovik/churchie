import React from 'react';
import Comment from './Comment';

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ul>
        { this.props.comments.map((comment, index) => {
          console.log("indiv comment", comment);
          return <Comment key={JSON.stringify(comment) + index} comment={comment} upvoteCallback={this.props.upvoteCallback} />
        }) }
      </ul>
    );
  }
}

// Comments.propTypes = {
//   commments: React.propTypes.object.isRequired,
// };

export default Comments;
