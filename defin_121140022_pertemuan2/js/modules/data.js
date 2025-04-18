export class TransactionManager {
  constructor() {
    this.transactions = JSON.parse(localStorage.getItem('transactions')) || [];
  }

  addTransaction(transaction) {
    const newTransaction = {
      id: Date.now(),
      ...transaction,
    };
    this.transactions.push(newTransaction);
    this.saveTransactions();
  }

  deleteTransaction(id) {
    this.transactions = this.transactions.filter(tx => tx.id !== id);
    this.saveTransactions();
  }

  getTransactions() {
    return this.transactions;
  }

  saveTransactions() {
    localStorage.setItem('transactions', JSON.stringify(this.transactions));
  }
}
