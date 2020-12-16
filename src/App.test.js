import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './components/Header';
import About from './pages/About';
import Home from './pages/Home';

test('renders learn react link', () => {
  render(<App />);
});


test('render Home', () => {
  render(<Home />);
});

test('render About', () => {
  render(<About />);
});