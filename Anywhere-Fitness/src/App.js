import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Dashboard from './components/Dashboard';
import PrivateRoute from "./components/PrivateRoute";


function App() {



  return (
  
  <Router>
    <div className="App">

        <Switch>
        <div className="flexHeader">

        <div className="sectionBorder">
        <LoginPage />
        </div>

        <div className="sectionBorder">
        <RegisterPage />
        </div>

        <PrivateRoute path="/Dashboard" component={Dashboard} />

        </div>
        </Switch>

    </div>
  </Router>

  );
}

export default App;
