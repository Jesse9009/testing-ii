import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    return (
      <div data-testid="dashboard">
        <button onClick={this.props.increaseStrikes}>Strike</button>
        <button onClick={this.props.increaseBalls}>Ball</button>
        <button onClick={this.props.foulBall}>Foul</button>
        <button onClick={this.props.freshAtBat}>Hit</button>
      </div>
    );
  }
}

export default Dashboard;
