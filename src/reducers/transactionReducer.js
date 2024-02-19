import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  transactions: [],
  originalTransactions: [], // Store original transactions for filtering
};

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction(state, action) {
      state.transactions.push(action.payload);
      state.originalTransactions.push(action.payload);
    },
    filterTransactions(state, action) {
      const filteredTransactions = state.originalTransactions.filter(transaction =>
        transaction.category.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.transactions = filteredTransactions;
    },
    sortTransactions(state, action) {
      if (action.payload === 'date') {
        state.transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (action.payload === 'amount') {
        state.transactions.sort((a, b) => b.amount - a.amount);
      }
    },
  },
});

export const { addTransaction, filterTransactions, sortTransactions } = transactionSlice.actions;
export default transactionSlice.reducer;
