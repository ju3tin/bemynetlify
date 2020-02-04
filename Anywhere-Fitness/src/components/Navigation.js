import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
import InstructorActivities from "./InstructorActivities"
import AttendeeActivities from "./AttendeeActivities"
import Dashboard from "./Dashboard"

const StyledHr = styled.hr`
  margin: 2% 25% 2% 0%;
`

const Navigation = () => {
  return (
    <Router>
      <div>
        <nav className="flexThis">
          <Link to={"/Dashboard"}> Home </Link>
          <Link to={"/Attendees"}> Attendees </Link>
          <Link to={"/Instructors"}> Instructors </Link>
          {/* <Link to={"/Logout"}> Logout </Link> */}
        </nav>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/attendees">
            <AttendeeActivities />
          </Route>
          <Route path="/instructors">
            <InstructorActivities />
          </Route>
        </Switch>
        <StyledHr />
      </div>
    </Router>
  )
}

export default Navigation
