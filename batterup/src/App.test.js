import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';
import Disaply from './components/Display/Display';
import Dashboard from './components/Dashboard/Dashboard';

describe('The Batter Up React App', () => {
  it('renders without crashing', () => {
    render(<App />);
  });

  describe('the display component', () => {
    it('displays the correct number of strikes when the "Strike" button is clicked.', () => {
      const dashboard = render(<Dashboard />);
      const strikeBtn = dashboard.getByText(/strike/i);
      fireEvent.click(strikeBtn);

      const display = render(<Display />);
      const strikesDisplayed = display.getByTestId('strikes');
      expect(strikesDisplayed).toHaveTextContent('1');
    });
    it('displays the correct number of balls when the "Ball" button is clicked.', () => {
      const dashboard = render(<Dashboard />);
      const ballBtn = dashboard.getByText(/ball/i);
      fireEvent.click(ballBtn);

      const display = render(<Display />);
      const ballsDisplayed = display.getByTestId('balls');
      expect(ballsDisplayed).toHaveTextContent('1');
    });
    it('increases the stike count when the "Foul" button is pressed if player has 0 or 1 strikes.', () => {
      const dashboard = render(<Dashboard />);
      const foulBtn = dashboard.getByText(/foul/i);
      fireEvent.click(foulBtn);

      const display = render(<Display />);
      const strikesDisplayed = display.getByTestId('strikes');
      expect(strikesDisplayed).toHaveTextContent('1');
    });
    it('increases the stike count when the "Foul" button is pressed if player has 0 or 1 strikes.', () => {
      const dashboard = render(<Dashboard />);
      const foulBtn = dashboard.getByText(/foul/i);
      fireEvent.click(foulBtn); // 1
      fireEvent.click(foulBtn); // 2
      fireEvent.click(foulBtn); // stays at 2

      const display = render(<Display />);
      const strikesDisplayed = display.getByTestId('strikes');
      expect(strikesDisplayed).toHaveTextContent('1');
    });
    it('resets balls and strikes to 0 if player reaches 3 strikes.', () => {
      const dashboard = render(<Dashboard />);
      const strikeBtn = dashboard.getByText(/strike/i);
      fireEvent.click(strikeBtn); // 1
      fireEvent.click(strikeBtn); // 2
      fireEvent.click(strikeBtn); // back to 0

      const display = render(<Display />);
      const strikesDisplayed = display.getByTestId('strikes');
      expect(strikesDisplayed).toHaveTextContent('0');
    });
    it('resets balls and strikes to 0 if player reaches 4 balls.', () => {
      const dashboard = render(<Dashboard />);
      const ballBtn = dashboard.getByText(/ball/i);
      fireEvent.click(ballBtn); // 1
      fireEvent.click(ballBtn); // 2
      fireEvent.click(ballBtn); // 3
      fireEvent.click(ballBtn); // back to 0

      const display = render(<Display />);
      const ballsDisplayed = display.getByTestId('balls');
      expect(ballsDisplayed).toHaveTextContent('0');
    });
    it('resets balls and strikes to 0 if player connects any type of hit(The "Hit" button is clicked).', () => {
      const dashboard = render(<Dashboard />);
      const hitBtn = dashboard.getByText(/hit/i);
      fireEvent.click(hitBtn);

      const display = render(<Display />);
      const ballsDisplayed = display.getByTestId('balls');
      const strikesDisplayed = display.getByTestId('strikes');
      expect(ballsDisplayed).toHaveTextContent('0');
      expect(strikesDisplayed).toHaveTextContent('0');
    });
  });

  describe('the dashboard component', () => {
    it('has a button for a person to click labelled "Strike".', () => {
      const component = render(<Dashboard />);
      const strike = component.getByText(/strike/i);
      expect(strike).toHaveTextContent(/strike/i);
    });
    it('has a button for a person to click labelled "Ball".', () => {
      const component = render(<Dashboard />);
      const ball = component.getByText(/ball/i);
      expect(ball).toHaveTextContent(/ball/i);
    });
    it('has a button for a person to click labelled "Foul".', () => {
      const component = render(<Dashboard />);
      const foul = component.getByText(/foul/i);
      expect(foul).toHaveTextContent(/foul/i);
    });
    it('has a button for a person to click labelled "Hit".', () => {
      const component = render(<Dashboard />);
      const hit = component.getByText(/hit/i);
      expect(hit).toHaveTextContent(/hit/i);
    });
  });
});
