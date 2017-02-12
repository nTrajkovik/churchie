import React from 'react';
import styles from './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSignedIn: chrome.storage.get('username'),
    };
  }

  render() {
    return (
      this.state.isSignedIn ?
        <div className={styles.myDiv}>
        Hello world!
        </div> :
          <div>sign in foo</div>

    );
  }
}
console.log('');


export default App;
