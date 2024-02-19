import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 650,
  },
  tableHead: {
    backgroundColor: theme.palette.primary.main,
  },
  tableHeadCell: {
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  tableRow: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

const TransactionList = () => {
  const classes = useStyles();
  const transactions = useSelector(state => state.transactions.transactions);

  return (
    <div>
      <h3>Recent Transactions</h3>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="transaction table">
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell className={classes.tableHeadCell}>Sr.No.</TableCell>
              <TableCell className={classes.tableHeadCell}>Description</TableCell>
              <TableCell className={classes.tableHeadCell}>Category</TableCell>
              <TableCell className={classes.tableHeadCell}>Amount</TableCell>
              <TableCell className={classes.tableHeadCell}>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions?.map((transaction, index) => (
              <TableRow key={index} className={classes.tableRow}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{transaction?.description}</TableCell>
                <TableCell>{transaction?.category}</TableCell>
                <TableCell>{transaction?.amount}</TableCell>
                <TableCell>{transaction?.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TransactionList;
