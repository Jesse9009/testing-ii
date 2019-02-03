import React, { Component } from 'react';
import './App.css';

import Display from './components/Display/Display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Batter Up!</h1>
        <Display />
      </div>
    );
  }
}

export default App;
