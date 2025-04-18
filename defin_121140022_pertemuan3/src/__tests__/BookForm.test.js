// src/__tests__/BookForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from '../components/BookForm/BookForm';

test('renders book form and submits correctly', () => {
  const handleSubmit = jest.fn();
  render(<BookForm onSubmit={handleSubmit} selectedBook={null} />);

  fireEvent.change(screen.getByPlaceholderText(/judul/i), {
    target: { value: 'Buku Test' }
  });
  fireEvent.change(screen.getByPlaceholderText(/penulis/i), {
    target: { value: 'Penulis Test' }
  });
  fireEvent.change(screen.getByDisplayValue('owned'), {
    target: { value: 'reading' }
  });

  fireEvent.click(screen.getByText(/simpan/i));
  expect(handleSubmit).toHaveBeenCalled();
});