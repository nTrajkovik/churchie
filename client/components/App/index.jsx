import React from 'react';
import styles from './styles.css';
import { initializeUser, publishToLobby, intializeAnnotations, createNewComment } from '../../../pubnub/userHelpers';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    initializeUser('Ian Stinson', 'iuwehpg8714y30g2bhf');
    return (
      <div className={styles.myDiv}>
        Hello world!
      </div>
    )
  }
}


export default App;
