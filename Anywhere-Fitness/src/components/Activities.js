import React from "react"
import { Route, BrowserRouter as Router } from "react-router-dom"

// components
import InstructorRoute from "./InstructorRoute"
import InstructorActivities from "./InstructorActivities"
import AttendeeRoute from "./AttendeeRoute";
import AttendeeActivities from "./AttendeeActivities";

export const Activities = () => {
  return (
    <div>
      <Router>
        <InstructorRoute
          path="/Activities/Instructors"
          component={InstructorActivities}
        />
        <AttendeeRoute
          path ="/activities/attendees"
          component={AttendeeActivities} 
        />
      </Router>
    </div>
  )
}
