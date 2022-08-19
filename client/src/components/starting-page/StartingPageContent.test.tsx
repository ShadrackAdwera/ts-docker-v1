import React from 'react';
import { render, screen } from '@testing-library/react';
import StartingPage from './StartingPageContent';

test('renders reqct query', () => {
  render(<StartingPage />);
  const element = screen.getByText(/react query/i);
  expect(element).toBeInTheDocument();
});
