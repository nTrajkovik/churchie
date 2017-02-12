import React, { Component } from 'react';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let positioning = {
      top: this.props.top,
      left: this.props.left
    }
    return (
      <div id="master-modal-container" style={positioning}>
          im a modal
      </div>
    )
  }
}
