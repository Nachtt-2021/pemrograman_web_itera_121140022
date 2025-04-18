import { formatRupiah, filterByCategory, filterByDate, calculateBalance } from './modules/utils.js';
import { TransactionManager } from './modules/data.js';

const transactionManager = new TransactionManager();

// DOM Elements
const form = document.getElementById('transaction-form');
const descInput = document.getElementById('desc');
const amountInput = document.getElementById('amount');
const dateInput = document.getElementById('date');
const categoryInput = document.getElementById('category');
const typeInput = document.getElementById('type');

const balanceEl = document.getElementById('balance');
const incomeEl = document.getElementById('total-income');
const expenseEl = document.getElementById('total-expense');

const listEl = document.getElementById('transaction-list');
const filterDate = document.getElementById('filter-date');
const filterCategory = document.getElementById('filter-category');
const chartEl = document.getElementById('category-chart');

let myChart = null;

// Render Transactions
function renderTransactions(data = transactionManager.getTransactions()) {
  listEl.innerHTML = '';

  data.forEach(tx => {
    const li = document.createElement('li');
    li.className = tx.type;
    li.innerHTML = `
      <span>
        ${tx.description} - ${formatRupiah(tx.amount)}<br/>
        <small>${tx.category} | ${tx.date}</small>
      </span>
      <button onclick="deleteTx(${tx.id})">Hapus</button>
    `;
    listEl.appendChild(li);
  });
}

// Update Saldo
function updateSummary() {
  const all = transactionManager.getTransactions();
  const income = all.filter(tx => tx.type === 'income').reduce((a, b) => a + b.amount, 0);
  const expense = all.filter(tx => tx.type === 'expense').reduce((a, b) => a + b.amount, 0);
  const balance = income - expense;

  balanceEl.textContent = formatRupiah(balance);
  incomeEl.textContent = formatRupiah(income);
  expenseEl.textContent = formatRupiah(expense);
}

// Tambah Transaksi
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newTx = {
    description: descInput.value,
    amount: parseInt(amountInput.value),
    date: dateInput.value,
    category: categoryInput.value,
    type: typeInput.value
  };

  transactionManager.addTransaction(newTx);
  form.reset();
  renderTransactions();
  updateSummary();
  renderChart();
});

// Filter
function applyFilter() {
  const all = transactionManager.getTransactions();
  const date = filterDate.value;
  const category = filterCategory.value;

  let filtered = all;
  if (date) filtered = filterByDate(filtered, date);
  if (category) filtered = filterByCategory(filtered, category);

  renderTransactions(filtered);
}

filterDate.addEventListener('input', applyFilter);
filterCategory.addEventListener('change', applyFilter);

document.getElementById('reset-filter').addEventListener('click', () => {
  filterDate.value = '';
  filterCategory.value = '';
  renderTransactions();
});

// Delete transaksi dari luar modul
window.deleteTx = function (id) {
  transactionManager.deleteTransaction(id);
  renderTransactions();
  updateSummary();
  renderChart();
};

// Chart.js
function renderChart() {
  const all = transactionManager.getTransactions();
  const categories = ['makan', 'nongki', 'bensin', 'lainnya'];
  const chartData = categories.map(cat =>
    all
      .filter(tx => tx.type === 'expense' && tx.category === cat)
      .reduce((a, b) => a + b.amount, 0)
  );

  if (myChart) myChart.destroy();

  myChart = new Chart(chartEl, {
    type: 'bar',
    data: {
      labels: categories.map(c => c[0].toUpperCase() + c.slice(1)),
      datasets: [{
        label: 'Pengeluaran per Kategori',
        data: chartData,
        backgroundColor: ['#f39c12', '#9b59b6', '#e74c3c', '#3498db'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}

// Init
function init() {
  renderTransactions();
  updateSummary();
  renderChart();
}

init();
