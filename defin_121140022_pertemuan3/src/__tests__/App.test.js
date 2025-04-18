// src/__tests__/App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test('renders navigation links', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText(/beranda/i)).toBeInTheDocument();
  expect(screen.getByText(/statistik/i)).toBeInTheDocument();
});
