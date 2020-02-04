import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import Dashboard from "./components/Dashboard"
import PrivateRoute from "./components/PrivateRoute"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <div className="flexHeader">
            <Route exact path="/" component={LoginPage} />

            <Route exact path="/" component={RegisterPage} />

            <PrivateRoute path="/Dashboard" component={Dashboard} />
          </div>
        </Switch>
      </div>
    </Router>
  )
}

export default App
