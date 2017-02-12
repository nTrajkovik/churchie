import React from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <li>
        { this.props.comment }
        { this.props.imgPath ?
          <img className="userImage" alt={'Not found'} src={this.props.imgPath} /> :
          null }
      </li>
    );
  }
}

Comment.propTypes = {
  comment: React.propTypes.string.isRequired,
  imgPath: React.propTypes.string.isRequired,
};

export default Comment;
