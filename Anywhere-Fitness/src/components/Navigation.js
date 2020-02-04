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
          <Link to="/attendees"> Attendees </Link>
          <Link to="/instructors"> Instructors </Link>
          {/* <Link to={"/Logout"}> Logout </Link> */}
        </nav>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/attendees" component={AttendeeActivities} />
          <Route path="/instructors" component={InstructorActivities} />
        </Switch>
        <StyledHr />
      </div>

      {/* <StyledHr /> */}
    </Router>
  )
}

export default Navigation
