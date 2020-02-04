import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
import InstructorActivities from "./InstructorActivities"
import AttendeeActivities from "./AttendeeActivities"
import Dashboard from "./Dashboard"
import { useSelector } from "react-redux"
import PrivateRoute from "./PrivateRoute"

const StyledHr = styled.hr`
  margin: 2% 25% 2% 0%;
`

const Navigation = () => {
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <Router>
      <div>
        <nav className="flexThis">
          <Link className="links" to={"/Dashboard"}>
            {" "}
            Home{" "}
          </Link>
          {user.role === "attendee" && (
            <Link className="links" to="/attendees">
              {" "}
              Attendees{" "}
            </Link>
          )}
          {user.role === "instructor" && (
            <Link className="links" to="/instructors">
              {" "}
              Instructors{" "}
            </Link>
          )}
          {/* <Link to={"/Logout"}> Logout </Link> */}
        </nav>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <PrivateRoute path="/attendees" component={AttendeeActivities} />
          <PrivateRoute path="/instructors" component={InstructorActivities} />
        </Switch>
        <StyledHr />
      </div>

      {/* <StyledHr /> */}
    </Router>
  )
}

export default Navigation
