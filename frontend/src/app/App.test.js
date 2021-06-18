import React from "react";
import { render, screen } from '@testing-library/react';
import App from './index';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Carro Assignment/i);
  expect(linkElement).toBeInTheDocument();
});
