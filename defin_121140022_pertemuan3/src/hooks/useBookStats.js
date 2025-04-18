// src/hooks/useBookStats.js
import { useBooks } from '../context/BookContext';
import { useMemo } from 'react';

function useBookStats() {
  const { books } = useBooks();

  return useMemo(() => {
    return {
      owned: books.filter(book => book.status === 'owned').length,
      reading: books.filter(book => book.status === 'reading').length,
      wishlist: books.filter(book => book.status === 'wishlist').length,
      total: books.length
    };
  }, [books]);
}

export default useBookStats;
