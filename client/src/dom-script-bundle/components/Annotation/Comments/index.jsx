import React from 'react';

class Comments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <ul>
        { this.props.commments.map((comment, index) =>
          <Comment key={JSON.stringify(comment) + index} comment={comment} />,
        ) }
      </ul>);
  }
}

// Comments.propTypes = {
//   commments: React.propTypes.object.isRequired,
// };

export default Comments;
