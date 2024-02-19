
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../reducers/transactionReducer';

const AddTransactionForm = () => {
  const dispatch = useDispatch();
  const [transaction, setTransaction] = useState({ description: '', category: '', date: '', amount: '' });

  const handleChange = e => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  console.log("transaction",transaction)
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addTransaction(transaction));
    setTransaction({ description: '', category: '', date: '',amount: '' });
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Description"
          style={{borderRadius:"5px",height:"25px"}}
          value={transaction.description}
          onChange={handleChange}
        />
        <input
          type="text"
          style={{borderRadius:"5px",height:"25px"}}
          name="category"
          placeholder="Category"
          value={transaction.category}
          onChange={handleChange}
        />
         <input
          type="date"
          style={{borderRadius:"5px",height:"28px"}}
          name="date"
          placeholder="Date"
          value={transaction.date}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          style={{borderRadius:"5px",height:"25px"}}
          placeholder="Amount"
          value={transaction.amount}
          onChange={handleChange}
        />
        <button type="submit"  style={{borderRadius:"5px",height:"30px"}}>Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransactionForm;
