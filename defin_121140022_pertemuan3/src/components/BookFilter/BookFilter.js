import React from 'react';
import PropTypes from 'prop-types';

function BookFilter({ filter, setFilter, search, setSearch }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center mb-6">
      <div className="flex items-center space-x-2">
        <label htmlFor="filter" className="text-gray-600">Filter:</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">Semua</option>
          <option value="owned">Dimiliki</option>
          <option value="reading">Sedang Dibaca</option>
          <option value="wishlist">Ingin Dibeli</option>
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <label htmlFor="search" className="text-gray-600">Cari:</label>
        <input
          id="search"
          type="text"
          placeholder="Cari buku..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 w-full md:w-60 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}

BookFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired
};

export default BookFilter;
