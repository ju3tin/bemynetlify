import React from "react"
import { Route, BrowserRouter as Router } from "react-router-dom"
import InstructorRoute from "./InstructorRoute"
import InstructorActivities from "./InstructorActivities"

export const Activities = () => {
  return (
    <div>
      <Router>
        <InstructorRoute
          path="/Activities/Instructors"
          component={InstructorActivities}
        />
      </Router>
    </div>
  )
}
