import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import useBookStats from '../../hooks/useBookStats';

// Daftarkan komponen yang diperlukan dari Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Stats() {
  const stats = useBookStats();

  // Data untuk chart
  const chartData = {
    labels: ['Dimiliki', 'Sedang Dibaca', 'Ingin Dibeli'],
    datasets: [
      {
        label: 'Jumlah Buku',
        data: [stats.owned, stats.reading, stats.wishlist],
        backgroundColor: ['#1D4ED8', '#F59E0B', '#10B981'], // Warna untuk masing-masing kategori
        borderColor: ['#1D4ED8', '#F59E0B', '#10B981'],
        borderWidth: 1,
      },
    ],
  };

  // Opsi konfigurasi chart
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Statistik Buku',
        font: {
          size: 18,
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw} Buku`, // Menambahkan unit "Buku" di label tooltip
        },
      },
    },
  };

  return (
    <div className="p-6 max-w-xl mx-auto bg-white border rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Statistik Buku</h2>
      
      <Bar data={chartData} options={chartOptions} />

      <ul className="space-y-4 mt-6">
        <li className="flex justify-between text-lg text-gray-700">
          <span className="font-medium">Dimilikki:</span> <span className="text-blue-600">{stats.owned}</span>
        </li>
        <li className="flex justify-between text-lg text-gray-700">
          <span className="font-medium">Sedang Dibaca:</span> <span className="text-yellow-500">{stats.reading}</span>
        </li>
        <li className="flex justify-between text-lg text-gray-700">
          <span className="font-medium">Ingin Dibeli:</span> <span className="text-green-500">{stats.wishlist}</span>
        </li>
        <li className="flex justify-between text-lg font-semibold text-gray-800">
          <span>Total:</span> <span className="text-black-500">{stats.total}</span>
        </li>
      </ul>
    </div>
  );
}

export default Stats;
