import React from "react"
import "./App.css"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import Dashboard from "./components/Dashboard"
import { Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <div className="flexHeader">
        <div className="sectionBorder">
          <LoginPage />
        </div>

        <div className="sectionBorder">
          <Route exact path="/" component={RegisterPage} />
        </div>
      </div>
    </div>
  )
}

export default App
