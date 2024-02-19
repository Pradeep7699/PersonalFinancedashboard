import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../reducers/authReducer';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: '5px',
    marginTop: theme.spacing(2),
    width:"120px"
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    marginTop:"-100px"
  },
  input: {
    borderRadius: '5px',
    marginBottom: theme.spacing(1),
    width: '300px',
    height: '25px',
  },
}));

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Mock authentication logic
    const mockCredentials = [
      { username: 'User', password: '12345' },
    ];
    const matchedUser = mockCredentials.find(user => user.username === credentials.username && user.password === credentials.password);
    if (matchedUser) {
      dispatch(login(credentials)); // Dispatch login action
      navigate('/dashboard');
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <label style={{ marginLeft: '-190px'}} > Enter Username</label>
       < div style={{ marginTop: '10px' }}> </div>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          className={classes.input}
          value={credentials.username}
          onChange={handleChange}
          required
        />
        <label  style={{ marginLeft: '-198px'}} > Enter Password</label>
        < div style={{ marginTop: '10px' }}> </div>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          className={classes.input}
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <Button variant="contained" type="submit" className={classes.button}>Login</Button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
