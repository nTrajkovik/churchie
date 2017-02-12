import React from 'react';
import axios from 'axios';
import Comments from '../../../components/App/Comments/index';

class Annotation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };
  }

  componentWillMount() {
    axios.get(/* TODO: get url */)
      .then((res) => {
        this.setState({ comments: res });
      });
  }

  render() {
    return (
      <Comments props={this.state} />
    );
  }
}

export default Annotation;
