import React, { Component } from 'react';
import './App.css';

import Disaply from './components/Display/Display';
import Dashboard from './components/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Batter Up!</h1>
        <Disaply />
        <Dashboard />
      </div>
    );
  }
}

export default App;
