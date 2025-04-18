// src/context/BookContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useLocalStorage('books', []);

  const addBook = (book) => setBooks([...books, book]);

  const updateBook = (updatedBook) => {
    setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, updateBook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
}

export const useBooks = () => useContext(BookContext);