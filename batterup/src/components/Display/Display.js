import React, { Component } from 'react';

class Display extends Component {
  state = {
    balls: 0,
    strikes: 0
  };
  render() {
    return (
      <>
        <div data-testid="balls">Balls: {this.state.balls}</div>
        <div data-testid="strikes">Strikes: {this.state.strikes}</div>
      </>
    );
  }
}

export default Display;
