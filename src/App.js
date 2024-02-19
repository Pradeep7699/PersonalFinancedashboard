// App.js
import React from 'react';
import { BrowserRouter , Route,Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
// import PrivateRoute from './components/PrivateRoute';
import Login from './Components/Authentication/Login';
import Dashboard from './Components/Dashboard/Dashboard';
// import Dashboard from './components/Dashboard';

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter> 
       <Routes>
          <Route path="/" element={<Login/>} />
          {/* <PrivateRoute exact path="/" component={Dashboard} /> */}
          <Route  path="/dashboard" element={<Dashboard/>} />
      </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;









