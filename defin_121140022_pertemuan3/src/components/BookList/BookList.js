import React from 'react';
import PropTypes from 'prop-types';

function BookList({ books, onEdit, onDelete }) {
  if (books.length === 0) return <p className="text-center text-gray-500">Tidak ada buku.</p>;

  return (
    <ul className="space-y-4">
      {books.map(book => (
        <li key={book.id} className="flex items-center justify-between p-4 bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <div className="flex-1">
            <strong className="block text-xl font-semibold">{book.title}</strong>
            <p className="text-sm text-gray-600">oleh {book.author}</p>
            <em className="text-sm text-gray-500">{book.status}</em>
          </div>
          <div className="flex gap-3">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 focus:outline-none transition-colors"
              onClick={() => onEdit(book)}
            >
              Edit
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400 focus:outline-none transition-colors"
              onClick={() => onDelete(book.id)}
            >
              Hapus
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default BookList;
