import React, { useState } from 'react';
import useGoogleBooks from '../../hooks/useGoogleBooks';

function BookSearch() {
  const [query, setQuery] = useState('');
  const { books, searchBooks, loading, error } = useGoogleBooks();

  const handleSearch = () => {
    if (query) {
      searchBooks(query);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown} // Tambahkan event handler untuk mendeteksi tombol Enter
          placeholder="Cari buku..."
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      <button
        onClick={handleSearch}
        disabled={loading}
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {loading ? 'Mencari...' : 'Cari'}
      </button>

      {error && <p className="mt-2 text-red-500">{error}</p>}

      <ul className="mt-4 space-y-4">
        {books.map((book) => (
          <li key={book.id} className="p-4 border rounded-md shadow-sm">
            <h3 className="text-xl font-semibold">{book.volumeInfo.title}</h3>
            <p className="text-gray-700">Penulis: {book.volumeInfo.authors?.join(', ')}</p>
            <p className="mt-2 text-gray-600">{book.volumeInfo.description}</p>
            {book.volumeInfo.imageLinks && (
              <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
                className="mt-4 w-32 h-48 object-cover rounded-md"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookSearch;
