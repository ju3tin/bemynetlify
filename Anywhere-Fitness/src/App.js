import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"
import LoginPage from "./components/LoginPage"
import RegisterPage from "./components/RegisterPage"
import Navigation from "./components/Navigation"
import PrivateRoute from "./components/PrivateRoute"
import InstructorActivities from "./components/InstructorActivities"
import Profile from "./components/Profile"
import AttendeeActivities from "./components/AttendeeActivities"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <Router>
      <div className="App">
        <div className="flexHeader">
          <Navigation />
        </div>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/" component={RegisterPage} />
          <Route path="/profile" component={Profile} />
          <Route path="/attendees" component={AttendeeActivities} />
          <Route path="/instructors" component={InstructorActivities} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
