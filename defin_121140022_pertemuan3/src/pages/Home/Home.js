// src/pages/Home/Home.js
import React, { useState } from 'react';
import BookForm from '../../components/BookForm/BookForm';
import BookList from '../../components/BookList/BookList';
import BookFilter from '../../components/BookFilter/BookFilter';
import BookSearch from '../../components/BookSearch/BookSearch'; // Import komponen BookSearch
import { useBooks } from '../../context/BookContext';

function Home() {
  const { books, addBook, updateBook, deleteBook } = useBooks();
  const [selectedBook, setSelectedBook] = useState(null);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const handleSubmit = (book) => {
    if (selectedBook) {
      updateBook(book);
      setSelectedBook(null);
    } else {
      addBook(book);
    }
  };

  // Filter buku berdasarkan status dan pencarian
  const filteredBooks = books.filter(book =>
    (filter === 'all' || book.status === filter) &&
    (book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-8 p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Manajemen Buku Pribadi</h1>

      {/* Pencarian Buku */}
      <section className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cari Buku di Google Books</h2>
        <BookSearch search={search} setSearch={setSearch} />
      </section>

      {/* Form untuk Menambah dan Mengedit Buku */}
      <section className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tambah / Edit Buku</h2>
        <BookForm onSubmit={handleSubmit} selectedBook={selectedBook} />
      </section>

      {/* Filter dan Daftar Buku */}
      <section className="bg-white p-6 rounded-xl shadow-lg">
        <BookFilter filter={filter} setFilter={setFilter} />
        <BookList books={filteredBooks} onEdit={setSelectedBook} onDelete={deleteBook} />
      </section>
    </div>
  );
}

export default Home;
