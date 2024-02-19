import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../reducers/authReducer';
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    backgroundColor: '#f44336',
    color: 'white',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: '#d32f2f',
    },
  },
  logoutContainer: {
    position: 'fixed',
    top: '10px',
    right: '10px',
    zIndex: '999', // Ensure the button is above other content
  },
}));

const Logout = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className={classes.logoutContainer}>
      <Button variant="contained" className={classes.button} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Logout;
