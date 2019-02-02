import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';
import Disaply from './components/Display/Display';
import Dashboard from './components/Dashboard/Dashboard';

describe('The Batter Up React App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('the display component', () => {
    it('displays the correct number of strikes when the "Strike" button is clicked', () => {});
    it('displays the correct number of balls when the "Ball" button is clicked', () => {});
    it('resets balls and strikes to 0 if player reaches 3 strikes or 4 balls', () => {});
    it('resets balls and strikes to 0 if player connects any type of hit(The "hit" button is clicked)', () => {});
  });

  describe('the dashboard component', () => {
    it('has a button that for a person to click to increase strike count', () => {});
    it('has a button that for a person to click to increase ball count', () => {});
    it('has a button that for a person to click to indicate a foul ball', () => {});
    it('has a button that for a person to click to indicate a hit', () => {});
  });
});
