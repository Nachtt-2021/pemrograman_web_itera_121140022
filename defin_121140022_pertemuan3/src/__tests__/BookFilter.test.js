// src/__tests__/BookFilter.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookFilter from '../components/BookFilter/BookFilter';

test('updates search input value', () => {
  const setSearch = jest.fn();
  render(<BookFilter filter="all" setFilter={jest.fn()} search="" setSearch={setSearch} />);

  fireEvent.change(screen.getByPlaceholderText(/cari/i), {
    target: { value: 'React' }
  });

  expect(setSearch).toHaveBeenCalledWith('React');
});