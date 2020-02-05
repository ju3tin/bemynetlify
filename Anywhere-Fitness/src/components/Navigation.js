import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import styled from "styled-components"
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"

// components
import InstructorActivities from "./InstructorActivities"
import AttendeeActivities from "./AttendeeActivities"
import Dashboard from "./Dashboard"
import Profile from "./Profile";
import PrivateRoute from "./PrivateRoute"
import Logo from "./Logo"

const StyledHr = styled.hr`
  margin: 2% 25% 2% 0%;
`

const Navigation = props => {
  const user = JSON.parse(localStorage.getItem("user"))
  return (
    <Router>
      <div>
        <nav className="flexThis">
        <Link className="links, linksfix1" to={"/Dashboard"}>
            {" "}
            Home{" "}
          </Link>
          <Logo />
          <Link className="links, linksfix2" to="/profile/">Profile</Link>

          
          {props.user.role === "attendee" && (
            <Link className="links" to="/attendees">
              {" "}
              Attendees{" "}
            </Link>
          )}
          {props.user.role === "instructor" && (
            <Link className="links" to="/instructors">
              {" "}
              Instructors{" "}
            </Link>
          )}
          {/* <Link to={"/Logout"}> Logout </Link> */}
        </nav>
        <Switch>
          <Route exact path="/" component={Dashboard} />

          <Route path="/profile" component={Profile} />
          <PrivateRoute path="/attendees" component={AttendeeActivities} />
          <PrivateRoute path="/instructors" component={InstructorActivities} />
        </Switch>
        <StyledHr />
      </div>

      {/* <StyledHr /> */}
    </Router>
  )
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect (mapStateToProps, {})(Navigation)
