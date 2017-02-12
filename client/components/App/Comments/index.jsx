import React from 'react';

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ul>
        { this.props.commments.map(comment =>
          <Comment key={comment.id} comment={comment} />
        ) }
      </ul>);
  }
}

Comments.propTypes = {
  commments: React.propTypes.string.isRequired,
};

export default Comments;
