import React from 'react';
import './App.css';
import LoginPage from './components/login'
import RegisterPage from './components/register'

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
