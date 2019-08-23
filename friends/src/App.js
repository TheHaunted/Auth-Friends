import React from 'react';
import './App.css';
import Login from './components/Login.js';
import { Route, Redirect } from 'react-router-dom';
import Friends from './components/Friends.js';


const ProtectedRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={props => 
    localStorage.getItem('token') ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  } />
}

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/friends" component={Friends} />
    </div>
  );
}

export default App;
