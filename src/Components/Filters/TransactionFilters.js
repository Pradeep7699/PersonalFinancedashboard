import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterTransactions, sortTransactions } from '../../reducers/transactionReducer';

const TransactionFilters = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const handleFilterChange = e => {
    const value = e.target.value;
    setFilter(value);
    dispatch(filterTransactions(value));
  };

  const handleSortChange = e => {
    const value = e.target.value;
    setSort(value);
    dispatch(sortTransactions(value));
  };

  return (
    <div>
      <h3>Filter and Sort Transactions:</h3>
        <div style={{ display:"flex" ,flexDirection:"row" }}> 
        <label>
          Filter by Category:
          </label>
          <input
            type="text"
            style={{ borderRadius: "5px", height: "20px" , marginLeft: '5px'}}
            name="category"
            value={filter}
            onChange={handleFilterChange}
          />
    
     <div style={{ marginLeft: '18px' }}> </div>
      <label>
        Sort by:
        </label>
        <select
          style={{ borderRadius: "5px", height: "28px", marginLeft: '5px'}}
          value={sort}
          onChange={handleSortChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
     
    </div>
    </div>
  );
};

export default TransactionFilters;
