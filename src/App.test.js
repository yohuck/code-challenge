import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const title = screen.getByText(/Aclymate/i);
  expect(title).toBeInTheDocument();
});

test('renders subtitle', () => {
  render(<App />);
  const subtitle = screen.getByText(/Top 100 Albums/i);
  expect(subtitle).toBeInTheDocument();
});

test('renders search bar', () => {
  render(<App />);
  const searchBar = screen.getByPlaceholderText(/Search/i);
  expect(searchBar).toBeInTheDocument();
});

test('renders reset button', () => {
  render(<App />);
  const resetButton = screen.getByText(/Reset/i);
  expect(resetButton).toBeInTheDocument();
});

test('renders list', () => {
  render(<App />);
  const list = screen.getByRole('list');
  expect(list).toBeInTheDocument();
});

