import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

const InstructorRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        if (props.role === "instructor") {
          {
            console.log("role")
          }
          return <Component />
        } else {
          {
            console.log("login")
          }
          return <Redirect to="/login" />
        }
      }}
    />
  )
}

const mapStateToProps = state => {
  return {
    role: state.user.role
  }
}

export default connect(mapStateToProps, {})(InstructorRoute)
