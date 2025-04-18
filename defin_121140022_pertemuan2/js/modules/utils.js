// Format angka jadi Rupiah
export function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(number);
  }
  
  // Filter transaksi berdasarkan kategori
  export function filterByCategory(transactions, category) {
    return transactions.filter(tx => tx.category === category);
  }
  
  // Filter transaksi berdasarkan tanggal
  export function filterByDate(transactions, date) {
    return transactions.filter(tx => tx.date === date);
  }
  
  // Hitung total saldo, pemasukan, dan pengeluaran
  export function calculateBalance(transactions) {
    const income = transactions
      .filter(tx => tx.type === 'income')
      .reduce((acc, cur) => acc + cur.amount, 0);
  
    const expense = transactions
      .filter(tx => tx.type === 'expense')
      .reduce((acc, cur) => acc + cur.amount, 0);
  
    return {
      balance: income - expense,
      income,
      expense
    };
  }
  