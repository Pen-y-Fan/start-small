import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello world', () => {
  render(<App />);
  const h1Element = screen.getByText(/Hello world/i);
  expect(h1Element).toBeInTheDocument();
});
