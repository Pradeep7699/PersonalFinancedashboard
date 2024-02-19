
import React from 'react';
import BalanceOverview from './BalanceOverview';
import TransactionList from './TransactionList';
import SpendingChart from './SpendingChart';
import AddTransactionForm from './AddTransactionForm';
import TransactionFilters from '../Filters/TransactionFilters';
import Logout from '../Authentication/Logout';


const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <Logout/>
     <BalanceOverview/>
      <TransactionFilters/>
     <TransactionList/>
     <AddTransactionForm/>
     <SpendingChart/>
    </div>
  );
};

export default Dashboard;
