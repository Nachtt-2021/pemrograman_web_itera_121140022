import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const initialForm = {
  id: null,
  title: '',
  author: '',
  status: 'owned'
};

function BookForm({ onSubmit, selectedBook }) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');

  useEffect(() => {
    if (selectedBook) {
      setForm(selectedBook);
    }
  }, [selectedBook]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author) {
      setError('Judul dan penulis wajib diisi');
      return;
    }
    onSubmit({ ...form, id: form.id || Date.now().toString() });
    setForm(initialForm);
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">{form.id ? 'Update' : 'Tambah'} Buku</h2>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Judul Buku"
          value={form.title}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <input
          type="text"
          name="author"
          placeholder="Penulis"
          value={form.author}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="owned">Dimiliki </option>
          <option value="reading">Sedang Dibaca</option>
          <option value="wishlist">Ingin Dibeli</option>
        </select>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg mt-4 hover:bg-blue-600">
        {form.id ? 'Update' : 'Tambah'} Buku
      </button>
    </form>
  );
}

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  selectedBook: PropTypes.object
};

export default BookForm;
