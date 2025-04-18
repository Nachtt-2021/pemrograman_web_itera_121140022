// src/__tests__/Stats.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Stats from '../pages/Stats/Stats';
import * as BookContext from '../context/BookContext';

jest.mock('../hooks/useBookStats', () => () => ({
  owned: 1,
  reading: 2,
  wishlist: 3,
  total: 6
}));

test('renders stats page correctly', () => {
  render(<Stats />);
  expect(screen.getByText(/Dimiliki/i)).toBeInTheDocument();
  expect(screen.getByText(/sedang dibaca/i)).toBeInTheDocument();
  expect(screen.getByText(/ingin dibeli/i)).toBeInTheDocument();
});