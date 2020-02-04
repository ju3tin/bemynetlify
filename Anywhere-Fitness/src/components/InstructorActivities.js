import React, { useEfect } from "react"
import { Route } from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { connect } from "react-redux"
import { getClasses } from "../actions/index"

const InstructorActivities = props => {
  return (
    <div>
      <Route path="/Instructors">
        <h1>Instructor Activities</h1>
        {props.classes.map((item, i) => (
          <div key={i}>
            <p>{item.class_name}</p>
            <p>{item.class_duration}</p>
            <p>{item.class_intensity}</p>
            <p></p>
          </div>
        ))}
      </Route>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    classes: state.classes
  }
}

export default connect(mapStateToProps, { getClasses })(InstructorActivities)
