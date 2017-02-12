import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    console.log('comment props', this.props);
    return (
      <li>
        { this.props.comment }
        { this.props.imgPath ?
          <img className="userImage" alt={'Not found'} src={this.props.imgPath} /> :
          null }
        <button onClick={() => { this.props.upVoteCallback(this.props.comment); }}>upVote</button>
      </li>
    );
  }
}

// Comment.propTypes = {
//   comment: React.propTypes.string.isRequired,
//   imgPath: React.propTypes.string.isRequired,
// };

export default Comment;
