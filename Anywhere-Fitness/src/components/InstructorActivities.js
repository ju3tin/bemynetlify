import React from "react"
import { Route } from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth"

const InstructorActivities = () => {
  return (
    <div>
      <Route path="/Instructors">
        <h1>Instructor Activities</h1>
      </Route>
    </div>
  )
}
export default InstructorActivities
