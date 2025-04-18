import './app.js';
// Tombol Reset Filter
const resetFilterBtn = document.getElementById('reset-filter');

resetFilterBtn.addEventListener('click', (e) => {
  e.preventDefault(); // cegah reload form (kalau ada)
  filterDateInput.value = '';
  filterCategorySelect.value = '';

  renderTransactions();   // tampilkan ulang transaksi semua
  updateBalance();        // update saldo total
  renderChart();          // update grafik
});
