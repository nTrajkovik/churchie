import React from 'react';
import Signin from '../../components/Signin';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
    this.setStorageSync = this.setStorageSync.bind(this);
  }


  componentWillMount() {
    chrome.storage.sync.get('username', a => this.setUsername(a));
  }

  setUsername(name) {
    this.setState({
      username: name,
    }, () => console.log('username set'));
  }

  setStorageSync(name) {
    chrome.storage.sync.set({ username: name }, () => console.log('username set on sync'));
    this.setUsername(name);
  }

  render() {
    return this.state.username ? <div>Hello world!</div> : <Signin setStorageSync={this.setStorageSync} />;
  }


}

export default App;
