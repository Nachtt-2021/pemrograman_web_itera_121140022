// src/hooks/useGoogleBooks.js
import { useState } from 'react';

const useGoogleBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchBooks = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCtt11cDmP1QLSLvxKPP2OgT2ivl_unb0w`
      );
      const data = await response.json();
      setBooks(data.items || []);
    } catch (err) {
      setError("Terjadi kesalahan saat mencari buku.");
    } finally {
      setLoading(false);
    }
  };

  return { books, searchBooks, loading, error };
};

export default useGoogleBooks;
