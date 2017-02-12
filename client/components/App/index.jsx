import React from 'react';
import styles from './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={styles.myDiv}>
        Hello world!
      </div>
    )
  }
}


export default App;
