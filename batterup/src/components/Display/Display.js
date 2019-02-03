import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard';

class Display extends Component {
  state = {
    balls: 0,
    strikes: 0
  };

  increaseStrikes = () => {
    // e.preventDefault();
    this.setState(() => {
      if (this.state.strikes === 2) {
        return this.freshAtBat();
      } else {
        return { strikes: this.state.strikes + 1 };
      }
    });
  };

  increaseBalls = () => {
    // e.preventDefault();
    this.setState(() => {
      if (this.state.balls === 3) {
        return this.freshAtBat();
      } else {
        return { balls: this.state.balls + 1 };
      }
    });
  };

  freshAtBat = () => {
    // e.preventDefault();
    this.setState({ balls: 0, strikes: 0 });
  };

  foulBall = () => {
    // e.preventDefault();
    return this.state.strikes < 2 ? this.increaseStrikes() : null;
  };

  render() {
    return (
      <>
        {/* <div>Balls:</div> */}
        <div data-testid="balls">{this.state.balls}</div>
        {/* <div>Strikes:</div> */}
        <div data-testid="strikes">{this.state.strikes}</div>
        <Dashboard
          increaseStrikes={this.increaseStrikes}
          increaseBalls={this.increaseBalls}
          freshAtBat={this.freshAtBat}
          foulBall={this.foulBall}
        />
      </>
    );
  }
}

export default Display;
