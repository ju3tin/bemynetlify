import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"

// components
import {
  localStorageUser,
  DELETE_CLASSES_SUCCESS,
  NAV_COMPLETE,
  NAV_START
} from "../actions/index"
import InstructorActivities from "./InstructorActivities"
import AttendeeActivities from "./AttendeeActivities"
import Dashboard from "./Dashboard"
import Profile from "./Profile"
import PrivateRoute from "./PrivateRoute"

const StyledHr = styled.hr`
  margin: 2% 25% 2% 0%;
`

const Navigation = props => {
  // const user = JSON.parse(localStorage.getItem("user"))
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(localStorageUser())
  }, [])
  return (
    <div>
      <nav className="flexThis">
        {localStorage.getItem("token") && (
          <Link className="links" to="/profile/">
            Profile
          </Link>
        )}
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

        <button
          onClick={() => {
            localStorage.clear("token")
            localStorage.clear("user")
            window.location.reload()
          }}
        >
          Log Out
        </button>

        <Link to="/">Log In</Link>
      </nav>

      <StyledHr />
    </div>
  )
}

export default Navigation
