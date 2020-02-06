import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { Link } from "react-router-dom"

// components
import { localStorageUser } from "../actions/index"

import Logo from "./Logo"

const StyledHr = styled.hr`
  margin: 2% 25% 2% 0%;
`

const Navigation = props => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(localStorageUser())
  }, [])
  return (
    <div>
      <nav className="flexThis">
        <Logo />
        {/* {localStorage.getItem("token") && ( */}
        <Link className="links" to="/profile/">
          Profile
        </Link>
        {/* )} */}
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
