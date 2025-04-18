// src/__tests__/BookList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import BookList from '../components/BookList/BookList';

test('displays message when no books available', () => {
  render(<BookList books={[]} onEdit={jest.fn()} onDelete={jest.fn()} />);
  expect(screen.getByText(/tidak ada/i)).toBeInTheDocument();
});