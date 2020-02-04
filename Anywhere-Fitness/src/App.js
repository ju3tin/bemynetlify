import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Dashboard from './components/Dashboard';


function App() {



  return (

  <div className="App">

      <div className="flexHeader">

      <div className="sectionBorder">
      <LoginPage />
      </div>

      <div className="sectionBorder">
      <RegisterPage />
      </div>

      </div>

  </div>

  );
}

export default App;
