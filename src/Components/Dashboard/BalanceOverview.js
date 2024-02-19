import React from 'react';
import { useSelector } from 'react-redux';

const BalanceOverview = () => {
  const originalTransactions = useSelector(state => state.transactions.originalTransactions);
  const balance = originalTransactions?.reduce((total, transaction) => total + Number(transaction.amount), 0);

  return (
    <div>
      <h3>Balance Overview</h3>
      <p>Current Balance: {balance?.toFixed(2)}</p>
    </div>
  );
};

export default BalanceOverview;
